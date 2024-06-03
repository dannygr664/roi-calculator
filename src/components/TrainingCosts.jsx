import "./TrainingCosts.css";

function TrainingCosts() {
  return (
    <section id="training-costs-container">
      <section id="training-costs-form-container">
        <h2>Training Costs</h2>
        <p>
          Training Costs take into account the cost of the program, the average
          hourly wage per employee in the given industry, and the number of
          hours needed to complete the program.
        </p>
        <button type="submit">Calculate Training Costs</button>
        <div className="output-display">
          <label htmlFor="training-costs">Training Costs</label>
          <input
            type="number"
            id="training-costs"
            name="training-costs"
            value="0"
            readOnly
          />
        </div>
      </section>
      <aside>
        <img
          src="images/roi-training-costs.jpg"
          alt="ROI Calculator Intro"
          id="training-costs-image"
        />
      </aside>
    </section>
  );
}

export default TrainingCosts;
