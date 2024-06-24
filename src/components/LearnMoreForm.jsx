import { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import PropTypes from "prop-types";

import "./LearnMoreForm.css";

function LearnMoreForm({ surveyId }) {
  const [isSubmitConfirmationVisible, setIsSubmitConfirmationVisible] =
    useState(false);

  const nameId = `survey${surveyId}-name`;
  const emailId = `survey${surveyId}-email;`;

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
      <Form className="submit-name-and-email-form">
        <div className="submit-name-and-email-container">
          <div className="form-element">
            <label htmlFor={nameId}>Name</label>
            <Field name={nameId} type="text" />
            <ErrorMessage
              name={nameId}
              component="div"
              className="error-message"
            />
          </div>

          <div className="form-element">
            <label htmlFor={emailId}>Name</label>
            <Field name={emailId} type="email" />
            <ErrorMessage
              name={emailId}
              component="div"
              className="error-message"
            />
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
