import { useState } from "react";
import PropTypes from "prop-types";

import OutputDisplay from "./OutputDisplay";

import "./TraineeSatisfaction.css";

function TraineeSatisfaction({
  calculateTraineeSatisfaction,
  calculateTrainingCosts,
}) {
  const [netReturn, setNetReturn] = useState("0");

  const calculateNetReturn = () => {
    const trainingCosts = calculateTrainingCosts();
    return trainingCosts * (1 + calculateTraineeSatisfaction()) - trainingCosts;
  };

  return (
    <section className="panel-container">
      <section className="form-container">
        <h2>Trainee Satisfaction</h2>
        <p>
          This metric uses survey scores from the given course to measure
          Trainee Satisfaction.
        </p>
        <button
          type="submit"
          onClick={() => setNetReturn(calculateNetReturn().toString())}
        >
          Calculate Trainee Satisfaction
        </button>
        <div className="output-display">
          <OutputDisplay
            tag="training-costs"
            label="Net Return"
            format="currency"
            outputValue={netReturn}
          />
        </div>
      </section>
      <aside>
        <img
          src="images/roi-trainee-satisfaction.jpg"
          alt="ROI Trainee Satisfaction"
          className="aside-img"
        />
      </aside>
    </section>
  );
}

TraineeSatisfaction.propTypes = {
  calculateTraineeSatisfaction: PropTypes.func.isRequired,
  calculateTrainingCosts: PropTypes.func.isRequired,
};

export default TraineeSatisfaction;
