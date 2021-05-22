import React, { useState } from "react";
import { Button, Card, ButtonGroup } from "react-bootstrap";
// import "../style.css";

const QuestionDisplay = ({ question, options, selected }) => {
  const [answer, setAnswer] = useState(options);
  return (
    <div className="questionDisplay">
      <Card>
        <Card.Text>
          <div className="question">{question}</div>
        </Card.Text>
        {/*
      conditional rendering 
      check if answer is not undefined, then render 
    */}
        {/* <Card.Body></Card.Body> */}
        <Card.Body>
          {answer &&
            answer.map((text, index) => (
              <ButtonGroup>
                <Button
                  variant="secondary"
                  key={index}
                  className="answerBtn"
                  onClick={() => {
                    setAnswer();
                    selected(text);
                  }}
                >
                  {" "}
                  {text}
                </Button>{" "}
              </ButtonGroup>
            ))}
        </Card.Body>
      </Card>
    </div>
  );
};

export default QuestionDisplay;
