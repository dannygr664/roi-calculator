import { useEffect } from "react";
import { useFormikContext } from "formik";

function ScrollToError() {
  const { errors, isSubmitting } = useFormikContext();

  useEffect(() => {
    if (isSubmitting && Object.keys(errors).length > 0) {
      const errorElement = document.querySelector(".error-message");
      const elementToScrollTo =
        errorElement?.parentElement?.parentElement ??
        errorElement?.parentElement ??
        errorElement;
      elementToScrollTo.scrollIntoView({
        behavior: "smooth",
      });
      elementToScrollTo.focus();
    }
  }, [errors, isSubmitting]);
  return null;
}

export default ScrollToError;
