import React from "react";
import Card from "./Card";
import "../css/App.css";
import { useState } from "react";

const App = () => {
  /**
   *  Lifting state up is nothing but
   *  moving the state from a child component to a parent component.
   *  This is done to share the state between multiple components.
   *  Normally we can pass state from parent to child component using props.
   *  But if we have multiple child components that need to share the same state,
   *  then we need to lift the state up to the parent component.
   *  Means we need to move the state to the parent component and pass it as props to the child components.
   *
   *  So, if we pass state variable and setState function as props to the child components,
   *  we can update the state from the child component and which will reflect in all the child components.
   *  */

  const [name, setName] = useState(""); // initially empty

  return (
    <div className="card-container">
      <Card title = "Card1" name={name} setName={setName} />
      <Card title = "Card2" name={name} setName={setName} />
    </div>
  );
};

export default App;
