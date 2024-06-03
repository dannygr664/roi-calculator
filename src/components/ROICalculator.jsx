import { useState } from "react";
import PropTypes from "prop-types";
import ProgramSelector from "./ProgramSelector";
import PositiveIntegerInput from "./PositiveIntegerInput";

function ROICalculator({ onCalculate }) {
  const isInt = (value) => {
    if (isNaN(value)) {
      return false;
    }
    var x = parseFloat(value);
    return (x | 0) === x;
  };

  const [numberOfEmployees, setNumberOfEmployees] = useState("");

  const handleNumberOfEmployeesChange = (value) => {
    setNumberOfEmployees(value);
  };

  const [selectedProgram, setSelectedProgram] = useState("");

  const PROGRAMS_TO_COSTS = {
    bigData: 1000,
    customerExperience1: 1000,
    customerExperience2: 1000,
    designThinking: 1000,
    digitalMarketing: 1000,
    engineeringLeadership: 1000,
    executiveEducationAdvisorTraining: 1000,
    generativeAiAndValuation: 1000,
    greenTechnologiesAndAi: 1000,
    instructorCertificateProgram: 1000,
    itAndCybersecurityLeadershipTeams: 1000,
    mentorCertificateProgram: 1000,
    strategicAi: 1000,
    strategicAiForHealthcareProfessionals: 1000,
    strategicAiForHrProfessionals: 1000,
    strategicAiInSales: 1000,
    transformationLeadership: 1000,
    womenInLeadership: 1000,
  };

  const handleProgramChange = (newValue) => {
    setSelectedProgram(newValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedProgram === "") {
      alert("Please select a program");
    } else if (isInt(numberOfEmployees)) {
      const numberOfEmployeesAsNum = parseFloat(numberOfEmployees);
      const THREE_MONTH_ROI = 1.29;
      const THREE_MONTH_ROI_ANNUALIZED = THREE_MONTH_ROI ** (1 / 0.25) - 1;
      const ANNUAL_ROI = 4.15;
      const BASE_COST =
        numberOfEmployeesAsNum * PROGRAMS_TO_COSTS[selectedProgram];
      const threeMonthReturnValue = BASE_COST * THREE_MONTH_ROI;
      const threeMonthReturnValueAnnualized =
        BASE_COST * THREE_MONTH_ROI_ANNUALIZED;
      const annualReturnValue = BASE_COST * ANNUAL_ROI;
      onCalculate(
        threeMonthReturnValue.toFixed(2),
        threeMonthReturnValueAnnualized.toFixed(2),
        annualReturnValue.toFixed(2)
      );
    } else {
      alert("Please enter a valid whole number of employees");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <ProgramSelector
        selectedProgram={selectedProgram}
        onProgramChange={handleProgramChange}
      />
      <PositiveIntegerInput
        htmlFor="number-of-employees"
        label="Number of Employees: "
        onChange={handleNumberOfEmployeesChange}
      />
      <button type="submit">Calculate Return</button>
    </form>
  );
}

ROICalculator.propTypes = {
  onCalculate: PropTypes.func.isRequired,
};

export default ROICalculator;
