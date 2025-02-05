import PropTypes from "prop-types";

import "./OutputDisplay.css";
// Adding a comment to trigger a rebuild/redeploy
function OutputDisplay({ tag, label, format, outputValue }) {
  const formatCurrency = (value) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(value);
  };

  const formatPercentage = (value) => {
    const percentage = parseFloat(value).toFixed(2);
    if (isNaN(percentage)) {
      return "0.00%";
    } else if (!isFinite(percentage)) {
      return "N/A (training was free!)";
    } else {
      return `${percentage}%`;
    }
  };

  const formatOutput = (value) => {
    if (format === "currency") {
      return formatCurrency(value);
    } else if (format === "percentage") {
      return formatPercentage(value);
    } else {
      return value;
    }
  };

  return (
    <div className="output-display">
      <label id={tag} htmlFor={tag}>
        {label}
      </label>
      <input id={tag} name={tag} value={formatOutput(outputValue)} readOnly />
    </div>
  );
}

OutputDisplay.propTypes = {
  tag: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  format: PropTypes.string.isRequired,
  outputValue: PropTypes.string.isRequired,
};

export default OutputDisplay;
