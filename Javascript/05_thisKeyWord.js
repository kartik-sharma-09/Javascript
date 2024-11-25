// this: this is a keyword that is used to refference the object that is executing the current running function

function test1() {
  console.log(this);
}
// test1();
// Arrrow function does not have their own scope

// const user = {
//   firstName: "kartik",
//   lastName: "Sharma",
//   fullName: function () {
//     const arrowFunction = () => {
//       console.log(this);
//       console.log(this.firstName + " " + this.lastName);
//     };
//     arrowFunction()
//   },
// };

// user.fullName();

// const user = {
//   firstName: "kartik",
//   lastName: "Sharma",
//   hobbies: ["Programming", "chess"],
//   listHobbies: function () {
//     this.hobbies.forEach(function (hobby) {
//       console.log(this.firstName);
//       console.log(hobby);
//     }, this);
//   },
// };

// user.listHobbies();

// this is going to reffer to the specific object that we created.
// function User(name) {
//   this.name = name;
//   console.log(this);
// }

// const kartik = new User('kartik')

// const person = {
//   name: "kartik",
//   age: 20,
//   greet: function () {
//     console.log("Hello my name is " + this.name);
//   },
// };

// person.greet()

// this.k = 7;
// const getParams = () => {
//   console.log(this.k);
// };

// getParams()

// this refers to the currnet context
// iin browser the global Object is Window

// let user2 = {
//   Username: "kartik",
//   price: 777,

//   welcomeMessage: function () {
//     console.log(`${this.Username} , welcome to website `);
//     console.log(this)
//   },
// };

// user2.welcomeMessage()
// user2.Username ='rohan'
// user2.welcomeMessage()

// function temp(){
//     let myName = 'Kartikkk'
//     console.log(this.myName)
// }

// temp()

const tea2 = function () {
  let myName = "Kartikkk";
  console.log("name is ",this.myName);
};
tea2()

const tea = () => {
  let myName = "Kartikkk";
  console.log(this);
};
// tea()

// const addTwo = (num1, num2) => {
//   return num1 + num2;
// };

//  console.log(addTwo(4,5))

//  const  addTwo = (num1,num2)=>  (num1 + num2)
const addTwo = (num1, num2) => ({ name: "kartik" });

//  console.log(addTwo(4,5))

// const person = {
//     name:'kartik',
//     age: 20,
//     greet: function(){
//         console.log('normal function is ' + this.name)
//     }
// }

// const person = {
//   name: "kartik",
//   age: 20,
//   greet: function () {
//     let name = "arjun";
//     console.log("normal function is " + this.name);
//   },
// };

// person.greet()

function test() {
  console.log("this is ", this);
}

// test()

// const user={   // arrow function does't have their own this scope
//     firsName:'kartik',
//     lastName:'sharma',
//     fullName: ()=>{
//         console.log("this is ",this)
//         console.log(this.firsName + " " + this.lastName)
//     }
// }

// user.fullName()

// const user = {
//   firsName: "kartik",
//   lastName: "sharma",
//   fullName: function () {
//     const arrowFunction2 = () => {
//       console.log("this is1 ", this);
//       console.log(this.firsName + " " + this.lastName);
//     };
//     const arrowFunction = () => {
//       console.log("this is2 ", this);
//       console.log(this.firsName + " " + this.lastName);
//     };
//     arrowFunction();
//     arrowFunction2()
//   },
// };

// user.fullName();

// const user = {
//   firstName: "kartik",
//   lastName: "sharma",
//   hobbies: ["study", "bookReading"],
//   listHobbies: function () {
//     this.hobbies.forEach(function (hobby) {
//       console.log(this);
//       console.log(hobby);
//     }, this);
//   },
// };

// user.listHobbies()

// ----------------Binding Rules: Global, Object Method, Constructor, call(), apply(), bind()--------------------

// let name = {
//   firstName: "kartik",
//   lastName: "sharma",
// };

// let = printFullName = function (hometown, state) {
//   console.log(`${this.firstName} ${this.lastName} from ${hometown}, ${state} `);
// };
// printFullName.call(name, "HMH", "Rajasthan");

// let name2 = {
//   firstName: "Manoj",
//   lastName: "kumar",
// };

// function borrowing

// Call() method
// printFullName.call(name2, "rohini", "Delhi"); // in call method we pass the argument individually

// The Only Difference between the call and apply method is the way we pass argument

// apply() method
// printFullName.apply(name2, ["rohini", "Delhi"]); // and in apply method we pass the argument using the array

// bind() method
// The bind method looks exactly the same as call method but the only difference is instead of directly
// calling this method over here the bind method binds the this method printFullName  with the object and returns the copy of theat method

//  let printMyName = printFullName.bind(name2, "rohini", "Delhi");
//  console.log("printMyName", printMyName);
//  printMyName();

//bind gives u a copy which can be invoke later

let name = {
  firstName: "kartik",
  lastName: "sharma",
};

let printFullName = function (hometown, state) {
  console.log(
    `my name is ${this.firstName} ${this.lastName} and hometown is ${hometown} ${state}`
  );
};

// printFullName.call(name, "HMH", "Rajasthan"); //
// printFullName.apply(name, ["town", "Rajasthan2"]);

// let printMyNameIs = printFullName.bind(name, "Gurgaon", "Haryana");
// console.log(printMyNameIs);
// printMyNameIs();

// let obj = {
//   name: "Kartik",
// };

// function sayHello(age,proffession) {
//   return "hello " + this.name +" is "+  age  + " and is an " + proffession;
// }

// const bindFunc = (sayHello.bind(obj,[20,'Frontned Engineer']));
// console.log(bindFunc)

// -----------------------OutputBased Question-------------------------------------

// const person = {
//     name: 'Venom'
// }

// function sayHi(age){
//     return `${this.name} is ${age}`
// }
// console.log(sayHi.call(person,20))
// console.log(sayHi.bind(person,21))

// -------------------------------------------------------

// const age = 10
//  var person = {
//     name:'venom',
//     age:20,
//     getAge: function(){
//         return this.age
//     }
//  }

//  var person2 = {age:38,name:'viper'}
//  console.log(person.getAge.bind(person2)())

// ------------------------------------------------------------

var status = "Cool"; // global variable

setTimeout(() => {
  const status = "Heart";

  const data = {
    status: "mango",
    getStatus() {
      return this.status; // mango
    },
  };

  //   console.log(data.getStatus());  // mango
  //   console.log(data.getStatus.call(this));  // undefined
}, 0);

// -------------------------------------------------------

const animals = [
  { species: "Lion", name: "King" },
  { species: "Whale", name: "Queen" },
];

function printAnimals(i) {
  this.print = function () {
    // console.log("#" + i + " " + this.species + ": " + this.name);
  };
  this.print();
}

for (let i = 0; i < animals.length; i++) {
  printAnimals.call(animals[i], i);
}

// ---------------------------------------------------------

let person = {
  name: "kartik",
  age: 20,
};

let personFullDetail = function PersonData(city,state) {
  console.log(`name is ${this.name} and age is ${this.age} from ${city} ${state}`);
}

let newPerson = personFullDetail.bind(person, ["HMH","Rajasthan"])
console.log(newPerson)
