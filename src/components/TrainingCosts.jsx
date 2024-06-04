import { useState } from "react";

import OutputDisplay from "./OutputDisplay";

import "./TrainingCosts.css";

function calculateTrainingCosts() {
  return 1;
}

function TrainingCosts() {
  const [trainingCosts, setTrainingCosts] = useState("0");

  return (
    <section className="panel-container">
      <section className="form-container">
        <h2>Training Costs</h2>
        <p>
          Training Costs take into account the cost of the program, the average
          hourly wage per employee in the given industry, and the number of
          hours needed to complete the program.
        </p>
        <button
          type="submit"
          onClick={() => setTrainingCosts(calculateTrainingCosts())}
        >
          Calculate Training Costs
        </button>
        <div className="output-display">
          <OutputDisplay
            tag="training-costs"
            label="Training Costs"
            outputValue={trainingCosts}
          />
        </div>
      </section>
      <aside>
        <img
          src="images/roi-training-costs.jpg"
          alt="ROI Calculator Intro"
          className="aside-img"
        />
      </aside>
    </section>
  );
}

export default TrainingCosts;
