import { useContext } from "react";
import { myContext } from "./LoginContext";

const AuthApp=()=>{
   const{user,logOut}=useContext(myContext);
   return(
      <>
      <h1>welcome  {user.name} <button onClick={()=>{logOut()}}>logOut</button></h1>
      </>
   )
}
export default AuthApp;