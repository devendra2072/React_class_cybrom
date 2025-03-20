import axios from "axios";
import { useState, useEffect } from "react";
const Display=()=>{
    const [mydata, setMydata]= useState([]);
    const loadData=()=>{
      let api="http://localhost:3000/student";
      axios.get(api).then((res)=>{
          console.log(res)
          setMydata(res.data);
      }).catch((err)=>{
          console.log(err);
      });
    }
useEffect(()=>{
    loadData();
}, []);

const ans=mydata.map((key)=>{
     return(
        <>
          <tr>
            <td>{key.rollno}</td>
            <td>{key.name}</td>
            <td>{key.city}</td>
            <td>{key.fees}</td>
          </tr>
        </>
     )
});
    return(
        <>
          <h1> Display data</h1>
          <table width="400" border="1" bgcolor="aqua" >
            <tr bgcolor="gray">
                <th> Rollno </th>
                <th> Name </th>
                <th> City </th>
                <th> Fees </th>
            </tr>
            {ans}
          </table>
        </>
    )
}
export default Display;