// 1st method

// const name = ["devendra", "rahul", "tinku", "abhi", "abhishek"];

// const ans = name.map((key) => {
//   return (
//      <li>{key}</li>
//   )
// });


// second method
// const Employee = [
//   {
//     empno: 1001,
//     name: "devendra",
//     department: "CSE",
//     salary: 50000,
//   },
//   {
//     empno: 1002,
//     name: "rahul",
//     department: "IT",
//     salary: 60000,
//   },
//   {
//     empno: 1003,
//     name: "tinku",
//     department: "CSE",
//     salary: 55000,
//   },
//   {
//     empno: 1004,
//     name: "abhi",
//     department: "IT",
//     salary: 58000,
//   },
//   {
//     empno: 1005,
//     name: "abhishek",
//     department: "CSE",
//     salary: 52000,
//   },
// ];


// const ans = Employee.map((key) => {
//   return (
//     <>
//       <tr>
//         <td>{key.name}</td>
//         <td>{key.empno}</td>
//         <td>{key.department}</td>
//         <td>{key.salary}</td>
//       </tr>
//     </>
//   );
// });


// 3rd method iska data emp.jsx main rakha hai usko improt karke access kar rahe hai
// import Employee from "./Emp"
// const ans=Employee.map((key)=>{
//   return(
//     <>
//     <tr>
//       <td>{key.empno}</td>
//       <td>{key.name}</td>
//       <td>{key.department}</td>
//       <td>{key.salary}</td>
//     </tr>
//     </>
//   )
// })





// 4th method  iska data emp.jsx main rakha 
import EmpData from "./Emp";
import EmpDesign from "./EmpDesign";

const ans=EmpData.map((key)=>  <EmpDesign
eno={key.empno}
nm={key.name}
dept={key.department}
sal={key.salary} />
)










const App = () => {
  return (
    <>
      {/* 1st method  */}
      {/* <h1>welcome to react props</h1>
    <ol>
    {ans}
    </ol> */}


      {/* second method */}
      {/* <h1>listing in react js</h1>
    <table>
      <tr>
        <th>Emp no</th>
        <th>Name</th>
        <th>Dept</th>
        <th>Salary</th>
      </tr>
      {ans}
    </table> */}


      {/* 3rd method iska data emp.jsx main rakha hai usko improt karke access kar rahe hai */}
      {/* <table border="1">
      <tr>
        <th>EmpNo</th>
        <th>Name</th>
        <th>Department</th>
        <th>Salary</th>
      </tr>
      {ans}
    </table> */}









    {/* 4th method  */}
    <h1>Employee List</h1>
    <table>
      <tr>
        <th>Empno</th>
        <th>name</th>
        <th>Department</th>
        <th>sallary</th>
      </tr>
      {ans}
    </table>
    </>
  );
};
export default App;
