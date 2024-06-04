import PropTypes from "prop-types";

import CustomSelect from "./CustomSelect";

import "./Intro.css";

const COURSES = [
  "Big Data",
  "Customer Experience 1",
  "Customer Experience 2",
  "Design Thinking",
  "Digital Marketing",
  "Engineering Leadership",
  "Executive Education Advisor Training",
  "Generative AI & Valuation",
  "Green Technologies and AI",
  "Instructor Certificate Program",
  "IT & Cybersecurity Leadership Teams",
  "Mentor Certificate Program",
  "Strategic AI",
  "Strategic AI for Healthcare Professionals",
  "Strategic AI for HR Professionals",
  "Strategic AI in Sales",
  "Transformation Leadership",
  "Women in Leadership",
];

const INDUSTRIES = [
  "Advertising and Marketing",
  "Aerospace",
  "Agriculture",
  "Computer and Technology",
  "Construction",
  "Education",
  "Energy",
  "Entertainment",
  "Fashion",
  "Finance and Economic",
  "Food and Beverage",
  "Healthcare",
  "Hospitality",
  "Manufacturing",
  "Media and News",
  "Mining",
  "Pharmaceutical",
  "Telecommunication",
  "Transportation",
];

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

        <form>
          <div className="form-row">
            <div className="form-element">
              <label htmlFor="course">Course</label>
              <CustomSelect
                tag="course"
                options={COURSES}
                value={selectedCourse}
                onChange={handleCourseChange}
              />
            </div>

            <div className="form-element">
              <label htmlFor="industry">Industry</label>
              <CustomSelect
                tag="industry"
                options={INDUSTRIES}
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
        </form>
      </section>
      <aside>
        <img
          src="images/roi-intro.jpg"
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
