import axios from "axios";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";

const Editdata=()=>{
   const {id}=useParams();
   const[empData, setEmpData]=useState({});
   const loadData=async()=>{
      let api=`http://localhost:3000/employee/${id}`;
      const resp=await axios.get(api);
      setEmpData(resp.data);
   }
   useEffect(()=>{
      loadData();
   }, []);

   const handleInput=(e)=>{
      let Name=e.target.name;
      let Value=e.target.value;
      setEmpData(values=>({...values, [Name]:Value}));
      console.log(empData);
   }
   const handleSubmit=async()=>{
      let api=`http://localhost:3000/employee/${id}`;
      const respo=await axios.put(api,empData);
      alert("Record updated!!!!")
   }

   return(
      <>
         <h1>Editdata Detail :{id} </h1>
         Enter Empno:<input type="text" name="empno" value={empData.empno} onChange={handleInput} />
         <br />
         Enter name:<input type="text" name="name" value={empData.name} onChange={handleInput} />
         <br />
         Enter Destination:<input type="text" name="destination" value={empData.destination} onChange={handleInput}/>
         <br />
         Enter Salary:<input type="text" name="salary" value={empData.salary} onChange={handleInput} />
         <br />
         <button onClick={handleSubmit}>Save data</button>
      </>
   )
}
export default Editdata;