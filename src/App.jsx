import { useState } from "react";

import Header from "@components/Header/Header";
import Wave from "@components/Wave/Wave";
import { TrainingCostsPanel } from "@components/trainingCosts";
import {
  ROICalculationPanel,
  ROICalculationSurvey,
} from "@components/roiCalculation";
import {
  CourseRecommendationsPanel,
  CourseRecommendationsSurvey,
} from "@components/courseRecommendations";
import Footer from "@components/Footer/Footer";

import "./App.css";

import {
  ROI_METRICS,
  ROI_METRICS_TO_SURVEYS,
  INDUSTRIES,
  INDUSTRIES_TO_SURVEYS,
} from "@/utils/constants";

function App() {
  const [trainingCosts, setTrainingCosts] = useState("0");
  const [numberOfEmployees, setNumberOfEmployees] = useState("0");
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
          setNumberOfEmployees={setNumberOfEmployees}
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
                numberOfEmployees={numberOfEmployees}
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
      <Footer />
    </>
  );
}

export default App;
