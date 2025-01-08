import Header from "./Header";
import Data from "./Data";
import Footer from "./Footer";
const name = "devendra";
const city = "bhopal";
const age = 25;
const sub = (
  <ol>
    <li>php</li>
    <li>java</li>
    <li>python</li>
    <li>c++</li>
    <li>html</li>
  </ol>
);
const App = () => {
  return (
    <>
      {/* <Header />
      <Data />
      expression hai 
      <Footer /> */}
      {/* <h1> hello i am {name} i am from {city} we learn js</h1> */}
      {/* large block of code insert kar sakte hai */}
      {/* <h1> hello i am {age} year ol</h1> */}
      {/* large block of code insert kar sakte hai */}
      {/* <h1>my subjects : {sub}</h1> */}
      {/* suger formate  */}
      {/* one top level  */}
      {/* <h1>Application form</h1>
      every element must be closed 
      Enter Name : <input name="name" type="text" />
      <br />
      <br />
      Enter City : <input name="name" type="text" />
      <hr />
      <input type="submit" value="save" /> */}
      <h1 className="data">welcome to cybrom</h1>

    </>
    
  );
};
export default App;
