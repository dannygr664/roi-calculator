import { useField } from "formik";
import PropTypes from "prop-types";

import "./FormikCheckbox.css";

function FormikCheckbox({ children, ...props }) {
  const [field, meta] = useField({ ...props, type: "checkbox" });
  return (
    <div className="checkbox-container">
      <label htmlFor={props.name}>
        <input type="checkbox" {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="error-message">{meta.error}</div>
      ) : null}
    </div>
  );
}

FormikCheckbox.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default FormikCheckbox;
