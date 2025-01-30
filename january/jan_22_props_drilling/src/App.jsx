import Comp1 from "./Comp1";
import { useState } from "react";
const App = () => {
  const [user, setUser] = useState("devendra");

  return (
    <>
      <h1>my name: {user}</h1>

      <Comp1 user={user} />
    </>
  );
};

export default App;
