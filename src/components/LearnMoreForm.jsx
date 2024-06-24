import { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import PropTypes from "prop-types";

import FormikTextInput from "./FormikTextInput";

import "./LearnMoreForm.css";

function LearnMoreForm({ surveyId }) {
  const [isSubmitConfirmationVisible, setIsSubmitConfirmationVisible] =
    useState(false);

  const nameId = `survey${surveyId}-name`;
  const emailId = `survey${surveyId}-email`;

  return (
    <Formik
      initialValues={{
        [nameId]: "",
        [emailId]: "",
      }}
      validationSchema={Yup.object({
        [nameId]: Yup.string().required("Required"),
        [emailId]: Yup.string()
          .email("Invalid email address")
          .required("Required"),
      })}
      onSubmit={(values) => {
        console.log(values[nameId], values[emailId]);
        setIsSubmitConfirmationVisible(true);
      }}
    >
      <Form className="learn-more-form">
        <div className="learn-more-form-inputs-container">
          <div className="form-element">
            <FormikTextInput label="Name" name={nameId} type="text" />
          </div>

          <div className="form-element">
            <FormikTextInput label="Email" name={emailId} type="email" />
          </div>
        </div>

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

LearnMoreForm.propTypes = {
  surveyId: PropTypes.string.isRequired,
};

export default LearnMoreForm;
