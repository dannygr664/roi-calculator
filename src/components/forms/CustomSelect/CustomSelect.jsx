import PropTypes from "prop-types";

import "./CustomSelect.css";

function CustomSelect({
  label,
  name,
  options,
  selectedOption,
  setSelectedOption,
}) {
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <label htmlFor={name}>{label}</label>
      <select id={name} value={selectedOption} onChange={handleChange}>
        <option value="" disabled>
          Select
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </>
  );
}

CustomSelect.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedOption: PropTypes.string.isRequired,
  setSelectedOption: PropTypes.func.isRequired,
};

export default CustomSelect;
