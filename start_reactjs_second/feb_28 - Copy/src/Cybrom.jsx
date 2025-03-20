// import { useState, useContext } from "react";
// import { myContext } from "./ColorContext.jsx";
// const Cybrom=()=>{
//   const [textcolor, settextColor] = ("");
//   const { color, setColor } = useContext(myContext);
//   return (
//     <>
//       {/* <h1>Hello, Cybrom!:</h1>
//             enter color": <input type="text" onChange={(e) => setColor(e.target.value)} />
//             <button>click </button>
//             <div style={{  backgroundColor:"aqua", width: "200px", height: "200px" }}>
//             </div> */}
//       <h1>Hello, Cybrom!:</h1>
//       enter color:{" "}
//       <input
//         type="text"
//         value={textcolor}
//         onChange={(e) => {settextColor(e.target.value)
//         }} />
//       <button
//         onClick={() => {
//           setColor(textcolor)}}>click</button>
//       <div
//         style={{ backgroundColor: color, width: "200px", height: "200px" }}
//       ></div>
//     </>
//   );
// };

// export default Cybrom;


import { useState, useContext } from "react";
import { myContext } from "./ColorContext.jsx";

const Cybrom = () => {

  const [textcolor, setTextColor] = useState("");
  
  const { color, setColor } = useContext(myContext);

  return (
    <>
      <h1>Hello, Cybrom!</h1> {/* Removed unnecessary colon */}
      {/* Added proper label syntax and fixed string formatting */}
      <label>
        Enter color:{" "}
        <input
          type="text"
          value={textcolor}
          onChange={(e) => {
            setTextColor(e.target.value); // Fixed function syntax and naming
          }}
        />
      </label>
      <button
        onClick={() => {
          setColor(textcolor); // Fixed missing semicolon and formatting
        }}
      >
        Click
      </button>
      <div
        style={{ backgroundColor: color, width: "200px", height: "200px" }}
      ></div>
    </>
  );
};

export default Cybrom;