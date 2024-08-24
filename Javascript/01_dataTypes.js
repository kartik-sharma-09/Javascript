// Primitive values

// 7 Types : String, Number, Boolean, Null, Undefined, Symbol and BigInt
// TypeOf null is OBJECT

// Reference (Non-primitive)
// JavaScript is a dynamically(run time me change kr sakhte h) typed language, but TypeScript is a statically typed language.

const id = Symbol("123");
const anotherId = Symbol("123");
console.log(id === anotherId);

const bigNumber = 2933938829389390n;
console.log(typeof bigNumber);

// Array, object, Functions =  ka typeOf objectFunction 

const marvel = ["hulk", "AntMan", "Loki"];
let myObj = {
  name: "kartik",
  age: 20,
  student: true,
};

const myFunction = function(){
    console.log('Hello World')
}

//1) Primitive Datatypes can  hold only single value  and they are immutable (their value can't be changed )
// Number => number
// String  => string
// Boolean  => boolean
// null  => object
// undefined  =>  undefined
// Symbol  =>  symbol
// BigInt  =>  bigint

// 2) Non-primitive Datatypes can hold multiple value and they are mutable their value can be changed 
// Arrays  =>  object
// Function  =>  function
// Object  =>  object