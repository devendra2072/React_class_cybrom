import { useSelector,useDispatch } from "react-redux"
import {ChangeColor } from "./CounterSlice";
import { useState } from "react";
const App=()=>{
  const [val,setval]=useState(" ");
  const myval=useSelector(state=>state.mycolor.color);
  const dispath=useDispatch();
  return (
    <>
      <h1>Welcome!!!</h1>
      Enter Color:- <input type="text" value={val} onChange={(e)=>{setval(e.target.value)}}/>
      <button onClick={()=>{dispath(ChangeColor(val))}}>Increment</button>
      
      
    </>
  )
}

export default App
