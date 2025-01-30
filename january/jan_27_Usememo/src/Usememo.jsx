// import React, { useState, useMemo } from 'react';
import React, { useState, useMemo } from 'react';
const Usememo = () => {
    // const [count, setCount] = useState(0);
    // const [inputValue, setInputValue] = useState('');
    // const expensiveCalculation = (num) => {
    //     console.log('Calculating...');
    //     for (let i = 0; i < 1000000000; i++) {
    //         num += 1;
    //     }
    //     return num;
    // };
    // const memoizedValue = useMemo(() => expensiveCalculation(count), [count]);

    // 2 example 
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");
    const thousendNumber = useMemo((num)=>{
        return expansiveFunction(count)
    },[count])
    return (
        <>
            {/* <h1>useMemo Hook Example</h1>
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
            <h2>Input Value: {inputValue}</h2>
            <h2>Count: {count}</h2>
            <h2>Expensive Calculation: {memoizedValue}</h2>
            <button onClick={() => setCount(count + 1)}>Increment</button> */}
            {/* 2 example  */}
            <input type="number" value={count} onChange={(e)=>setCount(parseInt(e.target.value))}/>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
            <h1>{thousendNumber}</h1>
        </>
    );
};
export default Usememo;
const expansiveFunction = (num) => {
    console.log('Calculating...');
    for (let i = 0; i < 1000000000; i++) {}
    return num;
}