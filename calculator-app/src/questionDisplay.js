import React, { useState } from "react";
import { Button } from "react-bootstrap";
// import "../style.css";

const QuestionDisplay = ({ question, options, selected }) => {
  const [answer, setAnswer] = useState(options);
  return (
    <div className="questionDisplay">
      <div className="question">{question}</div>
      {/*
      conditional rendering 
      check if answer is not undefined, then render 
      */}
      {answer &&
        answer.map((text, index) => (
          <Button
            key={index}
            className="answerBtn"
            onClick={() => {
              setAnswer();
              selected(text);
            }}
          >
            {" "}
            {text}
          </Button>
        ))}
    </div>
  );
};

export default QuestionDisplay;
