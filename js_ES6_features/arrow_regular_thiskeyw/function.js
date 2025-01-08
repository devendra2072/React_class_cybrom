// 1 argument object are not  available in arrow function
// 2 regular function created using function or expresion declearation are "contructable" and 'callable'.
// 3 arrow function do not their own this.
//4 implicity returned by the arrow function.

// regularFunction
// 1
// output : argument 2
// 0=10
// 1=15
// function add(a, b) {
//   console.log(arguments);
//   return a + b;
// }
// add(10, 15);

// arrow function
// outputr := argument is not defined
// const add=(a, b)=> {
//   console.log(arguments);
//   return a + b;
// }
// add(10, 15);

// regular = function
// 2
// output
// car { brand: 'maruti' }
// { brand: 'maruti' }
// function car(name){
//     this.brand = name;
// }
// let cardata = new car('maruti');
// console.log(cardata);

// arrow function
// output
// car is a not a constructor
// const car=(name)=>{
//     this.brand = name;
// }
// let cardata = new car('maruti');
// console.log(cardata);

// 3
// // regular = function
// output= 'John Doe regular function'
// let userinfo = {
//   name: "John Doe",
//   fullName() {
//     console.log(this.name +" "+ "regular function");
//   },
// };
// userinfo.fullName();

// arrow function
// output= arrow function'
// let userinfo = {
//   name: "John Doe",
//   fullName() {
//     console.log(this.name + " " + "regular function");
//   },
//   fullName2: () => {
//     console.log(this.name + " " + "arrow function");
//   },
// };
// userinfo.fullName2();

// arrow function
// output= arrow function'
// let userinfo = {
//   name: "John Doe",
//   fullName() {
//     const test = () => {
//       console.log(this.name + " " + "***");
//     };
//     test();
//     console.log(this.name + " " + "regular function");
//   },
//   fullName2: () => {
//     console.log(this.name + " " + "arrow function");
//   },
// };
// userinfo.fullName();

