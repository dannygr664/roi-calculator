import PropTypes from "prop-types";

import "./SurveyIntro.css";

function SurveyIntro({ title, instructions }) {
  return (
    <>
      <h3>{title}</h3>
      <p>
        <b>Instructions: </b>
        {instructions}
      </p>
    </>
  );
}

SurveyIntro.propTypes = {
  title: PropTypes.string.isRequired,
  instructions: PropTypes.string.isRequired,
};

export default SurveyIntro;
