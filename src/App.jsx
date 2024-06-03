import Header from "./components/Header";
import Intro from "./components/Intro";
import Divider from "./components/Divider";
import TrainingCosts from "./components/TrainingCosts";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <section className="content">
          <h1>ROI Calculator</h1>
          <Intro />
        </section>
        <Divider />
        <section className="content">
          <TrainingCosts />
        </section>
        <Divider />
      </main>
    </>
  );
}

export default App;
