//Debouncing in JavaScript is a technique used to control how often a function gets executed.
// It ensures that a function doesn't run too often, even if the event it's attached to happens many times in a short period.

// let counter = 0;

// const getData = () => {
//calls an API and get Data
//   console.log("Fetching Data...", counter++);
// };

// const doSomeMagic = function (fn, d) {
//   let timer;
//   return function () {
//     let context = this;
//     args = arguments;
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       fn.apply(context, args); // why we use the apply here
//     }, d);
//   };
// };

// const betterFunction = doSomeMagic(getData, 300);

// ==============MY function(Practice)=========================

// let increment = 0;
// const handleSubmit = () => {
//   console.log("submitting the data..", increment++);
// };

// const debounceFunction = function (fn, d) {
//   let timer;
//   return function () {
//     clearTimeout(timer);
//     setTimeout(() => {
//        fn()
//     }, d);
//   };
// };

// const newFunction = debounceFunction(handleSubmit, 800);

//================================Throttling=================================

// const loggerFunc = () => {
//     console.count("Throttled Function");
//   }

//   const throttle = (fn, limit) => {
//     let flag = true;
//     return function(){
//       let context = this;
//       let args = arguments;
//       if(flag){
//         fn.apply(context, args);
//         flag = false;
//         setTimeout(() => {
//           flag=true;
//         }, limit);
//       }
//     }
//   }

//   const betterLoggerFunction = throttle(loggerFunc, 1000);

//   window.addEventListener("resize",betterLoggerFunction);

// This is the normal Function without Throttling
//Check the console for the difference between the calls of Normal Function and the Throttled Function
//   const normalFunc = () => {
//     console.count("Normal Function");
//   }

//   window.addEventListener("resize",normalFunc);

// ==================DEBOUNCE=======================

//Debouncing and throttling in javascript
// Ques 1 - Create a UI and add debounce as follows =>
//           --> Show "Button pressed <X> Times" every time button is pressed
//

// const btn = document.querySelector(".increment_btn");
// const btnPress = document.querySelector(".increment_pressed");
// const count = document.querySelector(".increment_count");

// var pressedCount = 0;
// var triggerCount = 0;

// const debouncedCount = _.debounce(() => {
//   count.innerHTML = ++triggerCount;
// }, 800);

// btn.addEventListener("click", () => {
//   btnPress.innerHTML = ++pressedCount;
//   debouncedCount()
// });

// ==============THROTTLE=================

// --> Increase "Triggred <Y> Times" count after 800ms of debounce
// const btn = document.querySelector(".increment_btn");
// const btnPress = document.querySelector(".increment_pressed");
// const count = document.querySelector(".increment_count");

// var pressedCount = 0;
// var triggerCount = 0;

// const throttledCount = _.throttle(()=>{
//     count.innerHTML = ++triggerCount
// },800)

// btn.addEventListener("click", () => {
//   btnPress.innerHTML = ++pressedCount;
//   throttledCount()
// });

// =======================================
// Ques 3 Create Debounce() Polyfill Implementation

// const btn = document.querySelector(".increment_btn");
// const btnPress = document.querySelector(".increment_pressed");
// const count = document.querySelector(".increment_count");

// var pressedCount = 0;
// var triggerCount = 0;

// const myDebounce = (cb, d) => {
//   let timer;

//   return function (...args) {
//     if (timer) clearTimeout(timer);
//     timer = setTimeout(() => {
//       cb(...args);
//     }, d);
//   };
// };

// const debouncedCount = myDebounce(() => {
//   triggerCount += 1;
//   count.innerHTML = triggerCount;
// }, 800);

// btn.addEventListener("click", () => {
//   btnPress.innerHTML = ++pressedCount;

//   debouncedCount();
// });

// ===========Ques 4 Create Debounce() Polyfill Implementation==========

// const btn = document.querySelector(".increment_btn");
// const btnPress = document.querySelector(".increment_pressed");
// const count = document.querySelector(".increment_count");

// var pressedCount = 0;
// var triggerCount = 0;

// const myThrottle = (cb,d) =>{

// }

// var throttled = myThrottle(()=>{
//     count.innerHTML = ++triggerCount
// },800)

// btn.addEventListener("click", () => {
//   btnPress.innerHTML = ++pressedCount;
//   throttledCount()
// });

//==================procoder==========

// const inputElement = document.querySelector("input");
// const span = document.querySelector("h2 span");

// const callApi = function (e) {
//   console.log("Calling API", e.target.value);
// };

// inputElement.addEventListener("input", callApi);

// const updateNumber = throttle(()=>{
//     span.innerText = ++ span.innerText
// },100)

// document.addEventListener("mousemove", () => {
// updateNumber()
// });

// function throttle(func, delay = 1000) {
//   let timerId;
//   return (...args) => {
//     if (timerId) return;
//     timerId = setTimeout(() => {
//         timerId = null
//       func(...args);
//     }, delay);
//   };
// }

// ===========================

// let increment = 0;
// const handleSubmit = () => {
//   console.log("submitting the data..", increment++);
// };

// const debounceFunction = function (fn, d) {
//   let timer;
//   return function () {
//     clearTimeout(timer);
//     setTimeout(() => {
//        fn()
//     }, d);
//   };
// };

// const newFunction = debounceFunction(handleSubmit, 800);

// let num = 0;
// function inputHandle() {
//   console.log("Calling Api", num++);
// }

// const debounceFunction = function (fn, d) {
//   let timer;
//   return function () {
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       fn();
//     }, d);
//   };
// }

// const newFunction  = debounceFunction(inputHandle,500)

// ============thapa============

// const normal_div = document.querySelector(".n_count");
// const throttle_div = document.querySelector(".t_count");
// const debounce_div = document.querySelector(".d_count");
// let n_cnt = 0;
// let t_cnt = 0;
// let d_cnt = 0;
// let isScrolling = true;

// const normalCount = () => {
//   n_cnt++;
//   normal_div.innerHTML = `Normal Count: ${n_cnt}`;
// };

// const throttleCount = () => {
//   if (isScrolling === true) {
//     t_cnt++;
//     throttle_div.innerHTML = `Throttle Count: ${t_cnt}`;
//     isScrolling = false;
//     setTimeout(() => {
//       isScrolling = true;
//     }, 1000);
//   }
// };

// let interval;

// const debounceCount = () => {
//   clearTimeout(interval);
//   interval = setTimeout(() => {
//     d_cnt++;
//     debounce_div.innerHTML = `Debounce Count: ${d_cnt}`;
//   }, 1000);
// };

// const showCount = () => {
//   normalCount();
//   throttleCount();
//   debounceCount();
// };

// ==============Optional changing===========

// let student = {
//   personalDetail: {
//     name: "kartik",
//     age: 20,
//     city: "HMH",
//   },
// };

// console.log(student?.collegeData?.id)

// let other={ 

// }


//================= Variables and Data Types:=================

let foo = 42
 foo = 'bar'
 foo = true
 console.log(foo)

