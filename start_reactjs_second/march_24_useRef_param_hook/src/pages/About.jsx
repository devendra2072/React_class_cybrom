// import React from 'react';
import { useNavigate } from "react-router-dom";
const compname = "CYBROM";
const About = () => {
  const navigate = useNavigate();
  const myCompany = () => {
    navigate(`/mycompany/${compname}`);
  };
  return (
    <>
      <h1>Welcome to the About Page</h1>

      <h1>About Us</h1>
      <button onClick={myCompany}>Visit My Company</button>
     
    </>
  );
};

export default About;
