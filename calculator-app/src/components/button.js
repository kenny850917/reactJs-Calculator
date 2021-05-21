import React from "react";

// functional component Button.
const Button = (props) => {
  return (
    <input type="button" value={props.label} onClick={props.handleClick} />
  );
};

export default Button;
