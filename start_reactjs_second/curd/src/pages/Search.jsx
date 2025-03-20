import { useState } from "react";
import axios  from "axios";
const Search=()=>{
    const [rno, setRno] = useState("");
    const [mydata, setMydata] = useState([]);
    const handleSubmit=async()=>{
        let api=`http://localhost:3000/student/?rollno=${rno}`;
        const response= await axios.get(api);
        console.log(response.data);
        setMydata(response.data);
    }
    const ans= mydata.map((key)=>{
          return(
            <>
               <tr>
                 <td> {key.rollno} </td>
                 <td> {key.name} </td>
                 <td> {key.city} </td>
                 <td> {key.fees} </td>
                </tr>        
            </>
          )
    })
    return(
        <>
          <h1> Search Data</h1>
          Enter Rollno: <input type="text" name="rno" value={rno} 
          onChange={(e)=>{setRno(e.target.value)}}  />
          <button onClick={handleSubmit}>search</button>
          <hr size="4" color="red" />
          <table>
            <tr>
                <th>Rollno</th>
                <th>Name</th>
                <th>City</th>
                <th>Fees</th>
            </tr>
            {ans}
          </table>
        </>
    )
}
export default Search;