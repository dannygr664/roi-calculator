import { useState } from "react";
import PropTypes from "prop-types";

import OutputDisplay from "./OutputDisplay";

import "./TraineeSatisfaction.css";

function TraineeSatisfaction({ calculateTraineeSatisfaction }) {
  const [traineeSatisfaction, setTraineeSatisfaction] = useState("0");

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
          onClick={() =>
            setTraineeSatisfaction(calculateTraineeSatisfaction().toString())
          }
        >
          Calculate Trainee Satisfaction
        </button>
        <div className="output-display">
          <OutputDisplay
            tag="training-costs"
            label="Net Return"
            format="currency"
            outputValue={traineeSatisfaction}
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
};

export default TraineeSatisfaction;
