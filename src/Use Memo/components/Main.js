import React, {useMemo, useState} from 'react'

const Main = () => {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const expensiveOperation = (num) => {
    for(let i=0; i< 1000000000; i++){}
    return num*2;
  };

  /**
   * Note:- This would not cache result for all incoming previous values of inputValue
   * It would only cache the result for the LAST value of inputValue.
   * Means if I give 3 as input, it would cache the result for 3 only.
   * If I give 4 as input, it would cache the result for 4 only and removes result for 3.
   */
  const doubleCount = useMemo(() => expensiveOperation(inputValue), [inputValue]);

  return (
    <div>
      <button onClick={incrementCount}>Increment Count</button>
      <br/>
      <p>Count is {count}</p>
      <br></br>
      <div>Double count is {doubleCount}</div>
      <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
    </div>
  )
}

export default Main