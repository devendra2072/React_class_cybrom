import React from "react";
import { useState } from "react";


const About = () => {
    const [cnt, setCnt]=useState(0);
  return (
    <>
   <h1> my counter:{cnt}</h1>
     <button onClick={()=>{setCnt(cnt+10)}}>Click incriment</button>
    <button onClick={()=>{setCnt(cnt-10)}}>Click decriment</button>
    </>
  );
};

export default About;
