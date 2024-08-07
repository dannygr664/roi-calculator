import PropTypes from "prop-types";

import { ROI_METRICS } from "@/utils/constants";

import { CustomSelect } from "@components/forms";

import "./ROICalculationPanel.css";

import roiCalculationImgUrl from "@assets/images/roi-calculator.jpg";

function ROICalculationPanel({ selectedRoiMetric, setSelectedRoiMetric }) {
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
            <b>Workplace Behavior:</b> Measures how training translates to
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
          <CustomSelect
            label="ROI Metric"
            name="roi-metric"
            options={ROI_METRICS}
            selectedOption={selectedRoiMetric}
            setSelectedOption={setSelectedRoiMetric}
          />
        </div>
      </section>
      <aside>
        <img
          src={roiCalculationImgUrl}
          alt="ROI Calculator"
          className="aside-img"
        />
      </aside>
    </section>
  );
}

ROICalculationPanel.propTypes = {
  selectedRoiMetric: PropTypes.string.isRequired,
  setSelectedRoiMetric: PropTypes.func.isRequired,
};

export default ROICalculationPanel;
