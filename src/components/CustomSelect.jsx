import PropTypes from "prop-types";

import "./CustomSelect.css";

function toCamelCase(str) {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/\s+/g, "");
}

function CustomSelect({ tag, options, value, onChange }) {
  return (
    <div className="custom-select">
      <select id={tag} name={tag} value={value} onChange={onChange}>
        <option value="">Select</option>
        {options.map((option, index) => (
          <option key={index} value={toCamelCase(option)}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

CustomSelect.propTypes = {
  tag: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CustomSelect;
