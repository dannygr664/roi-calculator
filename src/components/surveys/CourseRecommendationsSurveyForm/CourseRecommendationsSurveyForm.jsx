import { Formik, Form } from "formik";
import * as Yup from "yup";
import PropTypes from "prop-types";

import { ROLES } from "@/utils/constants";

import {
  FormikRadioGroup,
  FormikSelect,
  FormikTextInput,
  FormikScrollToError,
} from "@components/forms";

import "../Survey.css";
import "../SurveyForm/SurveyForm.css";

function CourseRecommendationsSurveyForm({
  formId,
  questionsAndAnswers,
  submitButtonLabel,
  handleSubmit,
}) {
  const initialValues = {
    challenges: "",
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
    challenges: Yup.string(),
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
              key={`${formId}-q${questionIndex}`}
              id={`${formId}-q${questionIndex}`}
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
          <div id={`${formId}-challenges`} className="survey-question">
            <FormikTextInput
              label="What other challenges or pain points have you encountered at your organization? (optional)"
              isLabelHidden={false}
              name={`${formId}-challenges`}
              type="text"
            />
          </div>
          <div id={`${formId}-role`} className="survey-question">
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

          <FormikScrollToError formId={formId} />

          <button type="submit">{submitButtonLabel}</button>
        </Form>
      )}
    </Formik>
  );
}

CourseRecommendationsSurveyForm.propTypes = {
  formId: PropTypes.string.isRequired,
  questionsAndAnswers: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
      answers: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    })
  ).isRequired,
  submitButtonLabel: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default CourseRecommendationsSurveyForm;
