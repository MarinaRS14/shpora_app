import React, { useState } from 'react';
import { Button, Space } from 'antd';


function Counter() {
    let [count, setCount] = useState(0);
    let increment = () => {
        return setCount(prevCount => prevCount+1)
    };
    let decrement = () => {
        return setCount(prevCount => prevCount-1)
    };
  return (
    <div>
        <p style={{fontSize: "1.5rem", paddingLeft: "20px"}}>{count}</p>
        <Space>
            <Button type="primary" onClick={increment}>Plus</Button>
            <Button type="primary" onClick={decrement}>Minus</Button>
        </Space>
        <div className='code'>
        <pre><code>{`function Counter() {
    let [count, setCount] = useState(0);
    let increment = () => {
        return setCount(prevCount => prevCount+1)
    };
    let decrement = () => {
        return setCount(prevCount => prevCount-1)
    };
  return (
    <div>
        <p>{count}</p>
        <button onClick={increment}>Plus</button>
        <button onClick={decrement}>Minus</button>
    </div>
  );
}`}</code></pre>
    </div>
    </div>
  );
}

export default Counter;
