// let a = 67
// a = 'kartik'
// console.log(a)

// Var is global scope while let & const are block scope
//var can be updated and re-declared within its scope
//let can updated but not re-declaed
//const is neither be updated nor be re-declared

// let b = "kartik";
// b = 47;
// console.log("outside ", b);
// {
//   let b = "this";
//   console.log("inside ", b);
// }
// var temp1 = "mario1";
// {
//   var temp1 = "mario2";
//   console.log("inside from the block", temp1);
// }

// console.log("OutSide from the block", temp1);

// var vs let vs const
// scope

// illegal Shadowing
// function test() {
//   var a = "Hello";
//   let b = 'Bye'

//   if (true) {
//     let a = "hi";
//     var b = 'Goodbye'
//     console.log(a);
//     console.log(b);

//   }
//   console.log(a);
// }

// test()

// Hoisting

// console.log(count);
// var count = 1;

// console.log(temp);
// let temp = 7;

// Temperal Dead Zone : is the time between the decleration and the intialisation of let and const variable


// function abc(){
//     console.log(a,b,c)

//     const c = 10
//     let b = 20
//     var a = 10
// }

// abc()

// HOISTING 

getName()
console.log(x)
console.log(getName())

var x = 7
 function getName(){
  console.log('hello duniya from inside')
 }

 
 