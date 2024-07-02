import PropTypes from "prop-types";

import FeedbackForm from "@components/FeedbackForm/FeedbackForm";

import "./ROICalculationResults.css";

function ROICalculationResults({
  formId,
  surveyScore,
  resultDescription,
  feedbackIntro,
  selectedRole,
  hrRecommendation,
}) {
  return (
    <div className="roi-calculation-results">
      <h4>Your Result: {surveyScore.toFixed(1)}/5.0</h4>
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
          <FeedbackForm formId={formId} />
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
  formId: PropTypes.string.isRequired,
  surveyScore: PropTypes.number.isRequired,
  resultDescription: PropTypes.string.isRequired,
  feedbackIntro: PropTypes.string.isRequired,
  selectedRole: PropTypes.string.isRequired,
  hrRecommendation: PropTypes.string.isRequired,
};

export default ROICalculationResults;
