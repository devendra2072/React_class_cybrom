import AuthApp from "./AuthApp";
import UnAuthApp from "./UnAuthApp";
import { useContext } from "react";
import { myloginContext } from "./LoginContext";
const App=()=>{
  const {user} = useContext(myloginContext);
  return(
    <>
      <h1>welcomr to login app</h1>
      {user.auth? <AuthApp /> : <UnAuthApp /> }
    </>
  )
}
export default App;


