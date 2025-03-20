import axios from "axios";
import { useState } from "react";

const Search=()=>{
   const [empData,setEmpdata]=useState("");
   const[myData,setData]=useState([]);
   const handleSubmit=async()=>{
      let api=`http://localhost:3000/Employe/?empno=${empData}`;
      const resp= await axios.get(api);
      setData(resp.data);
   }
   const ans=myData.map((key)=>{
      return(
         <>
            <tr>
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
         <h1>Search page</h1>
         Enter Search:<input type="text" value={empData} onChange={(e)=>{setEmpdata(e.target.value)}} />
         <button onClick={handleSubmit}>Search </button>
         <table>
            <tr>
               <th>Empno</th>
               <th>Name</th>
               <th>City</th>
               <th>salary</th>
            </tr>
            {ans}
         </table>
         
      </>
   )
}
export default Search;