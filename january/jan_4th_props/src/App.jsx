import { useState } from "react";
import Cybrom from "./Cybrom";

// let my_name = "abhishek";
// let my_city = "nagpur";
// let my_sall = "50000";

// const Student = {
//   my_name: "Dev",
//   my_de : "engineer",
//   my_citys : "Bhopal",
//   my_sallarys: "000"
// }

// map

const StuDeta = [
  {
    my_name: "Dev",
    my_roll: "01",
    my_citys: "Bhopal",
    my_sallarys: "0020",
  },
  {
    my_name: "abhi",
    my_roll: "02",
    my_citys: "Bhopal",
    my_sallarys: "500",
  },
  {
    my_name: "rahul",
    my_roll: "03",
    my_citys: "Bhopal",
    my_sallarys: "2300",
  },
  {
    my_name: "manis",
    my_roll: "04",
    my_citys: "Bhopal",
    my_sallarys: "0020",
  },
  {
    my_name: "nimish",
    my_roll: "05",
    my_citys: "Bhopal",
    my_sallarys: "100",
  },
];

const ans = StuDeta.map((key)=><Cybrom rno={key.my_roll} nm={key.my_name} city={key.my_citys} sal={key.my_sallarys} />)
const App = () => {
  return (
    <>
      {/* < Cybrom nm="dev" city="bhopal" sallary="000"/> */}

      {/* <Cybrom  nm={name} citys={city} sal={sall}  /> */}
{/* 
      <Cybrom
        name={Student.my_name}
        desi={Student.my_de}
        city={Student.my_citys}
        sallary={Student.my_sallarys}
      /> */}

      {/* map se  */}
      {ans}
    </>
  );
};

export default App;
