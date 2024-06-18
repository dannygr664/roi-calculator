import { useState } from "react";

import Header from "./components/Header";
import Wave from "./components/Wave";
import TrainingCostsPanel from "./components/TrainingCostsPanel";
import ROICalculationPanel from "./components/ROICalculationPanel";
import ROICalculationSurvey from "./components/ROICalculationSurvey";
import "./App.css";
import { LEARNING_SURVEY } from "./surveys/learningSurvey";
import { TRAINEE_SATISFACTION_SURVEY } from "./surveys/traineeSatisfactionSurvey";
import { WORKPLACE_BEHAVIOR_SURVEY } from "./surveys/workplaceBehaviorSurvey";

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
        {isTrainingCostsCalculated && selectedRoiMetric === "Learning" && (
          <ROICalculationSurvey
            title={LEARNING_SURVEY.title}
            instructions={LEARNING_SURVEY.instructions}
            questionsAndAnswers={LEARNING_SURVEY.questionsAndAnswers}
            trainingCosts={trainingCosts}
            resultDescriptions={LEARNING_SURVEY.resultDescriptions}
            feedbackIntros={LEARNING_SURVEY.feedbackIntros}
            hrRecommendations={LEARNING_SURVEY.hrRecommendations}
          />
        )}
        {isTrainingCostsCalculated &&
          selectedRoiMetric === "Trainee Satisfaction" && (
            <ROICalculationSurvey
              title={TRAINEE_SATISFACTION_SURVEY.title}
              instructions={TRAINEE_SATISFACTION_SURVEY.instructions}
              questionsAndAnswers={
                TRAINEE_SATISFACTION_SURVEY.questionsAndAnswers
              }
              trainingCosts={trainingCosts}
              resultDescriptions={
                TRAINEE_SATISFACTION_SURVEY.resultDescriptions
              }
              feedbackIntros={TRAINEE_SATISFACTION_SURVEY.feedbackIntros}
              hrRecommendations={TRAINEE_SATISFACTION_SURVEY.hrRecommendations}
            />
          )}
        {isTrainingCostsCalculated &&
          selectedRoiMetric === "Workplace Behavior" && (
            <ROICalculationSurvey
              title={WORKPLACE_BEHAVIOR_SURVEY.title}
              instructions={WORKPLACE_BEHAVIOR_SURVEY.instructions}
              questionsAndAnswers={
                WORKPLACE_BEHAVIOR_SURVEY.questionsAndAnswers
              }
              trainingCosts={trainingCosts}
              resultDescriptions={WORKPLACE_BEHAVIOR_SURVEY.resultDescriptions}
              feedbackIntros={WORKPLACE_BEHAVIOR_SURVEY.feedbackIntros}
              hrRecommendations={WORKPLACE_BEHAVIOR_SURVEY.hrRecommendations}
            />
          )}
      </main>
    </>
  );
}

export default App;
