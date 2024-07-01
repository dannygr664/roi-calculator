import { Formik, Form } from "formik";
import * as Yup from "yup";
import PropTypes from "prop-types";

import { CREDIT_OPTIONS, WAGE_TYPES } from "@/utils/constants";

import {
  FormikTextInput,
  FormikCheckbox,
  FormikSelect,
} from "@components/forms";

import OutputDisplay from "@components/OutputDisplay/OutputDisplay";

import { calculateTrainingCosts } from "@components/trainingCosts";

import "./TrainingCostsPanel.css";

import roiTrainingCostsImgUrl from "@assets/images/roi-training-costs.jpg";

function TrainingCostsPanel({
  trainingCosts,
  setTrainingCosts,
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
    wageType: Yup.string().when("includeLostProductivityCosts", {
      is: true,
      then: (schema) =>
        schema.oneOf(WAGE_TYPES, "Invalid wage type").required("Required"),
    }),
    averageWage: Yup.number().when("includeLostProductivityCosts", {
      is: true,
      then: (schema) => schema.min(0, "Invalid wage").required("Required"),
    }),
  });

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
            numberOfEmployees: "0",
            cost: "0",
            includeLostProductivityCosts: false,
            creditOption: "",
            wageType: "",
            averageWage: "0",
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
                  name="numberOfEmployees"
                  type="number"
                />
              </div>

              <div className="form-element">
                <FormikTextInput
                  label="Cost per Employee ($)"
                  name="cost"
                  type="number"
                />
              </div>

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

                  <div className="form-element">
                    <FormikSelect
                      label="Wage Type"
                      name="wageType"
                      options={WAGE_TYPES}
                    />
                  </div>

                  <div className="form-element">
                    <FormikTextInput
                      label="Average Employee Wage ($)"
                      name="averageWage"
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
