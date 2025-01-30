import { createContext , useState } from "react";
const userContext = createContext();
const MyContext=({children})=>{
    const [ name,setName] = useState("Aryan!")
    return(
        <>
        <userContext.Provider value={{name,setName}}>
            {children}
        </userContext.Provider>
        </>
    )
}
export default MyContext;
export {userContext};