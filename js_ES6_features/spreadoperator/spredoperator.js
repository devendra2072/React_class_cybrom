// const person = {
//     name: "John Doe",
//     age: 30,
  
//     city: "New York",
//   };
  
//   const  person2 ={...person}
//   console.log(person2.name)
  

  const numbers = [1, 2, 3];
  const moreNumbers = [...numbers, 4, 5]; 

  console.log(moreNumbers); // Output: [1, 2, 3, 4, 5]



  const person = { name: "Alice", age: 30 };
  const newPerson = { ...person, city: "New York" }; 

  console.log(newPerson); // Output: { name: "Alice", age: 30, city: "New York" }