// js has 3 types of scopes -> Block , -> Function , -> Global
// let and const are Block scope and var is global Scope

let p = 9;

function ax() {
  let a = 8;
  console.log(a);
  console.log(p);
}

// ax()
// console.log(a)

var c = 300;
let a = 20;

if (true) {
  let a = 10;
  const b = 20;
  //   console.log("innner: ", a);
}

// console.log(a)
// console.log(b)
// console.log(c)

function one() {
  const username = "kartik";

  function two() {
    const website = "youtube";
    console.log(username);
  }
  //   console.log(website);

  two();
}

// one();

if (true) {
  const username = "kartik";
  if (username === "kartik") {
    const website = " youtube";
    // console.log(username + website);
  }
  //   console.log(website)
}

// let x = 3;
// function2()

function function1() {
  console.log(x);
}

function function2() {
  console.log(x);
}

// function1()

// -----------------ModuleScope-----------------
// module are just like how we import and export the thing which i learnt in React.js

// export default class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// export function printName(user) {
//   console.log(`User's name is ${user.age}`);
// }

// export function printAge(user) {
//   console.log(`User is ${user.age} years old`);
// }

//------------------ScopeChain and LexicalScope-----------------------------
//where you can access a specific variable or a function in a code is know as scope 
// Lexixcal env. is the local memory along with the lexical env of its parent 

//-------------------Closures-----------------------
//A function bind together with its lexecial scope  (Function along with its lexical scope)
// function along with its lexical scope bundel together forms the closure

// function x(){
//     var a = 7
//     function y(){
//         console.log(a)
//     }
//     a = 100
//     return y
// }
// var z = x()
// console.log(z)
// z()

function z(){
    var b = 900
    function x(){
        var a = 7
        function y(){
            console.log(a,b)
        }
        // a = 100
         y()
    }
    x()
}

// console.log(z)

function main(){
    const name = 'Kartik sharma'

    function sayMyname(){
        console.log(name)
    }
    sayMyname()
}

main()