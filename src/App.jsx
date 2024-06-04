import { useState } from "react";

import Header from "./components/Header";
import Intro from "./components/Intro";
import Divider from "./components/Divider";
import TrainingCosts from "./components/TrainingCosts";
import "./App.css";
import { COURSES_TO_METADATA, INDUSTRIES_TO_METADATA } from "./constants";

function App() {
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("");
  const [numberOfEmployees, setNumberOfEmployees] = useState("0");

  function calculateTrainingCosts() {
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
  }

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
        <section className="content">
          <TrainingCosts calculateTrainingCosts={calculateTrainingCosts} />
        </section>
        <Divider />
      </main>
    </>
  );
}

export default App;
