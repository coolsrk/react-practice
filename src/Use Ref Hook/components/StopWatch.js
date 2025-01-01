import React, {useState, useRef} from "react";

const StopWatch = () => {
  const [currTime, setCurrTime] = useState(0);
  const timer = useRef(null);

  const startTimer = () => {
    timer.current = setInterval(() => {
      setCurrTime((currTime) => currTime + 1);
    }, 1000);
  };

  const stopTimer = () => {
    timer.current && clearInterval(timer.current);
  };

  const resetTimer = () => {
    timer.current && clearInterval(timer.current);
    setCurrTime(0);
  };

  return (
    <div>
      <h1>Stopwatch: {currTime} seconds</h1>

      <button onClick={startTimer}>Start</button>
      <br />
      <button onClick={stopTimer}>Stop</button>
      <br />
      <button onClick={resetTimer}>Reset</button>
      <br />
    </div>
  );
};

export default StopWatch;
