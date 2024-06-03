import { useState } from "react";
import "./App.css";
import ROICalculator from "./components/ROICalculator.jsx";

function App() {
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const [threeMonthReturnValue, setThreeMonthReturnValue] = useState("");
  const [threeMonthReturnValueAnnualized, setThreeMonthReturnValueAnnualized] =
    useState("");
  const [annualReturnValue, setAnnualReturnValue] = useState("");

  const handleReturnValueCalculation = (
    calculatedThreeMonthReturnValue,
    calculatedThreeMonthReturnValueAnnualized,
    calculatedAnnualReturnValue
  ) => {
    setThreeMonthReturnValue(numberWithCommas(calculatedThreeMonthReturnValue));
    setThreeMonthReturnValueAnnualized(
      numberWithCommas(calculatedThreeMonthReturnValueAnnualized)
    );
    setAnnualReturnValue(numberWithCommas(calculatedAnnualReturnValue));
  };

  return (
    <>
      <header className="App-header">
        <img id="logo" src="images/zschool-logo.png" alt="Zschool logo"></img>
      </header>
      <main>
        <div id="intro">
          <h1>ROI Calculator</h1>
          <ROICalculator onCalculate={handleReturnValueCalculation} />
          {threeMonthReturnValue && (
            <div>
              <h2>Calculated Return (3 months): ${threeMonthReturnValue}</h2>
              <h2>
                Calculated Return (3 months – Annualized): $
                {threeMonthReturnValueAnnualized}
              </h2>
              <h2>Calculated Return (1 year): ${annualReturnValue}</h2>
            </div>
          )}
        </div>
      </main>
    </>
  );
}

export default App;
