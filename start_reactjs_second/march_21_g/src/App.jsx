// import { useReducer } from "react";

// const App = () => {
//   const reducerFun = (state, action) => {
//     switch (action) {
//       case "Increment":
//         return state + 1;
//       case "Decrement":
//         return state - 1;
//       default:
//         return state;
//     }
//   };  // Missing semicolon and closing brace

//   const [count, mydispatch] = useReducer(reducerFun, 0);

//   return (
//     <>
//       <h1>Welcome to my useReducer Hook App</h1>
//       <button onClick={() => mydispatch("Increment")}>Increment</button>
//       <h2>{count}</h2>
//       <button onClick={() => mydispatch("Decrement")}>Decrement</button>
//     </>
//   );
// };

// export default App;









// import { useReducer } from "react";

// const App = () => {
//   const colorChange = (state, action) => {
//     switch (action) {
//       case "Green":
//         return state = "green";
//       case "Red":
//         return state = "red";
//       case "Blue":
//         return state = "blue";
//       case "Aqua":
//         return state = "aqua";
//       default:
//         return state;
//     }
//   };  // Missing semicolon and closing brace

//   const [myColor, dispatch] = useReducer(colorChange, "black");

//   return (
//     <>
//       <h1>Welcome to my useReducer color Change App</h1>
//       <button onClick={()=>{dispatch("Green")}}>Green</button>
//       <button onClick={()=>{dispatch("Red")}}>Red</button>
//       <button onClick={()=>{dispatch("Blue")}}>Blue</button>
//       <button onClick={()=>{dispatch("Aqua")}}>Aqua</button>
//     </>
//   );
// };

// export default App;



// import { useReducer } from "react";

// const App = () => {
//   const colorChange = (state, action) => {
//     switch (action) {
//       case "Green":
//         return "green";
//       case "Red":
//         return "red";
//       case "Blue":
//         return "blue";
//       case "Aqua":
//         return "aqua";
//       default:
//         return state;
//     }
//   };

//   const [myColor, dispatch] = useReducer(colorChange, "black");

//   return (
//     <>
//       <h1>Welcome to my useReducer color Change App</h1>
//       <button onClick={() => {dispatch("Green")}}>Green</button>
//       <button onClick={() => {dispatch("Red")}}>Red</button>
//       <button onClick={() => {dispatch("Blue")}}>Blue</button>
//       <button onClick={() => {dispatch("Aqua")}}>Aqua</button>
//       {/* Added style to demonstrate the color change */}
//       <div style={{ backgroundColor: myColor, width: '100px', height: '100px' }}></div>
//     </>
//   );
// };

// export default App





import { useReducer } from "react";

const App = () => {
  const colorChange = (state, action) => {
    switch (action) {
      case "Green":
        return "green";
      case "Red":
        return "red";
      case "Blue":
        return "blue";
      case "Aqua":
        return "aqua";
      default:
        return state;
    }
  };

  const [myColor, dispatch] = useReducer(colorChange, "black");

  return (
    <>
      <h1>Welcome to my useReducer color Change App</h1>
      <button onClick={() => {dispatch("Green")}}>Green</button>
      <button onClick={() => {dispatch("Red")}}>Red</button>
      <button onClick={() => {dispatch("Blue")}}>Blue</button>
      <button onClick={() => {dispatch("Aqua")}}>Aqua</button>
      {/* Added style to demonstrate the color change */}
      <div style={{ color: myColor, width: '100px', height: '100px',border:'5px solid', marginTop:"50px" }}>Welcome to cybrom</div>
    </>
  );
};

export default App