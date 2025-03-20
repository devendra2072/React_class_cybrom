
import { useState, createContext } from "react";
import Com3 from "./components/Comp3";
const MyContext= createContext();
const App=()=>{
  const [user,setUser]=useState("dev");
  return(
    <>
      
       <h1>my app welcome : {user}</h1>
        <MyContext.Provider value={{user}}>
                                                                                                            `
        <Com3/>
        </MyContext.Provider>
    </>
  )
}


export default App;
export {MyContext}