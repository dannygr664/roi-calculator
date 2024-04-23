import { useState } from "react";
import PropTypes from "prop-types";

function ROICalculator({ onCalculate }) {
  const [
    professionalDevelopmentInvestment,
    setProfessionalDevelopmentInvestment,
  ] = useState("");
  const [isLeadershipInvestmentChecked, setIsLeadershipInvestmentChecked] =
    useState(false);
  const PROFESSIONAL_DEVELOPMENT_ROI = 415; // annualized ROI as a percentage
  const LEADERSHIP_ROI_FACTOR = 1.29;

  const handleProfessionalDevelopmentInvestmentChange = (e) => {
    setProfessionalDevelopmentInvestment(e.target.value);
  };

  const handleLeadershipInvestmentCheckboxChanged = (e) => {
    setIsLeadershipInvestmentChecked(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const investmentNum = parseFloat(professionalDevelopmentInvestment);

    if (!isNaN(investmentNum) && investmentNum > 0) {
      const ROI = isLeadershipInvestmentChecked
        ? PROFESSIONAL_DEVELOPMENT_ROI * LEADERSHIP_ROI_FACTOR
        : PROFESSIONAL_DEVELOPMENT_ROI;
      const returnValue = (investmentNum * ROI) / 100;
      onCalculate(returnValue.toFixed(2));
    } else {
      alert("Please enter a valid number for investment");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="professional-development-investment">
          Initial Investment ($):{" "}
        </label>
        <input
          type="number"
          id="professional-development-investment"
          value={professionalDevelopmentInvestment}
          onChange={handleProfessionalDevelopmentInvestmentChange}
        />
      </div>
      <div>
        <label htmlFor="leadership-investment">
          Invested in Leadership Program{" "}
        </label>
        <input
          type="checkbox"
          id="leadership-investment"
          value={isLeadershipInvestmentChecked}
          onChange={handleLeadershipInvestmentCheckboxChanged}
        />
      </div>

      <button type="submit">Calculate Return</button>
    </form>
  );
}

ROICalculator.propTypes = {
  onCalculate: PropTypes.func.isRequired,
};

export default ROICalculator;
