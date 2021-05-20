import React from "react";
import OutputScreenRow from "./outputScreenRow.js";
// this screen holds two rows, the input and the answer
const OutputScreen = () => {
  return (
    <div className="screen">
      <OutputScreenRow />
      <OutputScreenRow />
    </div>
  );
};

export default OutputScreen;
