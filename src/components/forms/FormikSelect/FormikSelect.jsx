import { useField } from "formik";
import PropTypes from "prop-types";

import ErrorMessage from "@components/ErrorMessage/ErrorMessage";

import "./FormikSelect.css";

function FormikSelect({ label, options, ...props }) {
  const [field, meta] = useField(props);

  return (
    <div className="formik-select-wrapper">
      <label htmlFor={props.name}>{label}</label>
      <select {...field} {...props}>
        <option value="" disabled>
          Select
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {meta.touched && meta.error ? (
        <ErrorMessage message={meta.error} />
      ) : null}
    </div>
  );
}

FormikSelect.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  name: PropTypes.string.isRequired,
};

export default FormikSelect;
