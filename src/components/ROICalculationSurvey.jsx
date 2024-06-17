import { useState, useId } from "react";
import PropTypes from "prop-types";

import { areInputsValid } from "../utilities";

import SurveyIntro from "./SurveyIntro";
import SurveyQuestions from "./SurveyQuestions";

import "./ROICalculationSurvey.css";

function Survey({ title, instructions, questionsAndAnswers }) {
  const surveyId = useId();

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [selectedRole, setSelectedRole] = useState("");
  const [employeeJobTitle, setEmployeeJobTitle] = useState("");
  const [otherRole, setOtherRole] = useState("");
  const [errors, setErrors] = useState({});

  const getValidationErrors = () => {
    const newErrors = {};

    questionsAndAnswers.forEach((_, questionIndex) => {
      if (selectedAnswers[questionIndex] === undefined) {
        newErrors[`question-${questionIndex}`] = "Please select an answer";
      }
    });

    if (!selectedRole) newErrors.selectedRole = "Please select a role";
    if (!employeeJobTitle)
      newErrors.employeeJobTitle = "Please enter a job title";
    if (!otherRole) newErrors.otherRole = "Please enter a role";

    return newErrors;
  };

  const showResults = () => {
    if (!areInputsValid(getValidationErrors, setErrors)) {
      return;
    }
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
    </div>
  );
}

Survey.propTypes = {
  title: PropTypes.string.isRequired,
  instructions: PropTypes.string.isRequired,
  questionsAndAnswers: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
      answers: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    })
  ).isRequired,
};

export default Survey;
