import {useSelector, useDispatch} from "react-redux";
import { Addtask,deletetask,taskComplete,taskIncomplete,editDatasave } from "./TodoSlice";
import { useState } from "react";
const App=()=>{
  const [val,setval]=useState(" ");
  const [workID,setworkID]=useState("");
  const[btnstatus,setbthstatus]=useState(true);
  const mytd=useSelector(state=>state.mytodo.task);
  console.log(mytd);
  const dispach=useDispatch();
  let sno=0;
    const editmydata=(id,work)=>{
      setval(work)
      setbthstatus(false)
      setworkID(id)
    }
  const editDatadisptach=()=>{
    dispach(editDatasave({id:workID, work:val}))
    setbthstatus(true);
  }
  const ans=mytd.map((key)=>{
    sno++;
    return(
      <>
        <tr>
          <td style={{backgroundColor:"aqua"}}>{sno}</td>
          <td style={{backgroundColor:"aqua"}}>
            {key.status=="complete" ? (<>
            <span style={{color:"red",textDecoration:"line-through"}}>{key.work}</span>
            </>):(<>
            {key.work}
            </>)}
            </td>
          <td><button style={{backgroundColor:"aqua"}} onClick={()=>{dispach(deletetask({id:key.id}))}}>delete</button></td>
          <td><button style={{backgroundColor:"aqua"}} onClick={()=>{dispach(taskComplete({id:key.id}))}}>Completed</button></td>
          <td><button style={{backgroundColor:"aqua"}} onClick={()=>{dispach(taskIncomplete({id:key.id}))}}>InCompleted</button></td>
          <td><button style={{backgroundColor:"aqua"}} onClick={()=>{editmydata(key.id,key.work)}}>EditData</button></td>
        </tr>
      </>
    )
  })
  return(
   <>
        <h1>welcome to color !!!</h1>
        Enter work:<input type="text" value={val} onChange={(e)=>{setval(e.target.value)}}/>
      {btnstatus? (<><button style={{color:"black",backgroundColor:"red"}} onClick={()=>{dispach(Addtask({id:Date.now(), work:val, status:"incomplete",}))}}>Add</button>
      </>):(<>
      <button onClick={editDatadisptach}>Edit save!</button></>)}
      <hr />
      <table style={{width:"600px"}} border="1" >
        <tr>
          <th style={{backgroundColor:"blue"}}>sno</th>
          <th style={{backgroundColor:"blue"}}>my task</th>
          <th style={{backgroundColor:"blue"}}>Delete</th>
          <th style={{backgroundColor:"blue"}}>Complete Task</th>
          <th style={{backgroundColor:"blue"}}>Incomplete Task</th>
          <th style={{backgroundColor:"blue"}}>Edit Task</th>
        </tr>
        {ans}
      </table>
     </>
  )
}
export default App; 






  