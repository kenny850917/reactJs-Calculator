import "./App.css";
import React from "react";
import Calculator from "./components/calculator.js";
import QuestionMain from "./QuestionMain.js";
import "./index.css";

function App() {
  return (
    <>
      <div className="split left">
        <QuestionMain />
      </div>
      <div className="split right">
        <Calculator />
      </div>
    </>
  );
}

export default App;
