import React, {useEffect, useState, useRef} from 'react'

const Example_1 = () => {
  const [count, setCount] = useState(0)  
    let renderCount = useRef(0);

    const handleCount = () => {
        setCount(count + 1);
    };
    
    useEffect(() => {
        console.log('I render every time, count ', count);
        console.log('Render count: ', renderCount.current++);   
    });
  return (
    <div>
        <button onClick={handleCount}>Increment Count</button>
        <br></br>
        <h4>Count is: {count}</h4>
    </div>
  )
}

export default Example_1;   