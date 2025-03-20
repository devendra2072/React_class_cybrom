import { useContext } from "react";
import { MyContext } from "../App";
const Com3=()=>{
    const {user} =useContext(MyContext);
    return (
        <>
        <h1>my name is : {user}</h1>
        </>
    )
}                                                                                                                                                                                                   
export default Com3;