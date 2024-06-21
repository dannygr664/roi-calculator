import { useState } from "react";
import PropTypes from "prop-types";

import { areInputsValid } from "../utilities";
import {
  CREDIT_OPTIONS,
  CREDIT_OPTIONS_TO_METADATA,
  WAGE_TYPES,
  WORKING_HOURS_IN_A_YEAR,
} from "../constants";

import CustomSelect from "./CustomSelect";
import ErrorMessage from "./ErrorMessage";
import OutputDisplay from "./OutputDisplay";

import "./TrainingCostsPanel.css";

import roiTrainingCostsImgUrl from "../../images/roi-training-costs.jpg";

function TrainingCostsPanel({
  trainingCosts,
  setTrainingCosts,
  setIsTrainingCostsCalculated,
}) {
  const [numberOfEmployees, setNumberOfEmployees] = useState("0");
  const [cost, setCost] = useState("0");
  const [includeLostProductivityCosts, setIncludeLostProductivityCosts] =
    useState(false);
  const [selectedCreditOption, setSelectedCreditOption] = useState("");
  const [selectedWageType, setSelectedWageType] = useState("");
  const [averageWage, setAverageWage] = useState("0");
  const [errors, setErrors] = useState({});

  const handleNumberOfEmployeesChange = (event) => {
    setNumberOfEmployees(event.target.value);
  };

  const handleCostChange = (event) => {
    setCost(event.target.value);
  };

  const handleAverageWageChange = (event) => {
    setAverageWage(event.target.value);
  };

  const getValidationErrors = () => {
    const newErrors = {};
    if (
      isNaN(parseInt(numberOfEmployees, 10)) ||
      parseInt(numberOfEmployees, 10) < 0
    )
      newErrors.numberOfEmployees = "Please enter a valid number of employees";
    if (isNaN(parseFloat(cost)) || parseFloat(cost) < 0)
      newErrors.cost = "Please enter a valid cost, without commas";

    if (includeLostProductivityCosts) {
      if (!selectedCreditOption)
        newErrors.selectedCreditOption = "Please select a credit option";
      if (!selectedWageType)
        newErrors.selectedWageType = "Please select a wage type";
      if (isNaN(parseFloat(averageWage)) || parseFloat(averageWage) < 0)
        newErrors.averageWage = "Please enter a valid wage, without commas";
    }

    return newErrors;
  };

  const calculateTrainingCosts = () => {
    if (!areInputsValid(getValidationErrors, setErrors)) {
      setIsTrainingCostsCalculated(false);
      return 0;
    }

    const costOfCourse = parseFloat(cost);

    setIsTrainingCostsCalculated(true);

    let averageHourlyWage = 0;
    let hoursToCompleteCourse = 0;
    if (includeLostProductivityCosts) {
      hoursToCompleteCourse =
        CREDIT_OPTIONS_TO_METADATA[selectedCreditOption].hoursToComplete;

      if (selectedWageType === "Hourly") {
        averageHourlyWage = averageWage;
      } else if (selectedWageType === "Annual") {
        averageHourlyWage = averageWage / WORKING_HOURS_IN_A_YEAR;
      }
    }

    return (
      (costOfCourse + averageHourlyWage * hoursToCompleteCourse) *
      parseInt(numberOfEmployees, 10)
    );
  };

  return (
    <section className="panel-container">
      <section className="form-container">
        <h2>Training Costs</h2>
        <p>
          First, we will estimate the total cost of training. Training Costs
          take into account the cost of the program and the number of employees
          registered.
        </p>

        <div className="form-element">
          <label htmlFor="employees">Number of Employees</label>
          <input
            type="number"
            id="employees"
            name="employees"
            value={numberOfEmployees}
            onChange={handleNumberOfEmployeesChange}
          />
          <ErrorMessage message={errors.numberOfEmployees} />
        </div>

        <div className="form-element">
          <label htmlFor="cost">Cost per Employee ($)</label>
          <input
            type="number"
            id="cost"
            name="cost"
            value={cost}
            onChange={handleCostChange}
          />
          <ErrorMessage message={errors.cost} />
        </div>

        <div className="form-element">
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="include-lost-productivity-costs"
              name="include-lost-productivity-costs"
              checked={includeLostProductivityCosts}
              onChange={() =>
                setIncludeLostProductivityCosts(!includeLostProductivityCosts)
              }
            />
            <label htmlFor="include-lost-productivity-costs">
              Include lost productivity costs
            </label>
          </div>

          <p className="input-description">
            Selecting this option will include the additional cost associated
            with lost productivity. This is equal to the average hourly employee
            wage multiplied by the number of hours needed to take the course.
          </p>
        </div>
        {includeLostProductivityCosts && (
          <>
            <div className="form-element">
              <label htmlFor="credit-option">Credit Option</label>
              <CustomSelect
                options={CREDIT_OPTIONS}
                selectedOption={selectedCreditOption}
                setSelectedOption={setSelectedCreditOption}
              />
              <p className="input-description">
                This will determine the number of hours needed to complete the
                program.
              </p>
              <ErrorMessage message={errors.selectedCreditOption} />
            </div>

            <div className="form-element">
              <label htmlFor="wage-type">Average Employee Wage ($)</label>
              <CustomSelect
                options={WAGE_TYPES}
                selectedOption={selectedWageType}
                setSelectedOption={setSelectedWageType}
              />
              <ErrorMessage message={errors.selectedWageType} />
            </div>
            <div className="form-element">
              <label htmlFor="wage"></label>
              <input
                type="number"
                id="wage"
                name="wage"
                value={averageWage}
                onChange={handleAverageWageChange}
              />
              <ErrorMessage message={errors.averageWage} />
            </div>
          </>
        )}

        <button
          type="submit"
          onClick={() => setTrainingCosts(calculateTrainingCosts().toString())}
        >
          Calculate Training Costs
        </button>

        <OutputDisplay
          tag="training-costs"
          label="Training Costs"
          format="currency"
          outputValue={trainingCosts}
        />
      </section>
      <aside>
        <img
          src={roiTrainingCostsImgUrl}
          alt="ROI Calculator Intro"
          className="aside-img"
        />
      </aside>
    </section>
  );
}

TrainingCostsPanel.propTypes = {
  trainingCosts: PropTypes.string.isRequired,
  setTrainingCosts: PropTypes.func.isRequired,
  setIsTrainingCostsCalculated: PropTypes.func.isRequired,
};

export default TrainingCostsPanel;
