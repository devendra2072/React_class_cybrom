import { useContext, useState } from "react";
import { myContext } from "./LoginContext";

const UnAuthApp = () => {
  const [val, setVal] = useState("");
  const { login } = useContext(myContext);
  return (
    <>
      enter youre name : <input type="text" value={val} onChange={(e) => {setVal(e.target.value)}} />
      <button onClick={() => {login(val)}}>Login</button>
    </>
  );
};
export default UnAuthApp;
