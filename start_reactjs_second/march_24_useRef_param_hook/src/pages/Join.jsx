// import React from 'react';
import { Navigate, useNavigate } from "react-router-dom";
const myid=12345;
const Join = () => {
    const Navigate = useNavigate();
    const myjoin=()=>{
        Navigate(`/myjoining/${myid}`);
    }
    return (
        <>
            <h1>Join Page</h1>
            <button onClick={myjoin}>Visit My Joining</button>
        </>
    );
};

export default Join;