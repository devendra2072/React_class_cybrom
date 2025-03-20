import axios from "axios";
import { useState,useEffect } from "react";
const Insert=()=>{
   const[Empdata,setData]=useState({});
   const handlechange=(e)=>{
      let name =e.target.name;
      let value=e.target.value;
      setData(values=>({...values,[name]:value}))
      console.log(Empdata);
   }
   const handlesubmit=()=>{
      let api="http://localhost:3000/Employe";
      axios.post(api, Empdata).then((resp)=>{
         alert("data sucessfully sent");
      })

   }
   return(
      <>
         <h1>Insert page</h1>
         Enter EmpNo: <input type="text" name="empno" onChange={handlechange}/>
         <br />
         Enter Name: <input type="text" name="name" onChange={handlechange}/>
         <br />
         Enter City: <input type="text" name="city" onChange={handlechange}/>
         <br />
         Enter Salary: <input type="text" name="salary" onChange={handlechange}/>
         <br />
         <button onClick={handlesubmit}>Click here</button>
      </>
   )
}
export default Insert;