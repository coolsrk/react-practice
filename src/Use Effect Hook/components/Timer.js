import React, { useEffect } from "react";
import { useState } from "react";

const Timer = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => {
      console.log("Component will unmount");
      clearInterval(interval);
    };
  }, []);

  return <h1>Count is ${count}</h1>;
};

export default Timer;
