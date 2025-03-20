
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask } from './todoSlice';

const App = () => {
  const [val, setVal] = useState("");
  const Task= useSelector(state=>state.myslice.task);
  const dispatch = useDispatch();
  console.log(Task);
  let sno=0;
  const ans = Task.map((key)=>{
    sno++;
    return(
      <>
      <tr>
        <td>{sno}</td>
        <td>{key.task}</td>
      </tr>
      </>
    )
  })

  return (
    <>
    <h1>welcome to do app</h1>
    <hr />
    enter your task: <input type="text" value={val} onChange={(e) => {setVal(e.target.value)}} />
    <button onClick={()=>{dispatch(addTask({id:Date.now(),task:val}))}} >To Do</button>
    <hr />
    <table border="1" width="400px" >
      <tr>
        <th>Sno</th>
        <th>Task</th>
      </tr>
      {ans}
    </table>
      
    </>
  );
};

export default App;
