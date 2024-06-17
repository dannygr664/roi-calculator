import { useState, useId } from "react";
import PropTypes from "prop-types";

import { getNamesAndValues } from "../utilities";
import { ROLES } from "../constants";

import CustomSelect from "./CustomSelect";

import "./Survey.css";

function Survey({ title, instructions, questionsAndAnswers }) {
  const id = useId();

  const [selectedRole, setSelectedRole] = useState("");
  const [employeeJobTitle, setEmployeeJobTitle] = useState("");
  const [otherRole, setOtherRole] = useState("");

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
            {answers.map((answer, answerIndex) => (
              <label key={answerIndex} className="survey-answer">
                <input
                  type="radio"
                  name={"question-" + questionIndex}
                  value={"answer-" + answerIndex}
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
          {selectedRole === "employee" && (
            <input
              id={"employee-job-title-" + id}
              name="role"
              placeholder="Job title"
              value={employeeJobTitle}
              onChange={handleEmployeeJobTitleChange}
            />
          )}
          {selectedRole === "other" && (
            <input
              id={"other-role-" + id}
              name="role"
              value={otherRole}
              onChange={handleOtherRoleChange}
            />
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
