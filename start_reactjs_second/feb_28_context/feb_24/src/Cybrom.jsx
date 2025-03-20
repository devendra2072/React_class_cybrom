import { useContext } from "react";
import { ColorContext } from "./App";
const Cybrom = () => {
  const { color, setColor } = useContext(ColorContext);
  return (
    <>
      <h1> Welcome To Cybrom : {color}</h1>
      <button style={{ backgroundColor: "pink", color: "green" }}
        onClick={() => {
          setColor("pink");
        }}
      >
        click herel
      </button>
    </>
  );
};
export default Cybrom;
