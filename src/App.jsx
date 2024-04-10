import { useState } from "react";
import "./App.css";
import ROICalculator from "./components/ROICalculator.jsx";

function App() {
  const [roi, setRoi] = useState("");

  const handleROICalculation = (calculatedROI) => {
    setRoi(calculatedROI);
  };

  return (
    <>
      <header className="App-header">
        <h1>Zschool ROI Calculator</h1>
      </header>
      <main>
        <ROICalculator onCalculate={handleROICalculation} />
        {roi && (
          <div>
            <h2>Calculated ROI: {roi}%</h2>
          </div>
        )}
      </main>
    </>
  );
}

export default App;
