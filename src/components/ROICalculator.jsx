import { useState } from "react";
import PropTypes from "prop-types";

function ROICalculator({ onCalculate }) {
  const [investment, setInvestment] = useState("");
  const [returnValue, setReturnValue] = useState("");

  const handleInvestmentChange = (e) => {
    setInvestment(e.target.value);
  };

  const handleReturnValueChange = (e) => {
    setReturnValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const investmentNum = parseFloat(investment);
    const returnValueNum = parseFloat(returnValue);

    if (!isNaN(investmentNum) && !isNaN(returnValueNum) && investmentNum > 0) {
      const roi = ((returnValueNum - investmentNum) / investmentNum) * 100;
      onCalculate(roi.toFixed(2));
    } else {
      alert("Please enter valid numbers for both investment and return value.");
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
      <div>
        <label htmlFor="return-value">Return Value ($): </label>
        <input
          type="number"
          id="return-value"
          value={returnValue}
          onChange={handleReturnValueChange}
        />
      </div>
      <button type="submit">Calculate ROI</button>
    </form>
  );
}

ROICalculator.propTypes = {
  onCalculate: PropTypes.func.isRequired,
};

export default ROICalculator;
