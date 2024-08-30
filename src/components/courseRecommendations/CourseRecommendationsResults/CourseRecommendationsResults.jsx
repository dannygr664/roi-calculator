import PropTypes from "prop-types";

import { ZSCHOOL_COURSES_TO_DESCRIPTIONS } from "@/utils/constants";

import LearnMoreForm from "@components/LearnMoreForm/LearnMoreForm";

import "./CourseRecommendationsResults.css";

function CourseRecommendationsResults({ formId, results }) {
  return (
    <div className="course-recommendations-results">
      <h4>Recommended Courses</h4>

      <p>
        Based upon your responses it is suggested that the following
        professional development courses be made available to your employees in
        pursuit of upskilling and training.
      </p>

      <ul className="course-recommendations">
        {results.zschoolCourses.map((zschoolCourse, index) => (
          <li key={index}>
            <b>Zschool Course: </b>
            &quot;{zschoolCourse}&quot;
            {ZSCHOOL_COURSES_TO_DESCRIPTIONS[zschoolCourse] && (
              <ul>
                <li>
                  <b>Description: </b>
                  {ZSCHOOL_COURSES_TO_DESCRIPTIONS[zschoolCourse]}
                </li>
              </ul>
            )}
          </li>
        ))}
        {results.additionalCourse && (
          <li>
            <b>Additional Course: </b>
            &quot;{results.additionalCourse.name}&quot; by{" "}
            {results.additionalCourse.school}
            {results.additionalCourse.description && (
              <ul>
                <li>
                  <b>Description: </b>
                  {results.additionalCourse.description}
                </li>
              </ul>
            )}
          </li>
        )}
        {results.personalizedCourse && (
          <li>
            <b>Custom Course Suggestion: </b>
            &quot;{results.personalizedCourse.name}&quot;
            <ul>
              <li>
                <b>Description: </b>
                {results.personalizedCourse.description}
              </li>
            </ul>
          </li>
        )}
      </ul>

      <p>
        If you are interested in learning more about bringing a corporate or
        custom designed program to your employees, input your name and email
        below and a member from our team will contact you in 24 hours.
      </p>
      <LearnMoreForm formId={formId} />
    </div>
  );
}

CourseRecommendationsResults.propTypes = {
  formId: PropTypes.string.isRequired,
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

export default CourseRecommendationsResults;
