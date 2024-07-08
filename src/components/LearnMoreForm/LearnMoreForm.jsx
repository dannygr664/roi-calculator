import { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import PropTypes from "prop-types";

import { FormikTextInput } from "@components/forms";

import "./LearnMoreForm.css";

function LearnMoreForm({ formId }) {
  const [isSubmitConfirmationVisible, setIsSubmitConfirmationVisible] =
    useState(false);

  const nameId = `${formId}-name`;
  const emailId = `${formId}-email`;

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
          <FormikTextInput label="Name" name={nameId} type="text" />
          <FormikTextInput label="Email" name={emailId} type="email" />
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
  formId: PropTypes.string.isRequired,
};

export default LearnMoreForm;
