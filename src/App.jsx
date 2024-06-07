import { useState } from "react";

import Header from "./components/Header";
import Intro from "./components/Intro";
import TrainingCosts from "./components/TrainingCosts";
import ROICalculationPanel from "./components/ROICalculationPanel";
import "./App.css";
import {
  COURSES_TO_METADATA,
  CREDIT_OPTIONS_TO_METADATA,
  INDUSTRIES_TO_METADATA,
} from "./constants";

import roiTraineeSatisfactionImgUrl from "../images/roi-trainee-satisfaction.jpg";
import roiLearningImgUrl from "../images/roi-learning.jpg";
import roiWorkplaceBehaviorImgUrl from "../images/roi-workplace-behavior.jpg";

function App() {
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedCreditOption, setSelectedCreditOption] = useState("");
  const [numberOfEmployees, setNumberOfEmployees] = useState("0");
  const [cost, setCost] = useState("0");
  const [selectedIndustry, setSelectedIndustry] = useState("");

  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (sectionNumber) => {
    setOpenSection(openSection === sectionNumber ? null : sectionNumber);
  };

  const areInputsValid = () => {
    if (
      !selectedCourse ||
      !selectedCreditOption ||
      parseInt(numberOfEmployees, 10) < 0 ||
      parseFloat(cost) < 0 ||
      isNaN(parseFloat(cost)) ||
      !selectedIndustry
    ) {
      return false;
    } else {
      return true;
    }
  };

  const calculateTrainingCosts = () => {
    if (!areInputsValid()) {
      return 0;
    }

    const costOfCourse = parseFloat(cost);
    const averageHourlyWage =
      INDUSTRIES_TO_METADATA[selectedIndustry].averageHourlyWage;
    const hoursToCompleteCourse =
      CREDIT_OPTIONS_TO_METADATA[selectedCreditOption].hoursToComplete;

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

  const calculateWorkplaceBehaviorROI = () => {
    if (!areInputsValid()) {
      return 0;
    }

    return COURSES_TO_METADATA[selectedCourse].behavioralAssessmentScore;
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
          asideImageFilePath={roiTraineeSatisfactionImgUrl}
          calculateROI={calculateTraineeSatisfaction}
          calculateTrainingCosts={calculateTrainingCosts}
        />
      ),
    },
    {
      title: "Learning",
      content: (
        <ROICalculationPanel
          name="Learning"
          tag="learning"
          description="This metric uses pre-assessment and post-assesment scores to measure 
          ROI as a function of Learning."
          asideImageFilePath={roiLearningImgUrl}
          calculateROI={calculateLearningROI}
          calculateTrainingCosts={calculateTrainingCosts}
        />
      ),
    },
    {
      title: "Workplace Behavior",
      content: (
        <ROICalculationPanel
          name="Workplace Behavior"
          tag="workplace-behavior"
          description="This metric uses data gathered from managers observing employees to 
          measure ROI as a function of improvements in Workplace Behavior."
          asideImageFilePath={roiWorkplaceBehaviorImgUrl}
          calculateROI={calculateWorkplaceBehaviorROI}
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
            selectedCreditOption={selectedCreditOption}
            setSelectedCreditOption={setSelectedCreditOption}
            numberOfEmployees={numberOfEmployees}
            setNumberOfEmployees={setNumberOfEmployees}
            cost={cost}
            setCost={setCost}
            selectedIndustry={selectedIndustry}
            setSelectedIndustry={setSelectedIndustry}
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
