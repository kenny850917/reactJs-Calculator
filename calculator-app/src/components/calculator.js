import React from "react";

import OutputScreen from "./outputScreen.js";
import Button from "./button.js";
import BigButton from "./bigButton.js";
import { Container } from "react-bootstrap";

class Calculator extends React.Component {
  constructor() {
    super();
    // set our default state
    this.state = {
      input: "",
      answer: "",
    };
    //bind (this button's component) to handleClick when click events happened
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (
      //create calculator framework
      <>
        <Container>
          <div className="frame">
            <div className="mainCalc">
              <OutputScreen
                answer={this.state.answer}
                input={this.state.input}
              />
              <div className="button-row">
                <Button
                  className="calcButton"
                  label={"7"}
                  handleClick={this.handleClick}
                />
                <Button label={"8"} handleClick={this.handleClick} />
                <Button label={"9"} handleClick={this.handleClick} />
                <Button label={"*"} handleClick={this.handleClick} />
              </div>
              <div className="button-row">
                <Button label={"4"} handleClick={this.handleClick} />
                <Button label={"5"} handleClick={this.handleClick} />
                <Button label={"6"} handleClick={this.handleClick} />
                <Button label={"-"} handleClick={this.handleClick} />
              </div>
              <div className="button-row">
                <Button label={"1"} handleClick={this.handleClick} />
                <Button label={"2"} handleClick={this.handleClick} />
                <Button label={"3"} handleClick={this.handleClick} />
                <Button label={"+"} handleClick={this.handleClick} />
              </div>
              <div className="button-row">
                <BigButton
                  id="zero"
                  label={"0"}
                  handleClick={this.handleClick}
                />
                {/* <Button id="zero" label={"0"} handleClick={this.handleClick} /> */}
                <Button label={"."} handleClick={this.handleClick} />
                <Button label={"/"} handleClick={this.handleClick} />
              </div>
              <div className="button-row">
                <Button label={"Clear"} handleClick={this.handleClick} />
                <Button label={"Delete"} handleClick={this.handleClick} />
                <BigButton label={"="} handleClick={this.handleClick} />
              </div>
            </div>
          </div>
        </Container>
      </>
    );
  }

  //method that handles the click events from our buttons
  handleClick(event) {
    // get the value from the target element (button)
    const value = event.target.value;

    switch (value) {
      case "=": {
        //if the case is equal sign, eval the input and convert answer

        if (this.state.input !== "") {
          //if has input
          var ans = "";
          try {
            ans = eval(this.state.input);
          } catch (err) {
            this.setState({ answer: "Math Error" });
          }
          if (ans === undefined) this.setState({ answer: "Math Error" });
          // update answer in our state.
          else this.setState({ answer: ans, input: "" });
          break;
        }
      }
      case "Clear": {
        // if the case is the clear sign, clean input and answer
        this.setState({ input: "", answer: "" });
        break;
      }

      case "Delete": {
        //if case is delete sign, remove inputs last index
        var str = this.state.input;
        str = str.substr(0, str.length - 1);
        this.setState({ input: str });
        break;
      }

      default: {
        // for every other commmands, update the answer in the state
        this.setState({ input: (this.state.input += value) });
        break;
      }
    }
  }
}

export default Calculator;
