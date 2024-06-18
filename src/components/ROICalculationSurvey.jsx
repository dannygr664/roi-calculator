import { useState, useId } from "react";
import PropTypes from "prop-types";

import { areInputsValid, scale } from "../utilities";

import SurveyIntro from "./SurveyIntro";
import SurveyQuestions from "./SurveyQuestions";
import OutputDisplay from "./OutputDisplay";

import "./ROICalculationSurvey.css";

function ROICalculationSurvey({
  title,
  instructions,
  questionsAndAnswers,
  trainingCosts,
}) {
  const surveyId = useId();

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [selectedRole, setSelectedRole] = useState("");
  const [employeeJobTitle, setEmployeeJobTitle] = useState("");
  const [otherRole, setOtherRole] = useState("");
  const [errors, setErrors] = useState({});

  const [netReturn, setNetReturn] = useState("0");
  const [percentageReturn, setPercentageReturn] = useState("0");

  const getValidationErrors = () => {
    const newErrors = {};

    questionsAndAnswers.forEach((_, questionIndex) => {
      if (selectedAnswers[questionIndex] === undefined) {
        newErrors[`question-${questionIndex}`] = "Please select an answer";
      }
    });

    if (!selectedRole) newErrors.selectedRole = "Please select a role";
    if (selectedRole === "employee" && !employeeJobTitle)
      newErrors.employeeJobTitle = "Please enter a job title";
    if (selectedRole === "other" && !otherRole)
      newErrors.otherRole = "Please enter a role";

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

    return rawScore / numQuestionsIncludedInScore;
  };

  const calculatePercentageReturn = (surveyScore) => {
    return scale(surveyScore, 1, 5, -100, 100);
  };

  const calculateNetReturn = (percentageReturn) => {
    return (1 + percentageReturn / 100) * parseFloat(trainingCosts);
  };

  const showResults = () => {
    if (!areInputsValid(getValidationErrors, setErrors)) {
      return;
    }

    const surveyScore = calculateSurveyScore();
    const percentageReturn = calculatePercentageReturn(surveyScore);
    const netReturn = calculateNetReturn(percentageReturn);

    setNetReturn(netReturn.toString());
    setPercentageReturn(percentageReturn.toString());
  };

  return (
    <div className="survey">
      <SurveyIntro title={title} instructions={instructions} />
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
};

export default ROICalculationSurvey;
