import { useState } from "react";
import PropTypes from "prop-types";

import { areInputsValid } from "../utilities";

import ErrorMessage from "./ErrorMessage";

import "./CourseRecommendationsResults.css";

function CourseRecommendationsResults({ surveyId, results }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitConfirmationVisible, setIsSubmitConfirmationVisible] =
    useState(false);

  const [errors, setErrors] = useState({});

  const getValidationErrors = () => {
    const newErrors = {};

    if (!name) newErrors.name = "Please enter your name";
    if (!email) newErrors.email = "Please enter your email";

    return newErrors;
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const submitNameAndEmail = (event) => {
    event.preventDefault();
    if (!areInputsValid(getValidationErrors, setErrors)) {
      setIsSubmitConfirmationVisible(false);
      return;
    }

    console.log(name, email);
    setIsSubmitConfirmationVisible(true);
  };

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

      <form
        className="submit-name-and-email-form"
        onSubmit={submitNameAndEmail}
      >
        <div className="submit-name-and-email-container">
          <div className="form-element">
            <label htmlFor={`name-${surveyId}`}>Name</label>
            <input
              id="name"
              name="name"
              value={name}
              onChange={handleNameChange}
            />
            <ErrorMessage message={errors.name} />
          </div>

          <div className="form-element">
            <label htmlFor={`email-${surveyId}`}>Email</label>
            <input
              id="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
            />
            <ErrorMessage message={errors.email} />
          </div>
        </div>

        <button type="submit">Submit</button>
      </form>
      {isSubmitConfirmationVisible && (
        <p className="submit-confirmation">
          Submitted! We will be in touch soon.
        </p>
      )}
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
