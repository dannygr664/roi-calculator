import { useState } from "react";
import PropTypes from "prop-types";

function ROICalculator({ onCalculate }) {
  const [investment, setInvestment] = useState("");
  const ROI = 415; // annualized ROI as a percentage

  const handleInvestmentChange = (e) => {
    setInvestment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const investmentNum = parseFloat(investment);

    if (!isNaN(investmentNum) && investmentNum > 0) {
      const returnValue = (investmentNum * ROI) / 100;
      onCalculate(returnValue.toFixed(2));
    } else {
      alert("Please enter a valid number for investment");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="investment">Initial Investment ($): </label>
        <input
          type="number"
          id="investment"
          value={investment}
          onChange={handleInvestmentChange}
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
