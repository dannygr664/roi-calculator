import { useState } from "react";

import Header from "./components/Header";
import Wave from "./components/Wave";
import TrainingCosts from "./components/TrainingCosts";
import ROICalculationPanel from "./components/ROICalculationPanel";
import Survey from "./components/Survey";
import "./App.css";
import { LEARNING_SURVEY } from "./surveys/learningSurvey";

function App() {
  const [trainingCosts, setTrainingCosts] = useState("0");
  const [selectedRoiMetric, setSelectedRoiMetric] = useState("");

  const calculatorSections = [
    {
      title: "Training Costs",
      content: (
        <TrainingCosts
          trainingCosts={trainingCosts}
          setTrainingCosts={setTrainingCosts}
        />
      ),
    },
    {
      title: "ROI Calculation",
      content: (
        <ROICalculationPanel
          selectedRoiMetric={selectedRoiMetric}
          setSelectedRoiMetric={setSelectedRoiMetric}
        />
      ),
    },
    {
      title: "Learning Survey",
      content: (
        <Survey
          title={LEARNING_SURVEY.title}
          instructions={LEARNING_SURVEY.instructions}
          questionsAndAnswers={LEARNING_SURVEY.questionsAndAnswers}
        />
      ),
    },
  ];

  return (
    <>
      <Header />
      <Wave />
      <main>
        {calculatorSections.map((section, index) => (
          <div key={index}>{section.content}</div>
        ))}
      </main>
    </>
  );
}

export default App;
