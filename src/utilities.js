export const getNamesAndValues = (obj) => {
  const namesAndValues = [];
  for (const property in obj) {
    namesAndValues.push({ name: obj[property].name, value: property });
  }

  return namesAndValues;
};

export const areInputsValid = (getValidationErrors, setErrors) => {
  const validationErrors = getValidationErrors();

  if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors);
    return false;
  } else {
    setErrors({});
    return true;
  }
};

export const scale = (number, inMin, inMax, outMin, outMax) => {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
};
