import React from "react";
import { useContext } from "react";

const Contact = () => {
  const { color } = useContext;
  const handleClick = () => {
    context.setColor("red");
  };
  return (
    <>
      <h1>Contact Us</h1>

      <div>
        <p style={{ color }}>This is the contact page</p>
        <button onClick={handleClick}>Change Color</button>
      </div>
    </>
  );
};

export default Contact;
