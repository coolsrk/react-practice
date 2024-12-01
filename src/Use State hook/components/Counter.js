import React, { useState } from 'react'
import '../css/Counter.css';

const Counter = () => {
  /** [variable name, function - to set variable value] = useState(initial value) */  
  const [count, setCount] = useState(0); // initial value is 0

  return (
    <div className='box'>
        <p>You clicked button {count} times</p>
        <button className='btn' onClick={() => setCount(count + 1)}>Click Me!</button>
    </div>
  );
}

export default Counter;