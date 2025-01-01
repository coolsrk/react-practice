import React, {useState, useRef, useEffect} from "react";

const Example_2 = () => {
  const [count, setCount] = useState(0);
  let renderCount = useRef(0);
  let btnRef = useRef();

  const handleCount = () => {
    setCount(count + 1);
  };

  const changeColor = () => {
    btnRef.current.style.backgroundColor = 'red';
  };

  useEffect(() => {
    console.log("I render every time, count ", count);
    console.log("Render count: ", renderCount.current++);
  });
  return (
    <div>
      <button 
      ref = {btnRef}
      onClick={handleCount}>Increment Count</button>
      <br></br>
      <h4>Count is: {count}</h4>
      <br></br>
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
};

export default Example_2;
