import PropTypes from "prop-types";

import { ROLES } from "../constants";

import CustomSelect from "./CustomSelect";
import ErrorMessage from "./ErrorMessage";

import "./SurveyQuestions.css";

function SurveyQuestions({
  surveyId,
  questionsAndAnswers,
  selectedAnswers,
  setSelectedAnswers,
  selectedRole,
  setSelectedRole,
  employeeJobTitle,
  setEmployeeJobTitle,
  otherRole,
  setOtherRole,
  errors,
}) {
  const handleAnswerChange = (questionIndex, answerIndex) => {
    setSelectedAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionIndex]: answerIndex,
    }));
  };

  const handleEmployeeJobTitleChange = (event) => {
    setEmployeeJobTitle(event.target.value);
  };

  const handleOtherRoleChange = (event) => {
    setOtherRole(event.target.value);
  };

  return (
    <div className="survey-questions">
      {questionsAndAnswers.map(({ question, answers }, questionIndex) => (
        <div key={questionIndex} className="survey-question">
          <p>
            {questionIndex + 1}. {question}
          </p>
          <ErrorMessage message={errors[`question-${questionIndex}`]} />
          {answers.map((answer, answerIndex) => (
            <label key={answerIndex} className="survey-answer">
              <input
                type="radio"
                name={"question-" + questionIndex}
                value={"answer-" + answerIndex}
                checked={selectedAnswers[questionIndex] === answerIndex}
                onChange={() => handleAnswerChange(questionIndex, answerIndex)}
              />
              <span>{answer}</span>
            </label>
          ))}
        </div>
      ))}
      <div className="survey-question">
        <label htmlFor={`role-${surveyId}`} className="role-label">
          What best describes you?
        </label>
        <CustomSelect
          options={ROLES}
          selectedOption={selectedRole}
          setSelectedOption={setSelectedRole}
        />
        <ErrorMessage message={errors.selectedRole} />
        {selectedRole === "Employee" && (
          <>
            <input
              id={`employee-job-title-${surveyId}`}
              name="role"
              placeholder="Job title"
              value={employeeJobTitle}
              onChange={handleEmployeeJobTitleChange}
            />
            <ErrorMessage message={errors.employeeJobTitle} />
          </>
        )}
        {selectedRole === "Other" && (
          <>
            <input
              id={`other-role-${surveyId}`}
              name="role"
              value={otherRole}
              onChange={handleOtherRoleChange}
            />
            <ErrorMessage message={errors.otherRole} />
          </>
        )}
      </div>
    </div>
  );
}

SurveyQuestions.propTypes = {
  surveyId: PropTypes.string.isRequired,
  questionsAndAnswers: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
      answers: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    })
  ).isRequired,
  selectedAnswers: PropTypes.objectOf(PropTypes.number).isRequired,
  setSelectedAnswers: PropTypes.func.isRequired,
  selectedRole: PropTypes.string.isRequired,
  setSelectedRole: PropTypes.func.isRequired,
  employeeJobTitle: PropTypes.string.isRequired,
  setEmployeeJobTitle: PropTypes.func.isRequired,
  otherRole: PropTypes.string.isRequired,
  setOtherRole: PropTypes.func.isRequired,
  errors: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default SurveyQuestions;
