import React, { useEffect, useState } from "react";

const App = () => {
  /**
   * Syntax:
   * useEffect(() => {
   *   /code to run on component mount/
   *   ....
   *  return () => {}; // code to run on component unmount,
   *                   .// means when component is removed from the DOM
   *
   * },[comma separated dependencies]); // dependencies is an array of variables that
   *                   .// useEffect should watch for changes.
   *                   .// whenever any of the variables in the array changes,
   *                   .// the code inside useEffect will run again.
   */

  /**
   *  Variation 1:
   *  Runs on every render, just before the component is updated
   */

  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    alert("This would run every time the component renders");
  });

  return (
    <div>
      <button onClick={handleCount}>Click me!</button>
      <p>Count: {count}</p>
    </div>
  );
};

export default App;
