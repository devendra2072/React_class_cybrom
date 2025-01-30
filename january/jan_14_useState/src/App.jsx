// import Cybrom from "./Cybrom";
import './css/Style.css'

import { useState, useEffect } from "react";
const App = () => {
  const [cnt, setCnt]= useState(0);

  useEffect(() =>{
    setTimeout(()=>{
      setCnt(cnt+1);
    },1000);
  });
//  1 bar hi chelnga 
  // useEffect(() =>{
  //   setTimeout(()=>{
  //     setCnt(cnt+1);
  //   },1000);
  // },[]);
  return (
    <>
      
<h1 className="hed">we are :{cnt}</h1>
 {/* 1st iteration */}
{/* <h1 className="hed">we are :{cnt}</h1> */}
      {/* <Cybrom /> */}
    </>
  );
};

export default App;
