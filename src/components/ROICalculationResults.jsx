import { useState } from "react";
import PropTypes from "prop-types";

import { areInputsValid } from "../utilities";

import ErrorMessage from "./ErrorMessage";

import "./ROICalculationResults.css";

function ROICalculationResults({
  surveyId,
  surveyScore,
  resultDescription,
  feedbackIntro,
  selectedRole,
  hrRecommendation,
}) {
  const [feedback, setFeedback] = useState("");
  const [isSubmitConfirmationVisible, setIsSubmitConfirmationVisible] =
    useState(false);

  const [errors, setErrors] = useState({});

  const getValidationErrors = () => {
    const newErrors = {};

    if (!feedback) newErrors.feedback = "Please enter your feedback";

    return newErrors;
  };

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const submitFeedback = () => {
    if (!areInputsValid(getValidationErrors, setErrors)) {
      setIsSubmitConfirmationVisible(false);
      return;
    }

    console.log(feedback);
    setIsSubmitConfirmationVisible(true);
  };

  return (
    <div className="roi-calculation-results">
      <h4>Your Result: {surveyScore.toString()}/5.0</h4>
      <p>
        <b>Result: </b>
        {resultDescription}
      </p>
      {feedbackIntro && (
        <>
          <p>
            <b>Feedback: </b>
            {feedbackIntro}
          </p>
          <label htmlFor={`feedback-${surveyId}`} hidden></label>
          <textarea
            id={`feedback-${surveyId}`}
            name="feedback"
            onChange={handleFeedbackChange}
          ></textarea>
          <ErrorMessage message={errors.feedback} />
          <div className="submit-feedback-button-container">
            <button type="submit" onClick={() => submitFeedback()}>
              Submit
            </button>
          </div>
          {isSubmitConfirmationVisible && (
            <p className="submit-confirmation">
              Submitted! Thank you for your feedback.
            </p>
          )}
        </>
      )}
      {selectedRole === "HR Professional" && (
        <p>
          <b>Recommendation for Human Resources: </b>
          {hrRecommendation}
        </p>
      )}
    </div>
  );
}

ROICalculationResults.propTypes = {
  surveyId: PropTypes.string.isRequired,
  surveyScore: PropTypes.number.isRequired,
  resultDescription: PropTypes.string.isRequired,
  feedbackIntro: PropTypes.string.isRequired,
  selectedRole: PropTypes.string.isRequired,
  hrRecommendation: PropTypes.string.isRequired,
};

export default ROICalculationResults;
