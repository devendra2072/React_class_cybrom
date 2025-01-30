import { useState, useEffect } from "react";
import axios from "axios";
const Display = () => {
  const [mydata, setMydata] = useState([]);
  const loadData = () => {
    let api = "http://localhost:3000/Student";
    axios
      .get(api)
      .then((res) => {
        console.log(res.data);
        setMydata(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(()=>{
    loadData();
  },[]);

  const ans = mydata.map((key) => {
    return (
        <>
      <tr >
        <td>{key.rollno}</td>
        <td>{key.name}</td>
        <td>{key.city}</td>
        <td>{key.fess}</td>
      </tr>
      </>
    );
  });
   
  return (
    <>
      <h1>Display Data</h1>
      <table width="400px" border="1" bgcolor="yellow" >
        <tr bgcolor="aqua">
            <th>Roll No</th>
            <th>Name</th>
            <th>City</th>
            <th>Fess</th>
        </tr>
        {ans}
      </table>
    </>
  );
};

export default Display;
