import { useState } from "react";

import Header from "./components/Header";
import Wave from "./components/Wave";
import TrainingCostsPanel from "./components/TrainingCostsPanel";
import ROICalculationPanel from "./components/ROICalculationPanel";
import ROICalculationSurvey from "./components/ROICalculationSurvey";
import CourseRecommendationsPanel from "./components/CourseRecommendationsPanel";
import CourseRecommendationsSurvey from "./components/CourseRecommendationsSurvey";
import "./App.css";

import {
  ROI_METRICS,
  ROI_METRICS_TO_SURVEYS,
  INDUSTRIES,
  INDUSTRIES_TO_SURVEYS,
} from "./constants.js";

function App() {
  const [trainingCosts, setTrainingCosts] = useState("0");
  const [isTrainingCostsCalculated, setIsTrainingCostsCalculated] =
    useState(false);
  const [selectedRoiMetric, setSelectedRoiMetric] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("");

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
        {!selectedRoiMetric && <div className="whitespace"></div>}
        {ROI_METRICS.map((roiMetric) => {
          const survey = ROI_METRICS_TO_SURVEYS[roiMetric];
          return (
            isTrainingCostsCalculated &&
            selectedRoiMetric === roiMetric && (
              <ROICalculationSurvey
                key={roiMetric}
                formId={survey.id}
                title={survey.title}
                instructions={survey.instructions}
                questionsAndAnswers={survey.questionsAndAnswers}
                trainingCosts={trainingCosts}
                resultDescriptions={survey.resultDescriptions}
                feedbackIntros={survey.feedbackIntros}
                hrRecommendations={survey.hrRecommendations}
              />
            )
          );
        })}
        <CourseRecommendationsPanel
          selectedIndustry={selectedIndustry}
          setSelectedIndustry={setSelectedIndustry}
        />
        {INDUSTRIES.map((industry) => {
          const survey = INDUSTRIES_TO_SURVEYS[industry];
          return (
            selectedIndustry === industry && (
              <CourseRecommendationsSurvey
                key={industry}
                formId={survey.id}
                title={survey.title}
                instructions={survey.instructions}
                questionsAndAnswers={survey.questionsAndAnswers}
                results={survey.results}
              />
            )
          );
        })}
      </main>
    </>
  );
}

export default App;
