import React, { useState, useMemo } from 'react';

const Usememo = () => {
    const [count, setCount] = useState(0);
    const [inputValue, setInputValue] = useState('');

    const expensiveCalculation = (num) => {
        console.log('Calculating...');
        for (let i = 0; i < 1000000000; i++) {
            num += 1;
        }
        return num;
    };

    const memoizedValue = useMemo(() => expensiveCalculation(count), [count]);

    return (
        <>
        <div>
            <h1>useMemo Hook Example</h1>
            <input 
                type="text" 
                value={inputValue} 
                onChange={(e) => setInputValue(e.target.value)} 
            />
            <h2>Input Value: {inputValue}</h2>
            <h2>Count: {count}</h2>
            <h2>Expensive Calculation: {memoizedValue}</h2>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
        </>
    );
};

export default Usememo;