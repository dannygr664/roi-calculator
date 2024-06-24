import PropTypes from "prop-types";

import LearnMoreForm from "./LearnMoreForm";

import "./CourseRecommendationsResults.css";

function CourseRecommendationsResults({ surveyId, results }) {
  return (
    <div className="course-recommendations-results">
      <h4>Recommended Courses</h4>

      <p>
        Based upon your responses it is suggested that the following
        professional development courses be made available to your employees in
        pursuit of upskilling and training.
      </p>

      <ul className="course-recommendations">
        <li>
          <b>Zschool Course: </b>
          &quot;{results.zschoolCourse.name}&quot;
          <ul>
            <li>
              <b>Description: </b>
              {results.zschoolCourse.description}
            </li>
          </ul>
        </li>
        <li>
          <b>Additional Course: </b>
          &quot;{results.additionalCourse.name}&quot; by{" "}
          {results.additionalCourse.school}
          <ul>
            <li>
              <b>Description: </b>
              {results.additionalCourse.description}
            </li>
          </ul>
        </li>
        <li>
          <b>Personalized Course: </b>
          &quot;{results.personalizedCourse.name}&quot;
          <ul>
            <li>
              <b>Description: </b>
              {results.personalizedCourse.description}
            </li>
          </ul>
        </li>
      </ul>

      <p>
        If you are interested in learning more about bringing a corporate or
        custom designed program to your employees, input your name and email
        below and a member from our team will contact you in 24 hours.
      </p>
      <LearnMoreForm surveyId={surveyId} />
    </div>
  );
}

CourseRecommendationsResults.propTypes = {
  surveyId: PropTypes.string.isRequired,
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

export default CourseRecommendationsResults;
