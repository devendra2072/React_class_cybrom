import Comp1 from "./Comp1";
import { useState } from "react";
import { createContext } from "react";
const myContext = createContext();
// const nameContext = createContext();
const App = () => {
  // const [user, setUser] = useState("Abhishek");
  const [user, setUser] = useState("Abhi");

  return (
    <>
       {/* <h1>my name: </h1>

      <h1>my name: {user}</h1> */}

      <myContext.Provider value={{user}}>
        <Comp1 />
      </myContext.Provider>

      {/* <h1>my name: </h1>
       <button onClick={()=>{setUser("ok anurag")}} >Click here</button>
      <h1>my name: {user}</h1>
      <nameContext.Provider value={{user,setUser}}>
        <Comp1 />
        </nameContext.Provider> */}
    </>
  );
};

export default App;
export {myContext}

// export { nameContext };
