// import React from 'react';
import { useNavigate } from "react-router-dom";

const Contact = () => {
    const myNavigate = useNavigate();
    return (
        <>
        <hr />
            <h1>Contact Page</h1>
            <p>This is the contact page.</p>
            <button onClick={()=>{myNavigate("/home")}} >Home page </button>
            <hr />
        </>
    );
};

export default Contact;