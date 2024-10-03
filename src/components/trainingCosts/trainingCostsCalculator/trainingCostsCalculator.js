import {
  CREDIT_OPTIONS_TO_METADATA,
  WORKING_HOURS_IN_A_YEAR,
} from "@/utils/constants";

export const calculateTrainingCosts = ({
  numberOfEmployees,
  cost,
  includeLostProductivityCosts,
  creditOption,
  wageRowData,
}) => {
  const costOfCourse = parseFloat(cost);
  let averageHourlyWage = 0;
  let hoursToCompleteCourse = 0;

  if (includeLostProductivityCosts) {
    hoursToCompleteCourse =
      CREDIT_OPTIONS_TO_METADATA[creditOption].hoursToComplete;

    let numberOfEmployeesWithWageData = 0;
    let totalWages = 0;

    for (let i = 0; i < wageRowData.length; i++) {
      const wageType = wageRowData[i].wageType;
      let wage = wageRowData[i].wage;
      const numberOfEmployeesWithWage = wageRowData[i].numberOfEmployees;

      if (wageType === "Annual") {
        wage /= WORKING_HOURS_IN_A_YEAR;
      }

      totalWages += wage * numberOfEmployeesWithWage;
      numberOfEmployeesWithWageData += numberOfEmployeesWithWage;
    }

    if (numberOfEmployeesWithWageData > 0) {
      averageHourlyWage = totalWages / numberOfEmployeesWithWageData;
    }
  }

  return (
    (costOfCourse + averageHourlyWage * hoursToCompleteCourse) *
    parseInt(numberOfEmployees, 10)
  );
};
