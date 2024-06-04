import OutputDisplay from "./OutputDisplay";

import "./TrainingCosts.css";

function TrainingCosts() {
  return (
    <section className="panel-container">
      <section className="form-container">
        <h2>Training Costs</h2>
        <p>
          Training Costs take into account the cost of the program, the average
          hourly wage per employee in the given industry, and the number of
          hours needed to complete the program.
        </p>
        <button type="submit">Calculate Training Costs</button>
        <div className="output-display">
          <OutputDisplay tag="training-costs" label="Training Costs" />
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
