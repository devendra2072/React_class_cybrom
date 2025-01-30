
// import { useRef } from 'react'

import { useReducer } from 'react'
const App=()=>{
  // const myRef = useRef("bpl")  // myRef ={current:"bpl"}
  // //console.log(myRef.current)
  // const changeColor=()=>{
  //   myRef.current.style.color="red"
  //   myRef.current.style.fontSize="24px"
  //   myRef.current.style.backgroundColor="blue"
  //   myRef.current.innerHTML="this is"
  // }

  // const myRef = useRef();
  // const myFont=()=>{
  //   myRef.current.style.fontSize="24px"
  // }
  //  const myColor=()=>{
  //   // document.body.style.backgroundColor="red"
  //   myRef.current.style.color="red"
  //   myRef.current.style.fontSize="54px"

  //  }
  //  const myBackground=()=>{
  //   myRef.current.style.backgroundColor="dark"
  //   myRef.current.style.borderRadius="50%"
  //   myRef.current.style.height="200px"
  //   myRef.current.style.width="200px"
  //   myRef.current.style.padding="20px"
  //   myRef.current.style.margin="20px"
  //   myRef.current.style.border="10px solid aqua"
  //   myRef.current.style.textAlign="center"
  //  }



  // usereduser hook 
const initialState=0;
const reducer=(state,action)=>{
  switch(action){
    case 'increment':
      return state+1;
    case 'decrement':                                      //case 'reset':  //return initialState;
      return state-1;
    default:
      return state;
  }
}

const [count,dispatch]=useReducer(reducer,initialState);

  return (
    <>
    {/* <h1 ref={myRef} style={{color:'red'}} >devendra kurve</h1>
    <h2>lkjhgfddvbnmlkjhbvdfghnikjn </h2>
    <button onClick={changeColor}>change color</button> */}

{/* <button onClick={myFont}>Font</button>
<button onClick={myColor}>myColor</button>
<button onClick={myBackground}>myBackground</button>
<div ref={myRef}>this is div</div> */}

{/* usereduser hoook   */}
<h1> this is  {count}</h1>
<button onClick={()=>{dispatch('increment')}}>increment</button>
<button onClick={()=>{dispatch('decrement')}}>decrement</button>


    </>
  )
}

export default App
