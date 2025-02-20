import { useState } from "react";
import PropTypes from "prop-types";

import {
  SurveyIntro,
  CourseRecommendationsSurveyForm,
} from "@components/surveys";
import { CourseRecommendationsResults } from "@components/courseRecommendations";

import "@components/surveys/Survey.css";
import "./CourseRecommendationsSurvey.css";

function CourseRecommendationsSurvey({
  formId,
  title,
  instructions,
  questionsAndAnswers,
  results,
}) {
  const [areResultsVisible, setAreResultsVisible] = useState(false);

  const showResults = () => {
    setAreResultsVisible(true);
  };

  return (
    <div id={formId} className="survey">
      <SurveyIntro title={title} instructions={instructions} />
      <div className="survey-questions-and-submit-button">
        <CourseRecommendationsSurveyForm
          formId={formId}
          questionsAndAnswers={questionsAndAnswers}
          submitButtonLabel="Get Course Recommendations"
          handleSubmit={showResults}
        />
      </div>

      {areResultsVisible && (
        <CourseRecommendationsResults formId={formId} results={results} />
      )}
    </div>
  );
}

CourseRecommendationsSurvey.propTypes = {
  formId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  instructions: PropTypes.string.isRequired,
  questionsAndAnswers: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
      answers: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    })
  ).isRequired,
  results: PropTypes.shape({
    zschoolCourses: PropTypes.arrayOf(PropTypes.string),
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
