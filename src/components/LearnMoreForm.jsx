import { useState } from "react";
import PropTypes from "prop-types";

import { areInputsValid } from "../utilities";

import ErrorMessage from "./ErrorMessage";

import "./LearnMoreForm.css";

function LearnMoreForm({ surveyId }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitConfirmationVisible, setIsSubmitConfirmationVisible] =
    useState(false);

  const [errors, setErrors] = useState({});

  const getValidationErrors = () => {
    const newErrors = {};

    if (!name) newErrors.name = "Please enter your name";
    if (!email) newErrors.email = "Please enter your email";

    return newErrors;
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!areInputsValid(getValidationErrors, setErrors)) {
      setIsSubmitConfirmationVisible(false);
      return;
    }

    console.log(name, email);
    setIsSubmitConfirmationVisible(true);
  };

  return (
    <form className="submit-name-and-email-form" onSubmit={handleSubmit}>
      <div className="submit-name-and-email-container">
        <div className="form-element">
          <label htmlFor={`name-${surveyId}`}>Name</label>
          <input
            id="name"
            name="name"
            type="text"
            value={name}
            onChange={handleNameChange}
          />
          <ErrorMessage message={errors.name} />
        </div>

        <div className="form-element">
          <label htmlFor={`email-${surveyId}`}>Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={handleEmailChange}
          />
          <ErrorMessage message={errors.email} />
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
