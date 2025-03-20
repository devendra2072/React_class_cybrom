import axios from "axios";
import { useEffect, useState } from "react";

const Display=()=>{
   const[empData,setData]=useState([]);
   const loadData=async()=>{
      let api=`http://localhost:3000/Employe`;
      const resp=await axios.get(api);
      setData(resp.data);
   }
   useEffect(()=>{
      loadData();
   },[]);
   const ans=empData.map((key)=>{
      return(
         <>
            <tr bgcolor="green">
               <td>{key.empno}</td>
               <td>{key.name}</td>
               <td>{key.city}</td>
               <td>{key.salary}</td>
            </tr>
         </>
      )
   })
   return(
      <>
         <h1>Display page</h1>
         <table border="1" width="500px" bgcolor="blue">
            <tr bgcolor="red">
               <th>EmpNo</th>
               <th>Name</th>
               <th>city</th>
               <th>salary</th>
            </tr>
            {ans}
         </table>
         
      </>
   )
}
export default Display;