import { Formik, Form } from "formik";
import * as Yup from "yup";
import PropTypes from "prop-types";

import {
  CREDIT_OPTIONS,
  CREDIT_OPTIONS_TO_METADATA,
  WAGE_TYPES,
  WORKING_HOURS_IN_A_YEAR,
} from "../constants";

import FormikTextInput from "./FormikTextInput";
import FormikCheckbox from "./FormikCheckbox";
import FormikSelect from "./FormikSelect";
import OutputDisplay from "./OutputDisplay";

import "./TrainingCostsPanel.css";

import roiTrainingCostsImgUrl from "../../images/roi-training-costs.jpg";

function TrainingCostsPanel({
  trainingCosts,
  setTrainingCosts,
  setIsTrainingCostsCalculated,
}) {
  const numberOfEmployeesId = "number-of-employees";
  const costId = "cost";
  const includeLostProductivityCostsId = "include-lost-productivity-costs";
  const creditOptionId = "credit-option";
  const wageTypeId = "wage-type";
  const averageWageId = "average-wage";

  const validationSchema = Yup.object({
    [numberOfEmployeesId]: Yup.number()
      .min(0, "Invalid number of employees")
      .required("Required"),
    [costId]: Yup.number().min(0, "Invalid cost").required("Required"),
    [includeLostProductivityCostsId]: Yup.boolean(),
    [creditOptionId]: Yup.string().when("include-lost-productivity-costs", {
      is: true,
      then: (schema) =>
        schema
          .oneOf(CREDIT_OPTIONS, "Invalid credit option")
          .required("Required"),
    }),
    [wageTypeId]: Yup.string().when("include-lost-productivity-costs", {
      is: true,
      then: (schema) =>
        schema.oneOf(WAGE_TYPES, "Invalid wage type").required("Required"),
    }),
    [averageWageId]: Yup.number().when("include-lost-productivity-costs", {
      is: true,
      then: (schema) => schema.min(0, "Invalid wage").required("Required"),
    }),
  });

  const calculateTrainingCosts = (values) => {
    const numberOfEmployees = values[numberOfEmployeesId];
    const cost = values[costId];
    const includeLostProductivityCosts = values[includeLostProductivityCostsId];
    const creditOption = values[creditOptionId];
    const wageType = values[wageTypeId];
    const averageWage = values[averageWageId];

    const costOfCourse = parseFloat(cost);
    let averageHourlyWage = 0;
    let hoursToCompleteCourse = 0;

    if (includeLostProductivityCosts) {
      hoursToCompleteCourse =
        CREDIT_OPTIONS_TO_METADATA[creditOption].hoursToComplete;

      if (wageType === "Hourly") {
        averageHourlyWage = averageWage;
      } else if (wageType === "Annual") {
        averageHourlyWage = averageWage / WORKING_HOURS_IN_A_YEAR;
      }
    }

    return (
      (costOfCourse + averageHourlyWage * hoursToCompleteCourse) *
      parseInt(numberOfEmployees, 10)
    );
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
            [numberOfEmployeesId]: "0",
            [costId]: "0",
            [includeLostProductivityCostsId]: false,
            [creditOptionId]: "",
            [wageTypeId]: "",
            [averageWageId]: "0",
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            const totalCosts = calculateTrainingCosts(values);
            setTrainingCosts(totalCosts.toString());
            setIsTrainingCostsCalculated(true);
          }}
        >
          {({ values }) => (
            <Form className="form-container">
              <div className="form-element">
                <FormikTextInput
                  label="Number of Employees"
                  name={numberOfEmployeesId}
                  type="number"
                />
              </div>

              <div className="form-element">
                <FormikTextInput
                  label="Cost per Employee ($)"
                  name={costId}
                  type="number"
                />
              </div>

              <div className="form-element">
                <FormikCheckbox name={includeLostProductivityCostsId}>
                  Include lost productivity costs
                </FormikCheckbox>

                <p className="input-description">
                  Selecting this option will include the additional cost
                  associated with lost productivity. This is equal to the
                  average hourly employee wage multiplied by the number of hours
                  needed to take the course.
                </p>
              </div>

              {values[includeLostProductivityCostsId] && (
                <>
                  <div className="form-element">
                    <FormikSelect
                      label="Credit Option"
                      name={creditOptionId}
                      options={CREDIT_OPTIONS}
                    />
                    <p className="input-description">
                      This will determine the number of hours needed to complete
                      the program.
                    </p>
                  </div>

                  <div className="form-element">
                    <FormikSelect
                      label="Wage Type"
                      name={wageTypeId}
                      options={WAGE_TYPES}
                    />
                  </div>

                  <div className="form-element">
                    <FormikTextInput
                      label="Average Employee Wage ($)"
                      name={averageWageId}
                      type="number"
                    />
                  </div>
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
  setIsTrainingCostsCalculated: PropTypes.func.isRequired,
};

export default TrainingCostsPanel;
