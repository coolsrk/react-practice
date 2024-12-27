import React, { useEffect, useState } from "react";

const App = () => {
  /**
   *  Variation 3:
   *  Runs every time when state variable gets updated
   */

  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    alert("This would run every time the count's value changes");
  }, [count]); // runs every time count changes

  return (
    <div>
      <button onClick={handleCount}>Click me!</button>
      <p>Count: {count}</p>
    </div>
  );
};

export default App;
