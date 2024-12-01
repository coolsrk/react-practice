import React from "react";

const Button = (props) => {
  return (
    <button className="btn" onClick={props.incrementCount}>
      Click Me!
    </button>
  );
};

export default Button;
