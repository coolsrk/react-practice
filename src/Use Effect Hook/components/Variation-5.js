import React, { useEffect, useState } from "react";

const App = () => {
  /**
   *  Variation 5:
   *  Should call clean up function when component is unmounted.
   *  It calls the clean up function when the component is removed from the DOM.
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

    return () => {
        alert("This would run when the component is unmounted");
    };
  }, [count]);

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
