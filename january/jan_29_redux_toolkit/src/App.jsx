import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./counterSlice";
const App = () => {
  const ans = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <>
      {/* redux toolkit  */}
      {/* instsll npm i redux toolkit search  */}
      {/* npm install @reduxjs/toolkit */}
      {/* npm install react-redux */}

      <h1>welcome to counter app</h1>
      <button onClick={()=>{dispatch(increment())}} >incriment</button>
      <h1> {ans} </h1>
      <button onClick={()=>{dispatch(decrement())}} >decriment</button>
    </>
  );
};

export default App;
