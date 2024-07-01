import { useEffect } from "react";
import { useFormikContext } from "formik";
import { PropTypes } from "prop-types";

function ScrollToError({ formId }) {
  const { errors, isSubmitting } = useFormikContext();

  useEffect(() => {
    if (isSubmitting && Object.keys(errors).length > 0) {
      const errorElement = document.querySelector(
        `#${formId} .error-message:first-of-type`
      );
      const elementToScrollTo =
        errorElement?.parentElement?.parentElement ??
        errorElement?.parentElement ??
        errorElement;
      elementToScrollTo.scrollIntoView({
        behavior: "smooth",
      });
      elementToScrollTo.focus();
    }
  }, [formId, errors, isSubmitting]);
  return null;
}

ScrollToError.propTypes = {
  formId: PropTypes.string.isRequired,
};

export default ScrollToError;
