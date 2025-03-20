import axios from "axios";
import { useState, useEffect } from "react";
// import delimg from "../images/del.png";
// import edimg from "../images/ed.png";
import { useNavigate } from "react-router-dom";
const Update=()=>{
    const [mydata, setMydata]=useState([]);
    const navigate= useNavigate();
    const loadData=()=>{
        let api="http://localhost:8000/student/";
        axios.get(api).then((res)=>{
            setMydata(res.data);
            console.log(res.data);
        })
    }
    useEffect(()=>{
        loadData();
    }, []);

    const myDel=(id)=>{
        let api=`http://127.0.0.1:8000/student/${id}/`;
        axios.delete(api).then((res)=>{
            alert("Data deleted!!");
        })
        loadData();
    }
    const myEdit=(id)=>{    
        navigate(`/editdata/${id}`);
    }
    const ans=mydata.map((key)=>{
        return(
            <>
              <tr>
                <td>{key.rollno}</td>
                <td>{key.name}</td>
                <td>{key.city}</td>
                <td>{key.fees}</td>
                <td> 
                    <a href="#" onClick={(e)=>{myEdit(key.id)}}>
                    {/* <img src={edimg} width="20" height="20" /> */}
                    edit
                    </a>
                    
                </td>
                <td> 
                    <a href="#" onClick={()=>{myDel(key.id)}}>
                    {/* <img src={delimg} width="20" height="20" /> */}
                    delete
                    </a>
                </td>
              </tr>
            </>
        )
    })
    return(
        <>
         <h1> Update record!</h1>
         <table width="500" bgcolor="pink">
            <tr bgcolor="orange">
                <th>Rollno</th>
                <th>Name</th>
                <th>City</th>
                <th>Fees</th>
                <th></th>
                <th></th>
            </tr>
            {ans}
         </table>
        </>
    )
}
export default Update;