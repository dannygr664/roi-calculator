import PropTypes from "prop-types";

import CustomSelect from "./CustomSelect";
import {
  COURSES_TO_METADATA,
  CREDIT_OPTIONS_TO_METADATA,
  INDUSTRIES_TO_METADATA,
} from "../constants";

import "./Intro.css";

import roiIntroImgUrl from "../../images/roi-intro.jpg";

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
  selectedCreditOption,
  setSelectedCreditOption,
  numberOfEmployees,
  setNumberOfEmployees,
  cost,
  setCost,
  selectedIndustry,
  setSelectedIndustry,
  averageHourlyWage,
  setAverageHourlyWage,
}) {
  const handleCourseChange = (event) => {
    setSelectedCourse(event.target.value);
  };

  const handleCreditOptionChange = (event) => {
    setSelectedCreditOption(event.target.value);
  };

  const handleNumberOfEmployeesChange = (event) => {
    setNumberOfEmployees(event.target.value);
  };

  const handleCostChange = (event) => {
    setCost(event.target.value);
  };

  const handleIndustryChange = (event) => {
    setSelectedIndustry(event.target.value);
  };

  const handleAverageHourlyWageChange = (event) => {
    setAverageHourlyWage(event.target.value);
  };

  return (
    <section className="intro">
      <section className="intro-and-form">
        <p>
          This tool will calculate your estimated return on investment following
          Zschool training, using various metrics.
        </p>
        <p>Begin by filling out the following fields.</p>

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
              <label htmlFor="credit-option">Credit Option</label>
              <CustomSelect
                tag="credit-option"
                options={getNamesAndValues(CREDIT_OPTIONS_TO_METADATA)}
                value={selectedCreditOption}
                onChange={handleCreditOptionChange}
              />
            </div>
          </div>

          <div className="form-row">
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
            <div className="form-element">
              <label htmlFor="cost">Cost per Employee</label>
              <input
                type="number"
                id="cost"
                name="cost"
                value={cost}
                onChange={handleCostChange}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-element">
              <label htmlFor="industry">Your Company&apos;s Industry</label>
              <CustomSelect
                tag="industry"
                options={getNamesAndValues(INDUSTRIES_TO_METADATA)}
                value={selectedIndustry}
                onChange={handleIndustryChange}
              />
            </div>
            <div className="form-element">
              <label htmlFor="averageHourlyWage">
                Average Hourly Employee Wage
              </label>
              <input
                type="number"
                id="averageHourlyWage"
                name="averageHourlyWage"
                value={averageHourlyWage}
                onChange={handleAverageHourlyWageChange}
              />
            </div>
          </div>
        </div>
      </section>
      <aside>
        <img
          src={roiIntroImgUrl}
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
  selectedCreditOption: PropTypes.string.isRequired,
  setSelectedCreditOption: PropTypes.func.isRequired,
  numberOfEmployees: PropTypes.string.isRequired,
  setNumberOfEmployees: PropTypes.func.isRequired,
  cost: PropTypes.string.isRequired,
  setCost: PropTypes.func.isRequired,
  selectedIndustry: PropTypes.string.isRequired,
  setSelectedIndustry: PropTypes.func.isRequired,
  averageHourlyWage: PropTypes.string.isRequired,
  setAverageHourlyWage: PropTypes.func.isRequired,
};

export default Intro;
