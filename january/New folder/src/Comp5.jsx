import { useContext } from "react"
import { myContext } from "./App"

// import { useContext } from "react";
// import { nameContext } from "./App";

const Comp5=()=>{
    const { user } = useContext(myContext);

    
    // const { user, setUser } = useContext(nameContext);

    return(
        <>
             <h1>Comp5</h1>
            <h1>welcome :{user}</h1> 


 {/* <h1> Compo5 </h1>
        <button onClick={()=>{setUser("mishra ji")}}> click here</button>
        <h2> my name: {user}</h2> */}
          

          
        </>
    )
}
export default Comp5