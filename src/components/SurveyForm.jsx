import { Formik, Form } from "formik";
import * as Yup from "yup";
import PropTypes from "prop-types";

import { ROLES } from "../constants";

import FormikRadioGroup from "./FormikRadioGroup";
import FormikSelect from "./FormikSelect";
import FormikTextInput from "./FormikTextInput";

import "./Survey.css";
import "./SurveyForm.css";

function SurveyForm({
  surveyId,
  questionsAndAnswers,
  submitButtonLabel,
  handleSubmit,
}) {
  // Generate initial values
  const initialValues = {
    selectedRole: "",
    employeeJobTitle: "",
    otherRole: "",
  };

  questionsAndAnswers.forEach((_, index) => {
    initialValues[`question-${index}`] = "";
  });

  const questionsAndAnswersValidationSchema = {};
  questionsAndAnswers.forEach((_, index) => {
    questionsAndAnswersValidationSchema[`question-${index}`] =
      Yup.string().required("Required");
  });

  const validationSchema = Yup.object().shape({
    ...questionsAndAnswersValidationSchema,
    selectedRole: Yup.string().required("Required"),
    employeeJobTitle: Yup.string().when("selectedRole", {
      is: "Employee",
      then: (schema) => schema.required("Required"),
    }),
    otherRole: Yup.string().when("selectedRole", {
      is: "Other",
      then: (schema) => schema.required("Required"),
    }),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, errors, touched }) => (
        <Form className="survey-questions">
          {questionsAndAnswers.map(({ question, answers }, questionIndex) => (
            <div
              key={`survey${surveyId}-q${questionIndex}`}
              id={`survey${surveyId}-q${questionIndex}`}
              className="survey-question"
            >
              <p>
                {questionIndex + 1}. {question}
              </p>
              <FormikRadioGroup
                name={`question-${questionIndex}`}
                options={answers}
                touched={touched[`question-${questionIndex}`]}
                error={errors[`question-${questionIndex}`]}
              />
            </div>
          ))}
          <div id={`survey${surveyId}-role`} className="survey-question">
            <FormikSelect
              label="What best describes you?"
              name="selectedRole"
              options={ROLES}
            />
            {values.selectedRole === "Employee" && (
              <FormikTextInput
                label="Job title"
                isLabelHidden={true}
                name="employeeJobTitle"
                type="text"
                placeholder="Job title"
              />
            )}
            {values.selectedRole === "Other" && (
              <FormikTextInput
                label="Other role"
                isLabelHidden={true}
                name="otherRole"
                type="text"
              />
            )}
          </div>

          <button type="submit">{submitButtonLabel}</button>
        </Form>
      )}
    </Formik>
  );
}

SurveyForm.propTypes = {
  surveyId: PropTypes.string.isRequired,
  questionsAndAnswers: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
      answers: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    })
  ).isRequired,
  submitButtonLabel: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default SurveyForm;
