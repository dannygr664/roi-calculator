import PropTypes from "prop-types";

import "./OutputDisplay.css";

function OutputDisplay({ tag, label }) {
  return (
    <>
      <label htmlFor={tag}>{label}</label>
      <input type="number" id={tag} name={tag} value="0" readOnly />
    </>
  );
}

OutputDisplay.propTypes = {
  tag: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default OutputDisplay;
