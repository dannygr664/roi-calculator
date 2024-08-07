import { useField } from "formik";
import PropTypes from "prop-types";

import ErrorMessage from "@components/ErrorMessage/ErrorMessage";

import "./FormikRadioGroup.css";

function FormikRadioGroup({ name, options, touched, error }) {
  const [field] = useField(name);

  return (
    <div className="formik-radio-group">
      {options.map((option, index) => (
        <label key={`answer${index}`} className="survey-answer">
          <input
            type="radio"
            {...field}
            value={option}
            checked={field.value === option}
          />
          {option}
        </label>
      ))}
      {touched && error ? <ErrorMessage message={error} /> : null}
    </div>
  );
}

FormikRadioGroup.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  touched: PropTypes.bool,
  error: PropTypes.string,
};

export default FormikRadioGroup;
