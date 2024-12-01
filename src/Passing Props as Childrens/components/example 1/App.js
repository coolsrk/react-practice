import React from "react";
import Card from "./Card";

const App = () => {
  return (
    <div>
      <Card>
        <h1>Hello Shreyas</h1>
        <p>Welcome to the show!</p>
      </Card>

      <Card children = "I am children from props">
      </Card>
    </div>
  );
};

export default App;
