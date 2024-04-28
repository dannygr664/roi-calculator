import { useState } from "react";
import "./App.css";
import ROICalculator from "./components/ROICalculator.jsx";

function App() {
  const [returnValue, setReturnValue] = useState("");

  const handleReturnValueCalculation = (calculatedReturnValue) => {
    setReturnValue(calculatedReturnValue);
  };

  return (
    <>
      <header className="App-header">
        <img src="images/zschool-logo.png" alt="Zschool logo"></img>
        <h1>Zschool ROI Calculator</h1>
      </header>
      <main>
        <ROICalculator onCalculate={handleReturnValueCalculation} />
        {returnValue && (
          <div>
            <h2>Calculated Return: ${returnValue}</h2>
          </div>
        )}
      </main>
    </>
  );
}

export default App;
