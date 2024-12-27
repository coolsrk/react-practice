import React, { useEffect, useState } from "react";

const App = () => {
  /**
   *  Variation 4:
   *  Runs for multiple state variables
   */

  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);

  const handleCount = () => {
    setCount(count + 1);
  };

  const handleTotal = () => {
    setTotal(total + 1);
  };

  useEffect(() => {
    alert("This would runs whenever count or total changes");
  }, [count, total]);

  return (
    <div>
      <button onClick={handleCount}>Update Count</button>
      <p>Count: {count}</p>

      <button onClick={handleTotal}>Update Total</button>
      <p>Total: {total}</p>
    </div>
  );
};

export default App;
