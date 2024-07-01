import { useField } from "formik";
import PropTypes from "prop-types";

import ErrorMessage from "@components/ErrorMessage/ErrorMessage";

import "./FormikTextArea.css";

function FormikTextArea({ label, isLabelHidden, ...props }) {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.name} hidden={isLabelHidden ? true : undefined}>
        {label}
      </label>
      <textarea {...field} {...props} />
      {meta.touched && meta.error ? (
        <ErrorMessage message={meta.error} />
      ) : null}
    </>
  );
}

FormikTextArea.propTypes = {
  label: PropTypes.string.isRequired,
  isLabelHidden: PropTypes.bool,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};

export default FormikTextArea;
