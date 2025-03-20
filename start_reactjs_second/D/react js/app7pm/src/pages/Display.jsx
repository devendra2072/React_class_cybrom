import { useState,useEffect } from "react";
import axios from "axios";
const Display=()=>{
   const[myData,setData]=useState([]);
   const loadData=async()=>{
      let api="http://localhost:3000/employee";
      const resp= await axios.get(api);
      console.log(resp.data);
      setData(resp.data);
   }
   useEffect(()=>{
      loadData();
   },[]);
   const ans=myData.map((key)=>{
      return(
         <>
            <tr>
               <td>{key.empno}</td>
               <td>{key.name}</td>
               <td>{key.destination}</td>
               <td>{key.salary}</td>
            </tr>
         </>
      )
   })
   return(
      <>
      <h1>Display Data</h1>
      <table width="600px">
         <tr>
            <th>Employeno</th>
            <th>name</th>
            <th>Destination</th>
            <th>salary</th>
         </tr>
         {ans}
      </table>
      </>
   )
}
export default Display;