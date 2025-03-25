// import React from 'react';
import { useParams } from "react-router-dom";
const MyCompany = () => {
    const {mycomp} = useParams();
    return (
        <>
            <h1>Welcome to the MyCompany Page</h1>
            <h1>This is the MyCompany page with company name : {mycomp}</h1>
        </>
    );
};

export default MyCompany;