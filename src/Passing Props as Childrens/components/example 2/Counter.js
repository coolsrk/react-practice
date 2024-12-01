import React, { useState } from 'react'
import '../../css/example 2/Counter.css';
import Button from './Button';

const Counter = () => {
  /** [variable name, function - to set variable value] = useState(initial value) */  
  const [count, setCount] = useState(0); // initial value is 0

  function handleClick() {
    console.log('Inside handleClick');
    setCount(count + 1);
  }

  return (
    <div className='box'>
        <p>You clicked button {count} times</p>
        <Button incrementCount = {handleClick}/>
    </div>
  );
}

export default Counter;
