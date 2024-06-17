import { useState, useId } from "react";
import PropTypes from "prop-types";

import { getNamesAndValues } from "../utilities";
import { ROLES } from "../constants";

import CustomSelect from "./CustomSelect";
import ErrorMessage from "./ErrorMessage";

import "./Survey.css";

function Survey({ title, instructions, questionsAndAnswers }) {
  const id = useId();

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [selectedRole, setSelectedRole] = useState("");
  const [employeeJobTitle, setEmployeeJobTitle] = useState("");
  const [otherRole, setOtherRole] = useState("");
  const [errors, setErrors] = useState({});

  const handleAnswerChange = (questionIndex, answerIndex) => {
    setSelectedAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionIndex]: answerIndex,
    }));
  };

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
    console.log(selectedRole);
  };

  const handleEmployeeJobTitleChange = (event) => {
    setEmployeeJobTitle(event.target.value);
  };

  const handleOtherRoleChange = (event) => {
    setOtherRole(event.target.value);
  };

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

  return (
    <div className="survey">
      <h3>{title}</h3>
      <p>
        <b>Instructions: </b>
        {instructions}
      </p>
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
                  onChange={() =>
                    handleAnswerChange(questionIndex, answerIndex)
                  }
                />
                <span>{answer}</span>
              </label>
            ))}
          </div>
        ))}
        <div className="survey-question">
          <label htmlFor={"role-" + id} className="role-label">
            What best describes you?
          </label>
          <CustomSelect
            tag={"role-" + id}
            options={getNamesAndValues(ROLES)}
            value={selectedRole}
            onChange={handleRoleChange}
          />
          <ErrorMessage message={errors.selectedRole} />
          {selectedRole === "employee" && (
            <>
              <input
                id={"employee-job-title-" + id}
                name="role"
                placeholder="Job title"
                value={employeeJobTitle}
                onChange={handleEmployeeJobTitleChange}
              />
              <ErrorMessage message={errors.employeeJobTitle} />
            </>
          )}
          {selectedRole === "other" && (
            <>
              <input
                id={"other-role-" + id}
                name="role"
                value={otherRole}
                onChange={handleOtherRoleChange}
              />
              <ErrorMessage message={errors.otherRole} />
            </>
          )}
        </div>
      </div>
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
