import {
  CREDIT_OPTIONS_TO_METADATA,
  WORKING_HOURS_IN_A_YEAR,
} from "@/utils/constants";

export const calculateTrainingCosts = ({
  numberOfEmployees,
  cost,
  includeLostProductivityCosts,
  creditOption,
  wageType,
  averageWage,
}) => {
  const costOfCourse = parseFloat(cost);
  let averageHourlyWage = 0;
  let hoursToCompleteCourse = 0;

  if (includeLostProductivityCosts) {
    hoursToCompleteCourse =
      CREDIT_OPTIONS_TO_METADATA[creditOption].hoursToComplete;

    if (wageType === "Hourly") {
      averageHourlyWage = averageWage;
    } else if (wageType === "Annual") {
      averageHourlyWage = averageWage / WORKING_HOURS_IN_A_YEAR;
    }
  }

  return (
    (costOfCourse + averageHourlyWage * hoursToCompleteCourse) *
    parseInt(numberOfEmployees, 10)
  );
};
