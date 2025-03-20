import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Editdata=()=>{
   const {id}=useParams();
   const[empData,setData]=useState({});
   const loadData=async()=>{
      let api=`http://localhost:3000/Employe/${id}`;
      const resp=await axios.get(api);
      setData(resp.data);
   }
   useEffect(()=>{
      loadData();
   },[])
   const handleInput=(e)=>{
      let Name=e.target.name;
      let Value=e.target.value;
      setData(values=>({...values, [Name]:Value}));
      console.log(empData);
   }
   const handleSubmit=async()=>{
      let api=`http://localhost:3000/Employe/${id}`;
      const resp=await axios.put(api,empData);
      alert("Record Updated!!!!!")
   }
   return(
      <>
         <h1>EditData Details : {id}</h1>
         Enter Empno:<input type="text" name="empno" value={empData.empno} onChange={handleInput}/>
         <br />
         Enter Name:<input type="text" name="name" value={empData.name} onChange={handleInput}/>
         <br />
         Enter City:<input type="text" name="city" value={empData.city} onChange={handleInput}/>
         <br />
         Enter Salary:<input type="text" name="salary" value={empData.salary} onChange={handleInput}/>
         <br />
         <button onClick={handleSubmit}>save</button>
      </>
   )
}
export default Editdata;