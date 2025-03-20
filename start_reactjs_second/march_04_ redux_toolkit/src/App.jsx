import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./CounterSlice";
const App=()=>{
  const myval = useSelector(state=>state.mycounter.count);
  const dispatch = useDispatch();
  return(
    <>
    <h1>Welcome to App</h1>
    <button onClick={()=>{dispatch(increment())}}>Incriment</button>
    <h2>Count : {myval}</h2>
    <button onClick={()=>{dispatch(decrement())}}>Decrement</button>
    </>
  )
}


export default App;