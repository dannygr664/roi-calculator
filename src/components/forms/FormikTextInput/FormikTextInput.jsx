import { useField } from "formik";
import PropTypes from "prop-types";

import ErrorMessage from "@components/ErrorMessage/ErrorMessage";

import "./FormikTextInput.css";

function FormikTextInput({ label, isLabelHidden, ...props }) {
  const [field, meta] = useField(props);
  return (
    <div className="form-element">
      <label htmlFor={props.name} hidden={isLabelHidden ? true : undefined}>
        {label}
      </label>
      <input id={props.name} {...field} {...props} />
      {meta.touched && meta.error ? (
        <ErrorMessage message={meta.error} />
      ) : null}
    </div>
  );
}

FormikTextInput.propTypes = {
  label: PropTypes.string.isRequired,
  isLabelHidden: PropTypes.bool,
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["text", "number", "email"]).isRequired,
  placeholder: PropTypes.string,
};

export default FormikTextInput;
