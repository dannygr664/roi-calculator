import "./Intro.css";

function Intro() {
  return (
    <section className="intro">
      <section className="intro-and-form">
        <p>
          This tool will calculate your estimated return on investment following
          Zschool training, using various metrics.
        </p>
        <p>
          Begin by selecting your course of interest, your company’s industry,
          and the number of employees you wish to enroll.
        </p>

        <form>
          <div className="form-row">
            <div className="form-element">
              <label htmlFor="course">Course</label>
              <div className="custom-select">
                <select id="course" name="course">
                  <option value="">Select</option>
                </select>
              </div>
            </div>

            <div className="form-element">
              <label htmlFor="industry">Industry</label>
              <div className="custom-select">
                <select id="industry" name="industry">
                  <option value="">Select</option>
                </select>
              </div>
            </div>
          </div>

          <div className="form-element">
            <label htmlFor="employees">Number of Employees</label>
            <input type="number" id="employees" name="employees" value="0" />
          </div>
        </form>
      </section>
      <aside>
        <img
          src="images/roi-intro.jpg"
          alt="ROI Calculator Intro"
          className="intro-image"
        />
      </aside>
    </section>
  );
}

export default Intro;
