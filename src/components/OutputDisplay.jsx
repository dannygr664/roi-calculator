import PropTypes from "prop-types";

import "./OutputDisplay.css";

function OutputDisplay({ tag, label, outputValue }) {
  return (
    <>
      <label htmlFor={tag}>{label}</label>
      <input type="number" id={tag} name={tag} value={outputValue} readOnly />
    </>
  );
}

OutputDisplay.propTypes = {
  tag: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  outputValue: PropTypes.string.isRequired,
};

export default OutputDisplay;
