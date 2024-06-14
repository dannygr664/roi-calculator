import { useState } from "react";
import PropTypes from "prop-types";

import { getNamesAndValues } from "../utilities";
import { ROI_METRICS } from "../constants";

import CustomSelect from "./CustomSelect";
import OutputDisplay from "./OutputDisplay";

import "./ROICalculationPanel.css";

import roiCalculationImgUrl from "../../images/roi-intro.jpg";

function ROICalculationPanel({
  name,
  tag,
  selectedRoiMetric,
  setSelectedRoiMetric,
  calculateROI,
  calculateTrainingCosts,
}) {
  const [netReturn, setNetReturn] = useState("0");
  const [percentageReturn, setPercentageReturn] = useState("0");

  const handleRoiMetricChange = (event) => {
    setSelectedRoiMetric(event.target.value);
  };

  const calculateNetReturn = () => {
    return calculateTrainingCosts() * calculateROI();
  };

  const calculatePercentageReturn = () => {
    return calculateROI() * 100;
  };

  return (
    <section className="panel-container" id="roi-calculation-panel">
      <section className="form-container">
        <h2>ROI Calculation</h2>
        <p>
          Here, we will calculate return on investment. The following metrics
          may be used for the calculation:
        </p>
        <ul>
          <li>
            <b>Learning:</b> Measures how conducive the program was to learning,
            as well as improvements in skills and job performance
          </li>
          <li>
            <b>Trainee Satisfaction:</b> Measures how satisfied trainees were
            with the program
          </li>
          <li>
            <b>Workplace Behavior</b> Measures how training translates to
            behavior in the workplace
          </li>
        </ul>
        <p>
          <b>Instructions:</b>
        </p>
        <ol>
          <li>Select the metric you would like to use.</li>
          <li>Fill out the accompanying survey.</li>
          <li>Click &quot;Get Results &amp; Calculate ROI&quot;</li>
        </ol>
        <div className="form-element">
          <label htmlFor="roi-metric">ROI Metric</label>
          <CustomSelect
            tag="roi-metric"
            options={getNamesAndValues(ROI_METRICS)}
            value={selectedRoiMetric}
            onChange={handleRoiMetricChange}
          />
        </div>
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
        <img src={roiCalculationImgUrl} alt={name} className="aside-img" />
      </aside>
    </section>
  );
}

ROICalculationPanel.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  selectedRoiMetric: PropTypes.string.isRequired,
  setSelectedRoiMetric: PropTypes.func.isRequired,
  calculateROI: PropTypes.func.isRequired,
  calculateTrainingCosts: PropTypes.func.isRequired,
};

export default ROICalculationPanel;
