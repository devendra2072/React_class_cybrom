import { useSelector, useDispatch } from "react-redux";
import { changeColor } from "./ColorSlice";
import { useState } from "react";
const App=()=>{
  const [val, setInterval] = useState(""); 
  const myclr = useSelector((state)=>state.mycolor.color);
  const dispatch = useDispatch();
  return(
    <>
    <h1>Welcome to App</h1>
    Enter Color : <input type="text" value={val} onChange={(e)=>{setInterval(e.target.value)}} />
    <button onClick={()=>{dispatch(changeColor(val))}}>Change Color to Red</button>
    <div style={{width:"300px", height:"300px", backgroundColor:myclr}}></div>
    </>
  )
}


export default App;