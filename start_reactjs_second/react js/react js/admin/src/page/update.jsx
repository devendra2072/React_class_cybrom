import axios from "axios";
import { useEffect,useState } from "react";
import delimg from "../images/del.png";
import editimg from "../images/edit.png";
import { useNavigate } from "react-router-dom";

const Update=()=>{
   const[empData,setEmpdata]=useState([]);
   const Navigate=useNavigate();
   const loadData=async()=>{
      let api=`http://localhost:3000/Employe`;
      const respo=await axios.get(api);
      setEmpdata(respo.data);
   }
   useEffect(()=>{
      loadData();
   },[]);

   const myDel=async(id)=>{
      let api=`http://localhost:3000/Employe/${id}`;
      const resp=await axios.delete(api);
      loadData();
      alert("Response Secessfull");
   }
   const myEdit=(id)=>{
      Navigate(`/editdata/${id}`);
   }
   const ans=empData.map((key)=>{
      return(
         <>
            <tr bgcolor="silver">
               <td>{key.empno}</td>
               <td>{key.name}</td>
               <td>{key.city}</td>
               <td>{key.salary}</td>
               <td>
                  <img src={editimg} width="20px" height="20px" onClick={()=>{myEdit(key.id)}}/>
               </td>
               <td>
                  <img src={delimg} width="20px" height="20px" onClick={()=>{myDel(key.id)}}/>
               </td>
            </tr>
         </>
      )
   })
   return(
      <>
         <h1>Update page</h1>
         <table border="1" bgcolor="yellow" width="500px">
            <tr bgcolor="red">
               <th>Empno</th>
               <th>Name</th>
               <th>City</th>
               <th>salary</th>
               <th>Delete</th>
               <th>Update</th>
            </tr>
            {ans}
         </table>
      </>
   )
}
export default Update;