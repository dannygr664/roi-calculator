import PropTypes from "prop-types";

import { INDUSTRIES } from "@/utils/constants";

import { CustomSelect } from "@components/forms";

import "./CourseRecommendationsPanel.css";

import courseRecommendationsImgUrl from "@assets/images/course-recommendations.jpg";

function CourseRecommendationsPanel({ selectedIndustry, setSelectedIndustry }) {
  return (
    <section className="panel-container" id="course-recommendations-panel">
      <section className="form-container">
        <h2>Course Recommendations</h2>
        <p>
          In this section, we will recommend courses based on your industry.
        </p>
        <p>
          <b>Instructions:</b>
        </p>
        <ol>
          <li>Select your industry.</li>
          <li>Fill out the accompanying survey.</li>
          <li>Click &quot;Get Course Recommendations.&quot;</li>
        </ol>
        <div className="form-element">
          <CustomSelect
            label="Industry"
            name="industry"
            options={INDUSTRIES}
            selectedOption={selectedIndustry}
            setSelectedOption={setSelectedIndustry}
          />
        </div>
      </section>
      <aside>
        <img
          src={courseRecommendationsImgUrl}
          alt="Course Recommendations"
          className="aside-img"
        />
      </aside>
    </section>
  );
}

CourseRecommendationsPanel.propTypes = {
  selectedIndustry: PropTypes.string.isRequired,
  setSelectedIndustry: PropTypes.func.isRequired,
};

export default CourseRecommendationsPanel;
