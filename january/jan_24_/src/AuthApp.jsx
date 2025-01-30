import { useContext } from "react";
import { myloginContext } from "./LoginContext";
const AuthApp=()=>{
    const {user, logout} = useContext(myloginContext);
    return (
        <>
            <h1>AuthApp</h1>
             welcome: {user.name}
             <button onClick={logout}>Logout</button>
        </>
    );
}

export default AuthApp;