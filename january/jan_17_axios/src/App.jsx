import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [mydata, setMydata] = useState([]); // mydata=[]
  const loadData = () => {
    let api = "http://localhost:3000/Student";
    axios.get(api).then((res) => {
      console.log(res.data);
      setMydata(res.data);
    });
  };
  const ans = mydata.map((key) => {
    return (
      <>
        <tr>
          <td>{key.rollno}</td>
          <td>{key.name}</td>
          <td>{key.city}</td>
          <td>{key.fess}</td>
        </tr>
      </>
    );
  });
  useEffect(() => {
    loadData();
  }, []);
  return (
    <>
      <h1>Welcome!!</h1>
      <table border="2" width="400">
        <tr>
          <th>Roll No</th>
          <th>Name</th>
          <th>City</th>
          <th>Fees</th>
        </tr>
        {ans}
      </table>
    </>
  );
}

export default App;
