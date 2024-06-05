import PropTypes from "prop-types";

import "./OutputDisplay.css";

function OutputDisplay({ tag, label, outputValue }) {
  const formatCurrency = (value) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(value);
  };

  return (
    <>
      <label htmlFor={tag}>{label}</label>
      <input id={tag} name={tag} value={formatCurrency(outputValue)} readOnly />
    </>
  );
}

OutputDisplay.propTypes = {
  tag: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  outputValue: PropTypes.string.isRequired,
};

export default OutputDisplay;
