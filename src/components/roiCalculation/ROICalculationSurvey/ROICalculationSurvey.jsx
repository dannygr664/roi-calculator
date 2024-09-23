import { useState } from "react";
import PropTypes from "prop-types";

import { SurveyIntro, ROICalculationSurveyForm } from "@components/surveys";
import {
  calculateSurveyScore,
  calculatePercentageReturn,
  calculateNetReturn,
  getScoreBucketName,
  ROICalculationResults,
} from "@components/roiCalculation";
import OutputDisplay from "@components/OutputDisplay/OutputDisplay";

import "@components/surveys/Survey.css";
import "./ROICalculationSurvey.css";

function ROICalculationSurvey({
  formId,
  title,
  instructions,
  questionsAndAnswers,
  trainingCosts,
  numberOfEmployees,
  resultDescriptions,
  feedbackIntros,
  hrRecommendations,
}) {
  const [selectedRole, setSelectedRole] = useState("");

  const [surveyScore, setSurveyScore] = useState(0);
  const [netReturn, setNetReturn] = useState("0");
  const [percentageReturn, setPercentageReturn] = useState("0");

  const [resultDescription, setResultDescription] = useState("");
  const [feedbackIntro, setFeedbackIntro] = useState("");
  const [hrRecommendation, setHrRecommendation] = useState("");
  const [areResultsVisible, setAreResultsVisible] = useState(false);

  const showResults = (values) => {
    setSelectedRole(values.selectedRole);

    const surveyScore = calculateSurveyScore(questionsAndAnswers, values);
    const netReturn = calculateNetReturn(
      trainingCosts,
      numberOfEmployees,
      surveyScore,
      values.recentlyHired
    );
    const percentageReturn = calculatePercentageReturn(
      trainingCosts,
      netReturn
    );

    setSurveyScore(surveyScore);
    setNetReturn(netReturn.toString());
    setPercentageReturn(percentageReturn.toString());

    const scoreBucketName = getScoreBucketName(surveyScore);

    setResultDescription(resultDescriptions[scoreBucketName]);
    if (feedbackIntros) {
      setFeedbackIntro(feedbackIntros[scoreBucketName]);
    }
    setHrRecommendation(hrRecommendations[scoreBucketName]);

    setAreResultsVisible(true);
  };

  const SIDE_NOTE_COST_CUTOFF = 1100;

  return (
    <div id={formId} className="survey">
      <SurveyIntro title={title} instructions={instructions} />
      <div className="survey-questions-submit-button-and-output-displays">
        <ROICalculationSurveyForm
          formId={formId}
          questionsAndAnswers={questionsAndAnswers}
          submitButtonLabel="Get Results & Calculate ROI"
          handleSubmit={showResults}
        />

        <OutputDisplay
          tag={`net-return-${formId}`}
          label="Net Return"
          format="currency"
          outputValue={netReturn}
        />
        <OutputDisplay
          tag={`percentage-return-${formId}`}
          label="% Return"
          format="percentage"
          outputValue={percentageReturn}
        />
        {numberOfEmployees != 0 &&
          trainingCosts / numberOfEmployees >= SIDE_NOTE_COST_CUTOFF && (
            <div id="sidenote-container">
              <p>*Annualized potential ROI is up to 415%.</p>
            </div>
          )}
      </div>

      {areResultsVisible && (
        <ROICalculationResults
          formId={formId}
          surveyScore={surveyScore}
          resultDescription={resultDescription}
          feedbackIntro={feedbackIntro}
          selectedRole={selectedRole}
          hrRecommendation={hrRecommendation}
        />
      )}
    </div>
  );
}

ROICalculationSurvey.propTypes = {
  formId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  instructions: PropTypes.string.isRequired,
  questionsAndAnswers: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
      answers: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    })
  ).isRequired,
  trainingCosts: PropTypes.string.isRequired,
  numberOfEmployees: PropTypes.number.isRequired,
  resultDescriptions: PropTypes.objectOf(PropTypes.string).isRequired,
  feedbackIntros: PropTypes.objectOf(PropTypes.string),
  hrRecommendations: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default ROICalculationSurvey;
