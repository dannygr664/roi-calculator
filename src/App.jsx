import { useState } from "react";

import Header from "./components/Header";
import Intro from "./components/Intro";
import Divider from "./components/Divider";
import TrainingCosts from "./components/TrainingCosts";
import "./App.css";

function App() {
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("");
  const [numberOfEmployees, setNumberOfEmployees] = useState("0");

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
          <TrainingCosts />
        </section>
        <Divider />
      </main>
    </>
  );
}

export default App;
