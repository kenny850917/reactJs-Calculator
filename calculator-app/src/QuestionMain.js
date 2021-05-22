import React, { Component } from "react";
import questionAPI from "./components/questionBank";
import QuestionDisplay from "./questionDisplay";
import { Button, ProgressBar } from "react-bootstrap";
// import "./style.css";
class QuestionMain extends Component {
  constructor() {
    super();
    this.state = {
      questionBank: [],
      score: 0,
      responses: 0,
    };
  }

  //getters to get questions from question bank

  getQuestions = () => {
    questionAPI().then((question) => {
      this.setState({ questionBank: question });
    });
  };
  // setters to set state to default when playAgain is called
  playAgain = () => {
    this.getQuestions();
    this.setState({ score: 0, responses: 0 });
  };

  //functions to calculate scores
  computeAnswer = (answer, correctAnswer) => {
    this.setState({
      // responses increment when clicked and not greater than 5
      responses:
        this.state.responses < 5
          ? this.state.responses + 1
          : this.state.responses == 5,
    });
    if (answer === correctAnswer) {
      this.setState({
        score: this.state.score + 1,
      });
    }
  };
  //componentDidMount function and get question
  componentDidMount() {
    this.getQuestions();
  }
  //render all
  render() {
    return (
      <div className="container">
        <div className="title">QuizOn</div>

        {this.state.questionBank.length > 0 &&
          this.state.responses < 5 &&
          this.state.questionBank.map(
            ({ question, answers, correct, questionId }) => (
              <QuestionDisplay
                question={question}
                options={answers}
                key={questionId}
                selected={(answer) => this.computeAnswer(answer, correct)}
              />
            )
          )}
        <div>
          {this.state.responses === 5 ? (
            // <Result score={this.state.score} playAgain={this.playAgain} />
            //here
            <div className="score-board">
              <div className="score">
                Your score is {this.state.score} / {this.state.responses}
                correct answer ! ! !
              </div>
              <Button className="playBtn" onClick={this.playAgain}>
                Play Again
              </Button>
            </div>
          ) : (
            console.log(this.state.score, this.state.responses)
          )}
        </div>
        <div>
          <ProgressBar
            striped
            animated
            variant="success"
            now={this.state.responses * 20}
          />
        </div>
      </div>
    );
  }
}

export default QuestionMain;
