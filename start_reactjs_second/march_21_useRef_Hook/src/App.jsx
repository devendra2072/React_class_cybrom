// import { useRef } from "react";

// const App = () => {
//   const myRef = useRef(" ");
//   const handleClick = () => {
//     myRef.current.style.backgroundColor = "red";
//   };

//     const dev = {
//       backgroundColor: "#66FF00",
//       color: "black",
//       fontSize: "16px",
//       fontWeight: "bold",
//       padding: "10px",
//       cursor: "pointer",
//       borderRadius: "50px",
//     }
  
//   return (
//     <>
//       <h1>Hello, React!</h1>
//       <div ref={myRef} style={{width: "100px", height: "100px", backgroundColor: "aqua", border:"2px solid"}}></div>
//       <button style={dev} onClick={handleClick}>Change Color</button>
//     </>
//   );
// };
// export default App



// import { useRef } from "react";

// const App = () => {
//   const textRef = useRef();
//   const myCity = () => {
//     textRef.current.value = "Bhopal";
//   };
//   const myBorder = () => {
//     textRef.current.style.border = "2px solid black";
//   };
//   const mych = () => {
//     textRef.current.style.backgroundColor="aqua";
//   };

//   return (
//     <>
//       <button onClick={myCity}>city</button>
//       <button onClick={myBorder}>border</button>
//       <button onClick={mych}>color change</button>
//       <br /><br />
//      Enter name : <input type="text" ref={textRef} />

//     </>
//   );
// };
// export default App



import { useRef } from "react";

const App = () => {
  const myRef = useRef();
  const btnFun1 = () => {
    myRef.current.innerHTML="cybrom";
    myRef.current.style.textAlign="center";
    myRef.current.style.fontSize="20px";
    myRef.current.style.lineHeight="9";
  }
  const btnFun2 = () => {
    myRef.current.style.borderRadius="50%";
  }
  const btnFun3 = () => {
    myRef.current.style.backgroundColor="yellow";
    myRef.current.style.color="blue";
    myRef.current.style.border="3px dotted black";
  }
  return (
    <>
      <h1>Hello, React!</h1>
      <button onClick={btnFun1}>btn1</button>
      <button onClick={btnFun2}>btn2</button>
      <button onClick={btnFun3}>btn3</button>
      <hr />
      <div ref={myRef} style={{width: "200px", height: "200px", border: "4px solid blue"}}></div>
    </>
  );
};
export default App










