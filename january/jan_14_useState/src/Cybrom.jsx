import { useState } from "react";  // named exports hai 

//import  useState from "react";  // default exports hai 
// defination = useState 

const Cybrom = () => {
  
  // set value is used to overridr the value of the state after an event is being triggered
 //  it changes the value as soon as the button is triggered and it changes the state
//  val = variable  setVal=method /update state hoti 
  // const [val, setVal]=useState("devendra");    //set value is 
  // const myVal=()=>{
  //   setVal("abhi");
  // }

  // read state 
  // const [color,setColor]=useState("red");

  // update state 
  // const [color,setColor]=useState("red");


  // const [color, setColor] = useState("red");  // use state is used to store the value of the state
  // const [cnt, setCnt]=useState(0);




  return (
    <>
    {/* <h1>welcome to cybrom:{val}</h1>
    <button onClick={myVal}>Click me</button> */}

    {/* read state */}

{/* <h1>my feve color:{color}</h1> */}

    {/* update state */}
    {/* <h1>welcome to cybrom:{color}</h1>
    <button type="button" onClick={()=>setColor("blue")}>blue</button> */}



    {/* <h1 style={{color:color}}>welcome to cybrom:</h1>
    <button onClick={()=>{setColor("green")}}>Click me</button>
    <button onClick={()=>{setColor("red")}}>Click me</button>
    <button onClick={()=>{setColor("blue")}}>Click me</button>
    // <button onClick={()=>{setColor("violet")}}>Click me</button> */}


    {/* // <h1> my counter:{cnt}</h1>
    // <button onClick={()=>{setCnt(cnt+1)}}>Click incriment</button>
    // <button onClick={()=>{setCnt(cnt-1)}}>Click decriment</button> */}


    </>
  );
};
export default Cybrom;
