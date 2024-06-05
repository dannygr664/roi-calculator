import { useState } from "react";
import PropTypes from "prop-types";

import OutputDisplay from "./OutputDisplay";

import "./ROICalculationPanel.css";

function ROICalculationPanel({
  name,
  tag,
  description,
  asideImageFilePath,
  calculateROI,
  calculateTrainingCosts,
}) {
  const [netReturn, setNetReturn] = useState("0");
  const [percentageReturn, setPercentageReturn] = useState("0");

  const calculateNetReturn = () => {
    return calculateTrainingCosts() * calculateROI();
  };

  const calculatePercentageReturn = () => {
    return calculateROI() * 100;
  };

  return (
    <section className="panel-container">
      <section className="form-container">
        <h2>ROI: {name}</h2>
        <p>{description}</p>
        <button
          type="submit"
          onClick={() => {
            setNetReturn(calculateNetReturn().toString());
            setPercentageReturn(calculatePercentageReturn().toString());
          }}
        >
          Calculate {name} ROI
        </button>
        <div className="output-display">
          <OutputDisplay
            tag={tag + "-net-return"}
            label="Net Return"
            format="currency"
            outputValue={netReturn}
          />
        </div>
        <div className="output-display">
          <OutputDisplay
            tag={tag + "-percentage-return"}
            label="% Return"
            format="percentage"
            outputValue={percentageReturn}
          />
        </div>
      </section>
      <aside>
        <img
          src={asideImageFilePath}
          alt={"ROI " + name}
          className="aside-img"
        />
      </aside>
    </section>
  );
}

ROICalculationPanel.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  asideImageFilePath: PropTypes.string.isRequired,
  calculateROI: PropTypes.func.isRequired,
  calculateTrainingCosts: PropTypes.func.isRequired,
};

export default ROICalculationPanel;
