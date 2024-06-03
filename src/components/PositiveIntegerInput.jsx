import { useState } from "react";
import PropTypes from "prop-types";

function PositiveIntegerInput({ htmlFor, label, onChange }) {
  const [value, setValue] = useState("");
  const [error, setError] = useState(null);

  const handleChange = (event) => {
    const newValue = event.target.value;

    // Check if the field is empty or if the value is an integer
    if (/^\d+$/.test(newValue)) {
      setValue(newValue);
      setError(null);
      onChange(newValue); // Propagate changes upwards
    } else {
      setError("Please enter a valid whole number.");
    }
  };

  return (
    <div>
      {label && <label htmlFor={htmlFor}>{label}</label>}
      <input
        type="number"
        value={value}
        onChange={handleChange}
        style={{ borderColor: error ? "red" : "initial" }}
      />
      {error && <div style={{ color: "red" }}>{error}</div>}
    </div>
  );
}

PositiveIntegerInput.propTypes = {
  htmlFor: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default PositiveIntegerInput;
