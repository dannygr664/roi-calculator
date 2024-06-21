import { useState, useId, useRef } from "react";
import PropTypes from "prop-types";

import { areInputsValid, scale } from "../utilities";

import SurveyIntro from "./SurveyIntro";
import SurveyQuestions from "./SurveyQuestions";
import OutputDisplay from "./OutputDisplay";
import ROICalculationResults from "./ROICalculationResults";

import "./Survey.css";
import "./ROICalculationSurvey.css";

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
  const firstErrorRef = useRef(null);

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [selectedRole, setSelectedRole] = useState("");
  const [employeeJobTitle, setEmployeeJobTitle] = useState("");
  const [otherRole, setOtherRole] = useState("");
  const [errors, setErrors] = useState({});

  const [surveyScore, setSurveyScore] = useState(0);
  const [netReturn, setNetReturn] = useState("0");
  const [percentageReturn, setPercentageReturn] = useState("0");

  const [resultDescription, setResultDescription] = useState("");
  const [feedbackIntro, setFeedbackIntro] = useState("");
  const [hrRecommendation, setHrRecommendation] = useState("");
  const [areResultsVisible, setAreResultsVisible] = useState(false);

  const getValidationErrors = () => {
    const newErrors = {};

    questionsAndAnswers.forEach((_, questionIndex) => {
      if (selectedAnswers[questionIndex] === undefined) {
        newErrors[`question-${questionIndex}`] = "Please select an answer";
        if (!firstErrorRef.current) {
          firstErrorRef.current = document.getElementById(
            `survey${surveyId}-q${questionIndex}`
          );
        }
      }
    });

    if (!selectedRole) {
      newErrors.selectedRole = "Please select a role";
      if (!firstErrorRef.current) {
        firstErrorRef.current = document.getElementById(
          `survey${surveyId}-role`
        );
      }
    }
    if (selectedRole === "Employee" && !employeeJobTitle) {
      newErrors.employeeJobTitle = "Please enter a job title";
      if (!firstErrorRef.current) {
        firstErrorRef.current = document.getElementById(
          `survey${surveyId}-employee-job-title`
        );
      }
    }
    if (selectedRole === "Other" && !otherRole) {
      newErrors.otherRole = "Please enter a role";
      if (!firstErrorRef.current) {
        firstErrorRef.current = document.getElementById(
          `survey${surveyId}-other-role`
        );
      }
    }

    return newErrors;
  };

  const isQuestionIncluded = (questionAndAnswers) => {
    return questionAndAnswers.answers.length === 5;
  };

  const scoreQuestion = (questionIndex) => {
    return selectedAnswers[questionIndex] + 1;
  };

  const calculateSurveyScore = () => {
    let rawScore = 0;
    let numQuestionsIncludedInScore = 0;

    questionsAndAnswers.forEach((questionAndAnswers, questionIndex) => {
      if (isQuestionIncluded(questionAndAnswers)) {
        rawScore += scoreQuestion(questionIndex);
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

  const showResults = () => {
    firstErrorRef.current = null; // Reset the ref before validation

    if (!areInputsValid(getValidationErrors, setErrors)) {
      if (firstErrorRef.current) {
        firstErrorRef.current.scrollIntoView({ behavior: "smooth" });
      }
      setAreResultsVisible(false);
      return;
    }

    const surveyScore = calculateSurveyScore();
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
        <SurveyQuestions
          surveyId={surveyId}
          questionsAndAnswers={questionsAndAnswers}
          selectedAnswers={selectedAnswers}
          setSelectedAnswers={setSelectedAnswers}
          selectedRole={selectedRole}
          setSelectedRole={setSelectedRole}
          employeeJobTitle={employeeJobTitle}
          setEmployeeJobTitle={setEmployeeJobTitle}
          otherRole={otherRole}
          setOtherRole={setOtherRole}
          errors={errors}
        />

        <button type="submit" onClick={() => showResults()}>
          Get Results & Calculate ROI
        </button>

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
