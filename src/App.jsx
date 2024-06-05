import { useState } from "react";

import Header from "./components/Header";
import Intro from "./components/Intro";
import TrainingCosts from "./components/TrainingCosts";
import ROICalculationPanel from "./components/ROICalculationPanel";
import "./App.css";
import { COURSES_TO_METADATA, INDUSTRIES_TO_METADATA } from "./constants";

function App() {
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("");
  const [numberOfEmployees, setNumberOfEmployees] = useState("0");

  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (sectionNumber) => {
    setOpenSection(openSection === sectionNumber ? null : sectionNumber);
  };

  const areInputsValid = () => {
    if (!selectedCourse || !selectedIndustry || numberOfEmployees < 0) {
      return false;
    } else {
      return true;
    }
  };

  const calculateTrainingCosts = () => {
    if (!areInputsValid()) {
      return 0;
    }

    const costOfCourse = COURSES_TO_METADATA[selectedCourse].cost;
    const averageHourlyWage =
      INDUSTRIES_TO_METADATA[selectedIndustry].averageHourlyWage;
    const hoursToCompleteCourse =
      COURSES_TO_METADATA[selectedCourse].hoursToComplete;

    return (
      (costOfCourse + averageHourlyWage * hoursToCompleteCourse) *
      parseInt(numberOfEmployees, 10)
    );
  };

  const calculateTraineeSatisfaction = () => {
    if (!areInputsValid()) {
      return 0;
    }

    return COURSES_TO_METADATA[selectedCourse].satisfactionSurveyScore;
  };

  const calculateLearningROI = () => {
    if (!areInputsValid()) {
      return 0;
    }

    const preAssessmentScore =
      COURSES_TO_METADATA[selectedCourse].preAssessmentScore;
    const postAssessmentScore =
      COURSES_TO_METADATA[selectedCourse].postAssessmentScore;
    return (postAssessmentScore - preAssessmentScore) / preAssessmentScore;
  };

  const calculatorSections = [
    {
      title: "Training Costs",
      content: (
        <TrainingCosts calculateTrainingCosts={calculateTrainingCosts} />
      ),
    },
    {
      title: "Trainee Satisfaction",
      content: (
        <ROICalculationPanel
          name="Trainee Satisfaction"
          tag="trainee-satisfaction"
          description="This metric uses survey scores from the given course to measure ROI as
          a function of Trainee Satisfaction."
          asideImageFilePath="images/roi-trainee-satisfaction.jpg"
          calculateROI={calculateTraineeSatisfaction}
          calculateTrainingCosts={calculateTrainingCosts}
        />
      ),
    },
  ];

  return (
    <>
      <Header />
      <main>
        <section className="content">
          <h1>ROI Calculator</h1>
          <Intro
            selectedCourse={selectedCourse}
            setSelectedCourse={setSelectedCourse}
            selectedIndustry={selectedIndustry}
            setSelectedIndustry={setSelectedIndustry}
            numberOfEmployees={numberOfEmployees}
            setNumberOfEmployees={setNumberOfEmployees}
          />
        </section>
        {calculatorSections.map((section, index) => (
          <div key={index}>
            <div
              className="section-header"
              onClick={() => toggleSection(index)}
            >
              <h2>
                {openSection === index ? "–" : "+"} {section.title}
              </h2>
            </div>
            {openSection === index && (
              <section className="content">{section.content}</section>
            )}
          </div>
        ))}
      </main>
    </>
  );
}

export default App;
