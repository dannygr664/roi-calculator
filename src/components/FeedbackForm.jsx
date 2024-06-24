import { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import PropTypes from "prop-types";

import FormikTextArea from "./FormikTextArea";

import "./FeedbackForm.css";

function FeedbackForm({ surveyId }) {
  const [isSubmitConfirmationVisible, setIsSubmitConfirmationVisible] =
    useState(false);

  const feedbackId = `survey${surveyId}-feedback`;

  return (
    <Formik
      initialValues={{
        [feedbackId]: "",
      }}
      validationSchema={Yup.object({
        [feedbackId]: Yup.string().required("Required"),
      })}
      onSubmit={(values) => {
        console.log(values[feedbackId]);
        setIsSubmitConfirmationVisible(true);
      }}
    >
      <Form>
        <FormikTextArea
          label="Feedback"
          name={feedbackId}
          isLabelHidden={true}
        />

        <button type="submit">Submit</button>
        {isSubmitConfirmationVisible && (
          <p className="submit-confirmation">
            Submitted! We will be in touch soon.
          </p>
        )}
      </Form>
    </Formik>
  );
}

FeedbackForm.propTypes = {
  surveyId: PropTypes.string.isRequired,
};

export default FeedbackForm;
