import React, { useEffect, useState } from "react";

const App = () => {
  /**
   *  Variation 2:
   *  Runs on only first render and when component is removed from the DOM
   */

  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    alert("This would run every time the component renders");

    return () => {
      console.log("Component will unmount");
    };
  }, []);

  useEffect(() => {
    console.log("Component mounted");
  }, []); // empty array means no dependencies, so it will run only once on first render

  return (
    <div>
      <button onClick={handleCount}>Click me!</button>
      <p>Count: {count}</p>
    </div>
  );
};

export default App;
