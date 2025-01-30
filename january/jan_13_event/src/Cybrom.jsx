import "./css/Style.css";

const Cybrom = () => {
  //  non parameter
  // const display=()=>{  
  //   alert("hello from class component");
  // }

  //  parameterised function
  // const myName=(nm,snm)=>{       
  //   alert(`My name: ${nm} ${snm}`);
  // }

  // event object

  // const myName=(e)=>{
  //   console.log("Cybrom:"+e.type);
  // }

  // const myName=(clg,e)=>{
  //   alert(`My collage: ${clg} my event: ${e.type}`);
  // }

  // const myName=(e)=>{
  //   let mynm =e.target.name;
  //   let myvalue =e.target.value;
  //   console.log(mynm , myvalue);
  //   alert(`My name: ${e.target.name} my value:${e.target.value}`);
  // }

  // const myName = (e) => {
  //   let name = e.target.name;
  //   let value = e.target.value;
  //   console.log({[name]:value});
  // };


  // form 

  // html ke controls likhe hote hai  uncontroll component 

  return (
    <>
    {/* non parameterised  */}
      <h1>wellcome to react js class </h1>
      {/* <button onClick={display}> Click here</button> */}

       {/* parameterised */}
      {/* <button onClick={()=>{myName("devendra","kurwe")}}>Click here!</button> */}

      {/* <button onClick={myName}>Click here!</button> */}
      {/* event object  pass karte hai  */}
      {/* <button onClick={(e)=>{myName("rgi",e)}}>Click here!</button> */}
      {/* <button name="mybtn1" value="bplbhopall" onClick={myName}>Click here!</button> */}

      {/* Enter name :<input type="text" name="stu_name" onChange={myName} />
      <br />
      <br />
      Enter city : <input type="text" name="city" onChange={myName}></input>
      <br /> */}



      {/* from  */}
    </>
  );
};
export default Cybrom;
