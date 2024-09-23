import { useState } from "react";
import PropTypes from "prop-types";

import { ROI_METRICS } from "@/utils/constants";

import { CustomSelect } from "@components/forms";

import "./ROICalculationPanel.css";

import roiCalculationImgUrl from "@assets/images/roi-calculator.jpg";

function ROICalculationPanel({ selectedRoiMetric, setSelectedRoiMetric }) {
  const [isRoiCalculationDetailsVisible, setIsRoiCalculationDetailsVisible] =
    useState(false);

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
        <p
          onClick={() =>
            setIsRoiCalculationDetailsVisible(!isRoiCalculationDetailsVisible)
          }
        >
          <b>Click for details on how we calculate ROI.</b>
        </p>
        {isRoiCalculationDetailsVisible && (
          <>
            <p>
              The ROI calculation is based on data indicating that well-designed
              training programs can lead to productivity gains of 10–20%, and
              that a conservative ROI estimate for Fortune 500 and Inc.
              companies is around $2,000–$5,000 per employee, annually.
              Additionally, one study observed a 29% ROI 3 months after
              training. The calculation consists of 3 steps:
            </p>
            <ol>
              <li>
                <b>ROI estimate #1:</b> Based on the survey responses, the ROI
                is mapped to a value between 10% and 20%. This percentage is
                multiplied by the training costs calculated above.
              </li>
              <li>
                <b>ROI estimate #2: </b>
                Based on the survey responses, the ROI is mapped to a value
                between $2,000 and $5,000. This value is multiplied by the
                number of employees entered above.
              </li>
              <li>
                <b>Averaging the ROI estimates:</b> The two estimates are
                averaged together to obtain a net ROI.
              </li>
              <li>
                <b>Increased ROI for new hires (optional):</b> If employees took
                the training within 3 months of employment, an additional 29%
                increase in ROI is applied.
              </li>
            </ol>
          </>
        )}
        <p>
          <b>Instructions:</b>
        </p>
        <ol>
          <li>Select the metric you would like to use.</li>
          <li>Fill out the accompanying survey.</li>
          <li>Click &quot;Get Results &amp; Calculate ROI&quot;.</li>
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
