// import Cybrom from "./Cybrom";
import "./css/Style.css";
import { useState } from "react";
const App = () => {

  const [input, setInput] = useState({});
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInput((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = () => {
    console.log(input);
  };
  return (
    <>
      {/* <Cybrom /> */}


      <h1>my application form</h1>
      Enter name: <input type="text" name="stuname" onChange={handleInput} />
      <br />
      <br />
      Enter city: <input type="text" name="city" onChange={handleInput} />
      <br />
      <br />
      Enter subject:
      <input type="text" name="subject" onChange={handleInput} />
      <br />
      <br />
      Enter fees: <input type="text" name="fees" onChange={handleInput} />
      <br />
      <br />
      <button onClick={handleSubmit}>data show</button>
      
    </>
  );
};

export default App;
