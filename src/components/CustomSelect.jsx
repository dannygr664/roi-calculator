import PropTypes from "prop-types";

import "./CustomSelect.css";

function CustomSelect({ tag, options, value, onChange }) {
  return (
    <div className="custom-select">
      <select id={tag} name={tag} value={value} onChange={onChange}>
        <option value="">Select</option>
        {options.map(({ name, value }, index) => (
          <option key={index} value={value}>
            {name}
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
