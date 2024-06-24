import { useField } from "formik";
import PropTypes from "prop-types";

import "./FormikTextInput.css";

function FormikTextInput({ label, ...props }) {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.name}>{label}</label>
      <input {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error-message">{meta.error}</div>
      ) : null}
    </>
  );
}

FormikTextInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["text", "number", "email"]).isRequired,
  placeholder: PropTypes.string,
};

export default FormikTextInput;
