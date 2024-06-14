import { useState } from "react";

import Header from "./components/Header";
import Wave from "./components/Wave";
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
  const [selectedWageType, setSelectedWageType] = useState("");
  const [averageWage, setAverageWage] = useState("0");
  const [selectedRoiMetric, setSelectedRoiMetric] = useState("");

  const [errors, setErrors] = useState({});

  const getValidationErrors = () => {
    const newErrors = {};
    if (!selectedCreditOption)
      newErrors.selectedCreditOption = "Please select a credit option";
    if (
      isNaN(parseInt(numberOfEmployees, 10)) ||
      parseInt(numberOfEmployees, 10) < 0
    )
      newErrors.numberOfEmployees = "Please enter a valid number of employees";
    if (isNaN(parseFloat(cost)) || parseFloat(cost) < 0)
      newErrors.cost = "Please enter a valid cost, without commas";
    if (!selectedIndustry)
      newErrors.selectedIndustry = "Please select an industry";
    if (!selectedWageType)
      newErrors.selectedWageType = "Please select a wage type";
    if (isNaN(parseFloat(averageWage)) || parseFloat(averageWage) < 0)
      newErrors.averageWage = "Please enter a valid wage, without commas";

    return newErrors;
  };

  const areInputsValid = () => {
    const validationErrors = getValidationErrors();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return false;
    } else {
      setErrors({});
      return true;
    }
  };

  const calculateTrainingCosts = () => {
    if (!areInputsValid()) {
      return 0;
    }

    const costOfCourse = parseFloat(cost);
    const hoursToCompleteCourse =
      CREDIT_OPTIONS_TO_METADATA[selectedCreditOption].hoursToComplete;

    return (
      (costOfCourse + averageWage * hoursToCompleteCourse) *
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
        <TrainingCosts
          selectedCreditOption={selectedCreditOption}
          setSelectedCreditOption={setSelectedCreditOption}
          numberOfEmployees={numberOfEmployees}
          setNumberOfEmployees={setNumberOfEmployees}
          cost={cost}
          setCost={setCost}
          selectedWageType={selectedWageType}
          setSelectedWageType={setSelectedWageType}
          averageWage={averageWage}
          setAverageWage={setAverageWage}
          errors={errors}
          calculateTrainingCosts={calculateTrainingCosts}
        />
      ),
    },
    {
      title: "ROI Calculation",
      content: (
        <ROICalculationPanel
          name="ROI Calculation"
          tag="roi-calculation"
          selectedRoiMetric={selectedRoiMetric}
          setSelectedRoiMetric={setSelectedRoiMetric}
          calculateROI={calculateTraineeSatisfaction}
          calculateTrainingCosts={calculateTrainingCosts}
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
