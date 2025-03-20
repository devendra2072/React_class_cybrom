import { useContext } from "react";
import { myContext } from "./ColorContext";

const Cybrom = () => {
    const { color, setColor } = useContext(myContext);
    return (
        <>
            <h1>Hello, Cybrom!: {color}</h1>
            <button onClick={() => {setColor("green")}}>Red</button>
        </>
    );
};

export default Cybrom;