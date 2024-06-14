export const getNamesAndValues = (obj) => {
  const namesAndValues = [];
  for (const property in obj) {
    namesAndValues.push({ name: obj[property].name, value: property });
  }

  return namesAndValues;
};
