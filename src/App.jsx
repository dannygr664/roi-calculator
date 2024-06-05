import { useState } from "react";

import Header from "./components/Header";
import Intro from "./components/Intro";
import Divider from "./components/Divider";
import TrainingCosts from "./components/TrainingCosts";
import "./App.css";
import { COURSES_TO_METADATA, INDUSTRIES_TO_METADATA } from "./constants";
import TraineeSatisfaction from "./components/TraineeSatisfaction";

function App() {
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("");
  const [numberOfEmployees, setNumberOfEmployees] = useState("0");

  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (sectionNumber) => {
    setOpenSection(openSection === sectionNumber ? null : sectionNumber);
  };

  const calculateTrainingCosts = () => {
    if (!selectedCourse || !selectedIndustry) {
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
    if (!selectedCourse || !selectedIndustry) {
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
        <TraineeSatisfaction
          calculateTraineeSatisfaction={calculateTraineeSatisfaction}
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
        <Divider />
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
