import { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import PropTypes from "prop-types";

import { FormikTextArea } from "@components/forms";

import "./FeedbackForm.css";

function FeedbackForm({ formId }) {
  const [isSubmitConfirmationVisible, setIsSubmitConfirmationVisible] =
    useState(false);

  const feedbackId = `${formId}-feedback`;

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
      <Form className="feedback-form">
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
  formId: PropTypes.string.isRequired,
};

export default FeedbackForm;
