import axios from "axios";
import { useState } from "react";
const Insert=()=>{
   const[input,setInput]=useState({});
const handleinput=(e)=>{
 let name =e.target.name;
 let value =e.target.value;
 setInput(values=>({...values,[name]:value}));
  console.log(input);
}
const handlesubmit=async()=>{
   let api="http://localhost:3000/employee";
   const respn= await axios.post(api, input);
   console.log(respn);
   alert("data save!!!");
}
   return(
      <>
      
      <h1>Insert Data</h1>
      Enter Rollno: <input type="text" name="empno" onChange={handleinput} />
      <br />
      Enter Name: <input type="text" name="name" onChange={handleinput} />
      <br />
      Enter destination: <input type="text"  name="destination" onChange={handleinput}/>
      <br />
      Enter salary: <input type="number"  name="salary" onChange={handleinput}/>
      <br />
      <button onClick={handlesubmit}>Save data!!</button>
      </>
   )
}
export default Insert;