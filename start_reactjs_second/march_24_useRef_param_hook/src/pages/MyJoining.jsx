// import React from 'react';
import { useParams } from "react-router-dom";
const MyJoining = () => {
    const { id } = useParams();
  return (
    <>
      <h1>Welcome to the MyJoining Page : {id}</h1>
    </>
  );
};

export default MyJoining;
