import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "../redux/slices/counterSlice";

const App = () => {
  const [incrementAmount, setIncrementAmount] = useState(0);

  // useSelector() is a hook that allows you to extract data from the Redux store state.
  const counter = useSelector((state) => state.counter.value);
  // useDispatch() is a hook that allows you to dispatch actions to the Redux store.
  const dispatch = useDispatch();

  const handlePlus = () => {
    dispatch(increment());
  };

  const handleMinus = () => {
    dispatch(decrement());
  };

  const handleReset = () => {
    dispatch(reset());
  };

  const handleIncrementByAmount = () => {
    dispatch(incrementByAmount(incrementAmount));
  };

  return (
    <div>
      <button onClick={handlePlus}>+</button>
      <br />
      <span>Count: {counter}</span>
      <br />
      <button onClick={handleMinus}>-</button>
      <br />
      <button onClick={handleReset}>Reset</button>
      <br />
      <input
        type="number"
        onChange={(e) => {
          setIncrementAmount(e.target.value);
        }}
      />
      <br />
      <button onClick={handleIncrementByAmount}>Increment By Amount</button>
    </div>
  );
};

export default App;
