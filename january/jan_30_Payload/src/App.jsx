import { useSelector, useDispatch } from "react-redux";
import { colorChange } from "./colorSlice";
import { useState } from "react";

const App = () => {
  const color = useSelector(state=> state.myColor.color);
  const dispatch = useDispatch();
  const [clr, setClr]=useState("")
  return (
    <>
      {/* redux toolkit  */}
      {/* instsll npm i redux toolkit search  */}
      {/* npm install @reduxjs/toolkit */}
      {/* npm install react-redux */}

      

      <div style={{width:"300px", height:"300px", backgroundColor:color}} ></div>
      my input : <input type="text"  value={clr} onChange={(e)=>{setClr(e.target.value)}}/>
      <button onClick={()=>dispatch(colorChange(clr))}>color Change</button>
    </>
  );
};

export default App;
