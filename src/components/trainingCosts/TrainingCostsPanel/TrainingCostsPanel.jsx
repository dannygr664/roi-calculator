import { useState, useRef } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import PropTypes from "prop-types";

import { CREDIT_OPTIONS, WAGE_TYPES } from "@/utils/constants";

import {
  FormikTextInput,
  FormikCheckbox,
  FormikGrid,
  FormikSelect,
} from "@components/forms";

import OutputDisplay from "@components/OutputDisplay/OutputDisplay";

import { calculateTrainingCosts } from "@components/trainingCosts";

import "./TrainingCostsPanel.css";

import roiTrainingCostsImgUrl from "@assets/images/roi-training-costs.jpg";

function TrainingCostsPanel({
  trainingCosts,
  setTrainingCosts,
  setNumberOfEmployees,
  setIsTrainingCostsCalculated,
}) {
  const validationSchema = Yup.object({
    numberOfEmployees: Yup.number()
      .min(0, "Invalid number of employees")
      .required("Required"),
    cost: Yup.number().min(0, "Invalid cost").required("Required"),
    includeLostProductivityCosts: Yup.boolean(),
    creditOption: Yup.string().when("includeLostProductivityCosts", {
      is: true,
      then: (schema) =>
        schema
          .oneOf(CREDIT_OPTIONS, "Invalid credit option")
          .required("Required"),
    }),
    wageRowData: Yup.array().when("includeLostProductivityCosts", {
      is: true,
      then: (schema) =>
        schema.test({
          name: "matchesNumberOfEmployees",
          test: (value, { createError, parent: { numberOfEmployees } }) => {
            let numberOfEmployeesAccountedFor = 0;
            for (let wageRow of value) {
              numberOfEmployeesAccountedFor += wageRow.numberOfEmployees;
            }
            return (
              numberOfEmployeesAccountedFor == numberOfEmployees ||
              createError({
                message: `${numberOfEmployeesAccountedFor}/${numberOfEmployees} employees accounted for`,
              })
            );
          },
        }),
    }),
  });

  const wageGridRef = useRef();
  const [wageRowData, setWageRowData] = useState([]);
  const wageColDefs = [
    {
      headerName: "Wage Type",
      field: "wageType",
      flex: 3,
      editable: true,
      cellEditor: "agSelectCellEditor",
      cellEditorParams: {
        values: WAGE_TYPES,
      },
      singleClickEdit: true,
      resizable: false,
    },
    {
      headerName: "Wage ($)",
      field: "wage",
      flex: 2,
      cellDataType: "number",
      editable: true,
      cellEditor: "agNumberCellEditor",
      cellEditorParams: {
        min: 0,
      },
      singleClickEdit: true,
      resizable: false,
    },
    {
      headerName: "Number of Employees",
      field: "numberOfEmployees",
      flex: 4,
      cellDataType: "number",
      editable: true,
      cellEditor: "agNumberCellEditor",
      cellEditorParams: {
        min: 1,
      },
      singleClickEdit: true,
      resizable: false,
    },
  ];

  const addWageRow = () => {
    setWageRowData([
      ...wageRowData,
      { wageType: WAGE_TYPES[0], wage: 0, numberOfEmployees: 1 },
    ]);
  };

  const removeSelectedWageRows = () => {
    const selectedRows = wageGridRef.current.api.getSelectedRows();
    const newWageRowData = [];
    for (let i = 0; i < wageRowData.length; i++) {
      let skip = false;
      for (let j = 0; j < selectedRows.length; j++) {
        if (wageRowData[i] === selectedRows[j]) {
          skip = true;
          break;
        }
      }
      if (!skip) {
        newWageRowData.push(wageRowData[i]);
      }
      setWageRowData(newWageRowData);
    }
  };

  return (
    <section className="panel-container">
      <section id="training-costs-form" className="form-container">
        <h2>Training Costs</h2>
        <p>
          First, we will estimate the total cost of training. Training Costs
          take into account the cost of the program and the number of employees
          registered.
        </p>

        <Formik
          initialValues={{
            numberOfEmployees: 0,
            cost: "0",
            includeLostProductivityCosts: false,
            creditOption: "",
            wageRowData: [],
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            setNumberOfEmployees(values.numberOfEmployees);
            const totalCosts = calculateTrainingCosts(values);
            setTrainingCosts(totalCosts.toString());
            setIsTrainingCostsCalculated(true);
          }}
        >
          {({ values }) => (
            <Form className="form-container">
              <FormikTextInput
                label="Number of Employees"
                name="numberOfEmployees"
                type="number"
              />

              <FormikTextInput
                label="Cost per Employee ($)"
                name="cost"
                type="number"
              />

              <div className="form-element">
                <FormikCheckbox name="includeLostProductivityCosts">
                  Include lost productivity costs
                </FormikCheckbox>

                <p className="input-description">
                  Selecting this option will include the additional cost
                  associated with lost productivity. This is equal to the
                  average hourly employee wage multiplied by the number of hours
                  needed to take the course.
                </p>
              </div>

              {values.includeLostProductivityCosts && (
                <>
                  <div className="form-element">
                    <FormikSelect
                      label="Credit Option"
                      name="creditOption"
                      options={CREDIT_OPTIONS}
                    />
                    <p className="input-description">
                      This will determine the number of hours needed to complete
                      the program.
                    </p>
                  </div>

                  <FormikGrid
                    label="Employee Wages"
                    rowData={wageRowData}
                    colDefs={wageColDefs}
                    gridRef={wageGridRef}
                    addRow={addWageRow}
                    removeSelectedRows={removeSelectedWageRows}
                    name="wageRowData"
                  />
                </>
              )}

              <button type="submit">Calculate Training Costs</button>
            </Form>
          )}
        </Formik>

        <OutputDisplay
          tag="training-costs"
          label="Training Costs"
          format="currency"
          outputValue={trainingCosts}
        />
      </section>
      <aside>
        <img
          src={roiTrainingCostsImgUrl}
          alt="ROI Calculator Intro"
          className="aside-img"
        />
      </aside>
    </section>
  );
}

TrainingCostsPanel.propTypes = {
  trainingCosts: PropTypes.string.isRequired,
  setTrainingCosts: PropTypes.func.isRequired,
  setNumberOfEmployees: PropTypes.func.isRequired,
  setIsTrainingCostsCalculated: PropTypes.func.isRequired,
};

export default TrainingCostsPanel;
