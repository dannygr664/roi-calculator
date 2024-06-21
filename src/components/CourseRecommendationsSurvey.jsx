import { useState, useId } from "react";
import PropTypes from "prop-types";

import { areInputsValid } from "../utilities";

import SurveyIntro from "./SurveyIntro";
import SurveyQuestions from "./SurveyQuestions";
import CourseRecommendationsResults from "./CourseRecommendationsResults";

import "./Survey.css";
import "./CourseRecommendationsSurvey.css";

function CourseRecommendationsSurvey({
  title,
  instructions,
  questionsAndAnswers,
  results,
}) {
  const surveyId = useId();

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [selectedRole, setSelectedRole] = useState("");
  const [employeeJobTitle, setEmployeeJobTitle] = useState("");
  const [otherRole, setOtherRole] = useState("");
  const [errors, setErrors] = useState({});

  const [areResultsVisible, setAreResultsVisible] = useState(false);

  const getValidationErrors = () => {
    const newErrors = {};

    questionsAndAnswers.forEach((_, questionIndex) => {
      if (selectedAnswers[questionIndex] === undefined) {
        newErrors[`question-${questionIndex}`] = "Please select an answer";
      }
    });

    if (!selectedRole) newErrors.selectedRole = "Please select a role";
    if (selectedRole === "Employee" && !employeeJobTitle)
      newErrors.employeeJobTitle = "Please enter a job title";
    if (selectedRole === "Other" && !otherRole)
      newErrors.otherRole = "Please enter a role";

    return newErrors;
  };

  const showResults = () => {
    if (!areInputsValid(getValidationErrors, setErrors)) {
      setAreResultsVisible(false);
      return;
    }

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
          Get Course Recommendations
        </button>
      </div>

      {areResultsVisible && (
        <CourseRecommendationsResults surveyId={surveyId} results={results} />
      )}
    </div>
  );
}

CourseRecommendationsSurvey.propTypes = {
  title: PropTypes.string.isRequired,
  instructions: PropTypes.string.isRequired,
  questionsAndAnswers: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
      answers: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    })
  ).isRequired,
  results: PropTypes.shape({
    zschoolCourse: PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
    additionalCourse: PropTypes.shape({
      name: PropTypes.string.isRequired,
      school: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
    personalizedCourse: PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default CourseRecommendationsSurvey;
