import { useSelector, useDispatch } from "react-redux";
import { addTask } from "./todoSlice";
import { useState } from "react";
const App=()=>{
  const [txtval, setTxtVal] = useState(""); 
  const dispatch = useDispatch();
  const mytask = useSelector((state)=>state.mytodo.task);
  console.log(mytask);
  let sno=0;
  const ans=mytask.map((key)=>{
    sno++;
    return(
      <>
      <tr>
      <td>{sno}</td>
      <td>{key.work}</td>
      </tr>
      </>
    )
  })
  return(
    <>
    <h1>Welcome to my ToDo App</h1>
    Enter your task : <input type="text" value={txtval} onChange={(e)=>{setTxtVal(e.target.value)}}/>
    <button onClick={()=>{dispatch(addTask({work:txtval}))}}>Add Task</button>
    <hr />
    
    <table border="1">
    <tr>
      <th>S.No</th>
      <th>Task</th>
    </tr>
    {ans}
    </table>
    </>
  )
}


export default App;