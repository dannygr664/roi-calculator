import { useState } from "react";
import { useFormik } from "formik";
import PropTypes from "prop-types";

import ErrorMessage from "./ErrorMessage";

import "./LearnMoreForm.css";

function LearnMoreForm({ surveyId }) {
  const [isSubmitConfirmationVisible, setIsSubmitConfirmationVisible] =
    useState(false);

  const validate = (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = "Required";
    }

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
    },
    validate,
    onSubmit: (event, values) => {
      console.log(values.name, values.email);
      setIsSubmitConfirmationVisible(true);
    },
  });

  return (
    <form className="submit-name-and-email-form" onSubmit={formik.handleSubmit}>
      <div className="submit-name-and-email-container">
        <div className="form-element">
          <label htmlFor={`survey${surveyId}-name`}>Name</label>
          <input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && <ErrorMessage message={formik.errors.name} />}
        </div>

        <div className="form-element">
          <label htmlFor={`survey${surveyId}-email`}>Email</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && (
            <ErrorMessage message={formik.errors.email} />
          )}
        </div>
      </div>

      <button type="submit">Submit</button>
      {isSubmitConfirmationVisible && (
        <p className="submit-confirmation">
          Submitted! We will be in touch soon.
        </p>
      )}
    </form>
  );
}

LearnMoreForm.propTypes = {
  surveyId: PropTypes.string.isRequired,
};

export default LearnMoreForm;
