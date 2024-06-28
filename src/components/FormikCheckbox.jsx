import { useField } from "formik";
import PropTypes from "prop-types";

import ErrorMessage from "./ErrorMessage";

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
        <ErrorMessage message={meta.error} />
      ) : null}
    </div>
  );
}

FormikCheckbox.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default FormikCheckbox;
