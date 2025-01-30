// import { useReducer } from "react"

import Usememo from "./Usememo"

// import { useEffect, useState } from "react"
// import { useEffect, useState , useMemo } from "react"




const App=()=>{
  // const reducer = (state, action) => {
  //   switch (action) {
  //     case "red":
  //       state = "blue"
  //       return  state
  //     case "blue":
  //       state =  "green"
  //       return  state
  //     case "green":
  //       state =  "aqua"
  //       return state
  //     default:
  //       state = "red"
  //       return state
  //   }
  // }

  // const [myColor, dispatch] = useReducer(reducer, "red")


  // const [myadd, setMyAdd]=useState(0);
  // const [mysub, setMySub]=useState(100);
  // const Multi=()=>{
  //   console.log("**************")
  //   return myadd*10;
  // }


  // {/* Memoization

  // const [myadd, setMyAdd]=useState(0);
  // const [mysub, setMySub]=useState(100);
  // const Multi=useMemo(()=>{
  //   console.log("**************")
  //   return myadd*10;
  // }, [myadd])



  
  return (
    <>
     {/* <button onClick={() => dispatch(myColor)}>Change Color</button>
    <button onClick={() => dispatch(myColor)}>Change Color</button>
    <button onClick={() => dispatch(myColor)}>Change Color</button>
    <br /><br />
    <div style={{width:"200px",borderRadius:"50%",height:"200px", background:myColor}} ></div> */}



{/* Memoization  */}
{/* ismain output  main jo mlti vala funstion bar bar call ho raha hai iss e problem se bachne ke liye useMemo hook ka use kiya gaya   */} 
 {/* <h1>my Add:- {myadd} </h1>
<h1>my Add:- {myadd} </h1>
<h1>my Multiplication:- {Multi()} </h1>
<button onClick={()=>{setMyAdd(myadd+1)}} >Addition</button>
<button onClick={()=>{setMySub(mysub-1)}} >Subtraction</button> */}


{/* Memoization */}
    {/* <h1>my Add:- {myadd} </h1>
<h1>my Add:- {myadd} </h1>
<h1>my Multiplication:- {Multi} </h1>
<button onClick={()=>{setMyAdd(myadd+1)}} >Addition</button>
<button onClick={()=>{setMySub(mysub-1)}} >Subtraction</button> */}

 < Usememo/>
    </>
  )
}

export default App

