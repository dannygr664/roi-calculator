import { useState, useId } from "react";
import PropTypes from "prop-types";

import SurveyIntro from "./SurveyIntro";
import SurveyForm from "./SurveyForm";
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

  const [areResultsVisible, setAreResultsVisible] = useState(false);

  const showResults = () => {
    setAreResultsVisible(true);
  };

  return (
    <div className="survey">
      <SurveyIntro title={title} instructions={instructions} />
      <div className="survey-questions-submit-button-and-output-displays">
        <SurveyForm
          surveyId={surveyId}
          questionsAndAnswers={questionsAndAnswers}
          submitButtonLabel="Get Course Recommendations"
          handleSubmit={showResults}
        />
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
