// import { useState,useMemo } from "react";

// const App = () => {
//   const [count, setCount] = useState(0);
//   const [mysub, setMySub] = useState(100);
//   const multiplication=useMemo(()=>{
//     console.log("Multiplication");
//     return count*2;
//   },[count]);
//   return (
//     <>
//       <h1>Welcome to useMemo Hook App</h1>
//       <h2>Multiplication: {multiplication}</h2>
//       <button onClick={()=>{setCount(count+1)}}>Addition</button>
//       <h1>Addition :{count}</h1>
//       <button onClick={()=>{setMySub(mysub-1)}}>Subtraction</button>
//       <h1>Subtraction :{mysub}</h1>
//     </>
//   );
// };
// export default App



import { useState,useMemo } from "react";

const App = () => {
  const [num, setNum] = useState(0);
  const [subject, setSubject] = useState("");
  const myVal = useMemo(()=>{
    for(var i=0; i<1000000000; i++){}
    return num*2;
  }, [num] );
  
  return (
    <>
      select number : <input type="number" value={num} onChange={(e)=>{setNum(parseInt(e.target.value))}} />
      Enter subject : <input type="text" value={subject} onChange={(e)=>{setSubject(e.target.value)}} />
      <br />
      my Counting : {myVal}
    </>
  );
};
export default App