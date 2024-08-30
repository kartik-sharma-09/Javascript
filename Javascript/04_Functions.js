// function : A block of code that performs a particular task

function myName() {
  console.log("k");
  console.log("a");
  console.log("r");
  console.log("t");
  console.log("i");
  console.log("k");
}

// myName();

// function addTwoNumbers(num1, num2){
// console.log(num1+num2)
// }

function addTwoNumbers(num1, num2) {
  let result = num1 + num2;
  return result;
  //   console.log(num1 + num2);
}

// const result = addTwoNumbers(2, 5);
// console.log("result is ", result);

function loginUserName(username) {
  return `${username} just logged in`;
}

// let name = console.log(loginUserName("kartik"));

// With array and object

function cart(...num1) {
  return num1;
}

// console.log(cart(200,300,400,500))

//object

const user = {
  name: "kartik",
  age: 20,
  role: true,
};

function handleObject(obj) {
  console.log(`name is ${obj.name} age is ${obj.age} and role is ${obj.role}`);
}

// handleObject({
//     name:'hero',
//     age:0,
//     role: false,
// })

function returnSecondValue(getArray) {
  return getArray[1];
}

// console.log(returnSecondValue([100,777,3333]))

// ---------nrml function & arrow Function--------------

function sum1(a, b) {
  return a + b;
}

let sum2 = (a, b) => a + b;

function isPositive(number) {
  return number >= 0;
}

function randomNumber() {
  return Math.random;
}

let randomNumber2 = () => Math.random;

// document.addEventListener('click', function(){
// console.log('click')
// })

// document.addEventListener('click', ()=> console.log('click'))

// unlimited arguments  accept
function numValue() {
  let ans = 0;
  for (let i = 0; i < arguments.length; i++) {
    ans = ans + arguments[i];
  }
  return ans;
}

let result = numValue(10, 20, 30, 40, 50);
// console.log("result is ", result);

// spread operator
function sum(...args) {
  let total = 0;
  for (const arg of args) {
    total = total + arg;
  }
  return total;
}

// console.log(sum(1, 2, 3, 4, 5));

//spread operator only

function sum1(...num) {
  //
  let ans = 0;
  for (let i = 0; i < num.length; i++) {
    ans = ans + num[i];
  }
  return ans;
}

//   console.log(sum(100,200,300,400))

// This Keyword
// when we use the this keyword in the nrml function so 
// "this" refers to the caller and when we use the Arrow function "this" refers to the window object
// Hoisting is not possible in arrow function
const obj = {
  name: "kartik",
  age: 20,
  myFunction: () =>{
    console.log("name is ",this.name);
    console.log("this is ",this)
  },
};

obj.myFunction();
