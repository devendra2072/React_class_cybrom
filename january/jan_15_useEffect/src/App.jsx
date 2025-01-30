import Cybrom from "./Cybrom";
// import './css/Style.css'

// import { useState, useEffect } from "react";
const App = () => {
  // const [count, setCount]= useState(0);
  // const [multi, setMulti]= useState(0);

  // useEffect(() =>{
  //   setTimeout(()=>{
  //     setCount(count+1);
  //   },1000);
  // });
  //  1 bar hi chelnga
  // useEffect(() =>{
  //   setTimeout(()=>{
  //     setCount(count+1);
  //   },1000);
  // },[]);

  // useEffect(() =>{
  //   setMulti(count*2);
  // },[count]);
  return (
    <>
      {/* <h1 >we are :{count}</h1> */}

      {/* <h2>multiplication: {multi}</h2> */}

      {/* <button onClick={()=>{setCount(count+1)}}>Click here!</button> */}
      {/* 1st iteration */}

      <Cybrom />
    </>
  );
};

export default App;
