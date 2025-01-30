import { useState } from "react";
const Cybrom = () => {
  const [name, setName] = useState(""); // setName is a function that  takes a name and returns a value for the property
  const [city, setCity] = useState("");

  // const handleSubmit=() => {
  //   console.log({"name":"name", "city":"city"});
  //   // reset the state after form submission
  // }

  const [input, setInput]=useState({}); // input={}
  //input={stuname:"devendra",city:"balaghat",subject:"python",fees:"100000"}
  const handleSubmit=(e)=>{
    let name=e.target.name;
    let value=e.target.value;
    setInput(values=>({...values,[name]:value}));
    console.log(input);
  }

  return (
    <>
      {/* <h1>my application form</h1>
   
       Enter name: <input type="text"name="stuname" value={name} onChange={(e)=>setName(e.target.value)}/>  
        <br />
        <br />
        Enter city: <input type="text"name="" value={city} onChange={(e)=>setCity(e.target.value)} />
        <br /><br />
        <button onClick={handleSubmit}>Click here</button> */}

      <h1>my application form</h1>
      
        Enter name: <input type="text" name="stuname" onChange={handleSubmit} />
        <br />
        <br />
        Enter city: <input type="text" name="city" onChange={handleSubmit} />
        <br />
        <br />
        Enter subject: <input type="text" name="subject" onChange={handleSubmit} />
        <br />
        <br />
        Enter fees: <input type="text" name="fees" onChange={handleSubmit} />
        <br />
        <br />
        <button>Click here</button>
      
    </>
  );
};
export default Cybrom;
