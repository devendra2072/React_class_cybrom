import { useState } from "react";
import axios from "axios";
const Search=()=>{
   const[empno,setEmpno]=useState("");
   const[mydata,setMydata]=useState([]);
   const handleSubmit=async()=>{
      let api=`http://localhost:3000/employee/?empno=${empno}`;
      const resp= await axios.get(api);
      setMydata(resp.data);
   }

   const ans=mydata.map((key)=>{
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
         <h1>Search Page</h1>
         Enter Empno:<input type="text" value={empno} onChange={(e)=>{setEmpno(e.target.value)}}/>
         <button onClick={handleSubmit}>Search</button>
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
export default Search;