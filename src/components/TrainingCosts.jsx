import { useState } from "react";
import PropTypes from "prop-types";

import { getNamesAndValues } from "../utilities";
import { CREDIT_OPTIONS_TO_METADATA, WAGE_TYPES } from "../constants";

import CustomSelect from "./CustomSelect";
import ErrorMessage from "./ErrorMessage";
import OutputDisplay from "./OutputDisplay";

import "./TrainingCosts.css";

import roiTrainingCostsImgUrl from "../../images/roi-training-costs.jpg";

function TrainingCosts({
  selectedCreditOption,
  setSelectedCreditOption,
  numberOfEmployees,
  setNumberOfEmployees,
  cost,
  setCost,
  selectedWageType,
  setSelectedWageType,
  averageWage,
  setAverageWage,
  errors,
  calculateTrainingCosts,
}) {
  const [trainingCosts, setTrainingCosts] = useState("0");

  const handleCreditOptionChange = (event) => {
    setSelectedCreditOption(event.target.value);
  };

  const handleNumberOfEmployeesChange = (event) => {
    setNumberOfEmployees(event.target.value);
  };

  const handleCostChange = (event) => {
    setCost(event.target.value);
  };

  const handleWageTypeChange = (event) => {
    setSelectedWageType(event.target.value);
  };

  const handleAverageWageChange = (event) => {
    setAverageWage(event.target.value);
  };

  return (
    <section className="panel-container">
      <section className="form-container">
        <h2>Training Costs</h2>
        <p>
          First, we will estimate the total cost of training. Training Costs
          take into account the cost of the program, the average wage per
          employee, and the number of hours needed to complete the program.
        </p>

        <div className="form-element">
          <label htmlFor="credit-option">Credit Option</label>
          <CustomSelect
            tag="credit-option"
            options={getNamesAndValues(CREDIT_OPTIONS_TO_METADATA)}
            value={selectedCreditOption}
            onChange={handleCreditOptionChange}
          />
          <ErrorMessage message={errors.selectedCreditOption} />
        </div>

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
          <label htmlFor="wage-type">Average Employee Wage ($)</label>
          <CustomSelect
            tag="wage-type"
            options={getNamesAndValues(WAGE_TYPES)}
            value={selectedWageType}
            onChange={handleWageTypeChange}
          />
          <ErrorMessage message={errors.wageType} />
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

        <button
          type="submit"
          onClick={() => setTrainingCosts(calculateTrainingCosts().toString())}
        >
          Calculate Training Costs
        </button>

        <div className="output-display">
          <OutputDisplay
            tag="training-costs"
            label="Training Costs"
            format="currency"
            outputValue={trainingCosts}
          />
        </div>
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

TrainingCosts.propTypes = {
  selectedCreditOption: PropTypes.string.isRequired,
  setSelectedCreditOption: PropTypes.func.isRequired,
  numberOfEmployees: PropTypes.string.isRequired,
  setNumberOfEmployees: PropTypes.func.isRequired,
  cost: PropTypes.string.isRequired,
  setCost: PropTypes.func.isRequired,
  selectedWageType: PropTypes.string.isRequired,
  setSelectedWageType: PropTypes.func.isRequired,
  averageWage: PropTypes.string.isRequired,
  setAverageWage: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  calculateTrainingCosts: PropTypes.func.isRequired,
};

export default TrainingCosts;
