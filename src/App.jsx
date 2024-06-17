import { useState } from "react";

import Header from "./components/Header";
import Wave from "./components/Wave";
import TrainingCostsPanel from "./components/TrainingCostsPanel";
import ROICalculationPanel from "./components/ROICalculationPanel";
import ROICalculationSurvey from "./components/ROICalculationSurvey";
import "./App.css";
import { LEARNING_SURVEY } from "./surveys/learningSurvey";

function App() {
  const [trainingCosts, setTrainingCosts] = useState("0");
  const [isTrainingCostsCalculated, setIsTrainingCostsCalculated] =
    useState(false);
  const [selectedRoiMetric, setSelectedRoiMetric] = useState("");

  return (
    <>
      <Header />
      <Wave />
      <main>
        <TrainingCostsPanel
          trainingCosts={trainingCosts}
          setTrainingCosts={setTrainingCosts}
          setIsTrainingCostsCalculated={setIsTrainingCostsCalculated}
        />
        {isTrainingCostsCalculated && (
          <ROICalculationPanel
            selectedRoiMetric={selectedRoiMetric}
            setSelectedRoiMetric={setSelectedRoiMetric}
          />
        )}
        {selectedRoiMetric && (
          <ROICalculationSurvey
            title={LEARNING_SURVEY.title}
            instructions={LEARNING_SURVEY.instructions}
            questionsAndAnswers={LEARNING_SURVEY.questionsAndAnswers}
          />
        )}
      </main>
    </>
  );
}

export default App;
