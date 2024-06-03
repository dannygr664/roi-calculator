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
        <h1>ROI Calculator</h1>
        <section className="intro">
          <section className="intro-and-form">
            <p>
              This tool will calculate your estimated return on investment
              following Zschool training, using various metrics.
            </p>
            <p>
              Begin by selecting your course of interest, your company’s
              industry, and the number of employees you wish to enroll.
            </p>
            {/* <ROICalculator onCalculate={handleReturnValueCalculation} />
          {threeMonthReturnValue && (
            <div>
              <h2>Calculated Return (3 months): ${threeMonthReturnValue}</h2>
              <h2>
                Calculated Return (3 months – Annualized): $
                {threeMonthReturnValueAnnualized}
              </h2>
              <h2>Calculated Return (1 year): ${annualReturnValue}</h2>
            </div>
          )} */}
            <form>
              <div className="form-row">
                <div className="form-element">
                  <label htmlFor="course">Course</label>
                  <div className="custom-select">
                    <select id="course" name="course">
                      <option value="">Select</option>
                    </select>
                  </div>
                </div>

                <div className="form-element">
                  <label htmlFor="industry">Industry</label>
                  <div className="custom-select">
                    <select id="industry" name="industry">
                      <option value="">Select</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="form-element">
                <label htmlFor="employees">Number of Employees</label>
                <input
                  type="number"
                  id="employees"
                  name="employees"
                  value="0"
                />
              </div>
            </form>
          </section>

          <aside>
            <img
              src="images/roi-intro.jpg"
              alt="ROI Calculator Intro"
              className="intro-image"
            />
          </aside>
        </section>
      </main>
    </>
  );
}

export default App;
