import PropTypes from "prop-types";

import CustomSelect from "./CustomSelect";
import { COURSES_TO_METADATA, INDUSTRIES_TO_METADATA } from "../constants";

import "./Intro.css";

function getNamesAndValues(obj) {
  const namesAndValues = [];
  for (const property in obj) {
    namesAndValues.push({ name: obj[property].name, value: property });
  }

  return namesAndValues;
}

function Intro({
  selectedCourse,
  setSelectedCourse,
  selectedIndustry,
  setSelectedIndustry,
  numberOfEmployees,
  setNumberOfEmployees,
}) {
  const handleCourseChange = (event) => {
    setSelectedCourse(event.target.value);
  };

  const handleIndustryChange = (event) => {
    setSelectedIndustry(event.target.value);
  };

  const handleNumberOfEmployeesChange = (event) => {
    setNumberOfEmployees(event.target.value);
  };

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

        <div id="form-container">
          <div className="form-row">
            <div className="form-element">
              <label htmlFor="course">Course</label>
              <CustomSelect
                tag="course"
                options={getNamesAndValues(COURSES_TO_METADATA)}
                value={selectedCourse}
                onChange={handleCourseChange}
              />
            </div>

            <div className="form-element">
              <label htmlFor="industry">Industry</label>
              <CustomSelect
                tag="industry"
                options={getNamesAndValues(INDUSTRIES_TO_METADATA)}
                value={selectedIndustry}
                onChange={handleIndustryChange}
              />
            </div>
          </div>

          <div className="form-element">
            <label htmlFor="employees">Number of Employees</label>
            <input
              type="number"
              id="employees"
              name="employees"
              value={numberOfEmployees}
              onChange={handleNumberOfEmployeesChange}
            />
          </div>
        </div>
      </section>
      <aside>
        <img
          src="./images/roi-intro.jpg"
          alt="ROI Calculator Intro"
          className="aside-img"
        />
      </aside>
    </section>
  );
}

Intro.propTypes = {
  selectedCourse: PropTypes.string.isRequired,
  setSelectedCourse: PropTypes.func.isRequired,
  selectedIndustry: PropTypes.string.isRequired,
  setSelectedIndustry: PropTypes.func.isRequired,
  numberOfEmployees: PropTypes.string.isRequired,
  setNumberOfEmployees: PropTypes.func.isRequired,
};

export default Intro;
