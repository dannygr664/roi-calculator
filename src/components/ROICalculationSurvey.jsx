import { useState, useId } from "react";
import PropTypes from "prop-types";

import { scale } from "../utilities";

import SurveyIntro from "./SurveyIntro";
import SurveyForm from "./SurveyForm";
import OutputDisplay from "./OutputDisplay";
import ROICalculationResults from "./ROICalculationResults";

import "./Survey.css";
import "./ROICalculationSurvey.css";
import { STANDARD_ANSWERS } from "../surveys/roiCalculationSurveys/constants";

function ROICalculationSurvey({
  title,
  instructions,
  questionsAndAnswers,
  trainingCosts,
  resultDescriptions,
  feedbackIntros,
  hrRecommendations,
}) {
  const surveyId = useId();

  const [selectedRole, setSelectedRole] = useState("");

  const [surveyScore, setSurveyScore] = useState(0);
  const [netReturn, setNetReturn] = useState("0");
  const [percentageReturn, setPercentageReturn] = useState("0");

  const [resultDescription, setResultDescription] = useState("");
  const [feedbackIntro, setFeedbackIntro] = useState("");
  const [hrRecommendation, setHrRecommendation] = useState("");
  const [areResultsVisible, setAreResultsVisible] = useState(false);

  const isQuestionIncluded = (questionAndAnswers) => {
    return questionAndAnswers.answers.length === 5;
  };

  const scoreQuestion = (answer) => {
    const score = STANDARD_ANSWERS.indexOf(answer) + 1;
    if (score === 0) {
      throw new RangeError("Invalid answer choice");
    }
    return score;
  };

  const calculateSurveyScore = (values) => {
    let rawScore = 0;
    let numQuestionsIncludedInScore = 0;

    questionsAndAnswers.forEach((questionAndAnswers, questionIndex) => {
      if (isQuestionIncluded(questionAndAnswers)) {
        rawScore += scoreQuestion(values[`question-${questionIndex}`]);
        numQuestionsIncludedInScore++;
      }
    });

    return Math.round((rawScore / numQuestionsIncludedInScore) * 10) / 10;
  };

  const calculatePercentageReturn = (surveyScore) => {
    return scale(surveyScore, 1, 5, -100, 100);
  };

  const calculateNetReturn = (percentageReturn) => {
    return (1 + percentageReturn / 100) * parseFloat(trainingCosts);
  };

  const getScoreBucketName = () => {
    if (4.5 <= surveyScore && surveyScore <= 5.0) {
      return "highest";
    } else if (3.5 <= surveyScore && surveyScore < 4.5) {
      return "high";
    } else if (2.5 <= surveyScore && surveyScore < 3.5) {
      return "average";
    } else if (1.5 <= surveyScore && surveyScore < 2.5) {
      return "low";
    } else if (1.0 <= surveyScore && surveyScore < 1.5) {
      return "lowest";
    } else {
      throw new RangeError("Survey score is out of range");
    }
  };

  const showResults = (values) => {
    setSelectedRole(values.selectedRole);

    const surveyScore = calculateSurveyScore(values);
    const percentageReturn = calculatePercentageReturn(surveyScore);
    const netReturn = calculateNetReturn(percentageReturn);

    setSurveyScore(surveyScore);
    setNetReturn(netReturn.toString());
    setPercentageReturn(percentageReturn.toString());

    const scoreBucketName = getScoreBucketName();

    setResultDescription(resultDescriptions[scoreBucketName]);
    if (feedbackIntros) {
      setFeedbackIntro(feedbackIntros[scoreBucketName]);
    }
    setHrRecommendation(hrRecommendations[scoreBucketName]);

    setAreResultsVisible(true);
  };

  return (
    <div className="survey">
      <SurveyIntro title={title} instructions={instructions} />
      <div className="survey-questions-submit-button-and-output-displays">
        <SurveyForm
          surveyId={surveyId}
          questionsAndAnswers={questionsAndAnswers}
          submitButtonLabel="Get Results & Calculate ROI"
          handleSubmit={showResults}
        />

        <OutputDisplay
          tag={`net-return-${surveyId}`}
          label="Net Return"
          format="currency"
          outputValue={netReturn}
        />
        <OutputDisplay
          tag={`percentage-return-${surveyId}`}
          label="% Return"
          format="percentage"
          outputValue={percentageReturn}
        />
      </div>

      {areResultsVisible && (
        <ROICalculationResults
          surveyId={surveyId}
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
  title: PropTypes.string.isRequired,
  instructions: PropTypes.string.isRequired,
  questionsAndAnswers: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
      answers: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    })
  ).isRequired,
  trainingCosts: PropTypes.string.isRequired,
  resultDescriptions: PropTypes.objectOf(PropTypes.string).isRequired,
  feedbackIntros: PropTypes.objectOf(PropTypes.string),
  hrRecommendations: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default ROICalculationSurvey;
