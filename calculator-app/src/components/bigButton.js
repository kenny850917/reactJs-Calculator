import React from "react";
const BigButton = (props) => {
  return (
    <input
      type="button"
      className="bigButton"
      value={props.label}
      onClick={props.handleClick}
    />
  );
};
export default BigButton;
