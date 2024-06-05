import PropTypes from "prop-types";

import "./OutputDisplay.css";

function OutputDisplay({ tag, label, format, outputValue }) {
  const formatCurrency = (value) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(value);
  };

  const formatPercentage = (value) => {
    return `${parseFloat(value).toFixed(2)}%`;
  };

  const formatOutput = (value) => {
    if (format == "currency") {
      return formatCurrency(value);
    } else if (format == "percentage") {
      return formatPercentage(value);
    } else {
      return value;
    }
  };

  return (
    <>
      <label id={tag} htmlFor={tag}>
        {label}
      </label>
      <input id={tag} name={tag} value={formatOutput(outputValue)} readOnly />
    </>
  );
}

OutputDisplay.propTypes = {
  tag: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  format: PropTypes.string.isRequired,
  outputValue: PropTypes.string.isRequired,
};

export default OutputDisplay;
