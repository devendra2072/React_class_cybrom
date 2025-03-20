// import React from 'react';
import { useNavigate, useParams } from "react-router-dom";
const About = () => {
    const navigate = useNavigate();
    const cname="Cybrom";
    const goCompany =()=> {
        navigate(`/abtcompany/${cname}`)
    }
    return (
        <>
        <hr />
            <h1>About Page Company Name: {cname}</h1>
            <button onClick={goCompany()}>Company page</button>
            <hr />
        </>
    );
};

export default About;