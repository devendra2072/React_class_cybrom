import { useState,useEffect } from "react";
import axios from "axios";
import editimg from "../images/edit.png";
import delimg from "../images/del.png";
import { useNavigate } from "react-router-dom";
const Update=()=>{
   const[myData,setData]=useState([]);
   const navigate= useNavigate();
   const loadData=async()=>{
      let api="http://localhost:3000/employee";
      const resp= await axios.get(api);
      console.log(resp.data);
      setData(resp.data);
   }
   useEffect(()=>{
      loadData();
   },[]);

   const myEdit=(id)=>{
      navigate(`/editdata/${id}`)
   }

   const myDel=async(id)=>{
      let api=`http://localhost:3000/employee/${id}`;
      const resp=await axios.delete(api);
       loadData();
      alert("Response Successfull");
   }
   const ans=myData.map((key)=>{
      return(
         <>
            <tr>
               <td>{key.empno}</td>
               <td>{key.name}</td>
               <td>{key.destination}</td>
               <td>{key.salary}</td>
               <td>
               <a href="" onClick={()=>{myEdit(key.id)}}><img src={editimg} width="30px" height="30px" /></a>
               </td>
               <td>
               <img src={delimg} width="30px" height="30px" onClick={()=>{myDel(key.id)}}/>
               </td>
            </tr>
         </>
      )
   })

   return(
      <>
         <h1>Update Page</h1>
         <table width="600px" bgcolor="yellow" border="1">
         <tr>
            <th>Employeno</th>
            <th>name</th>
            <th>Destination</th>
            <th>salary</th>
            <th>Update</th>
            <th>Delete</th>
         </tr>
         {ans}
      </table>
      </>
   )
}
export default Update;