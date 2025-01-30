import {useContext } from "react";
import {userContext} from "./MyContext";
const Cybrom=()=>{
    const{name , setName} = useContext(userContext);
    return(
        <>
        <h1>Welcome to Cybrom : {name}</h1>
        <button onClick={()=>{setName("sapna")}}>Click here!</button>
        </>
    )
}
export default Cybrom;