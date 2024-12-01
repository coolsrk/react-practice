import React from "react";
import "../css/Card.css";

const Card = (props) => {
  return (
    <div>
      <input type="text" onChange={(e) => props.setName(e.target.value)} />
      <h1>
        This is the name from {props.title}: {props.name}
      </h1>
    </div>
  );
};

export default Card;
