// Promise

// const myPromise = new Promise((resolve, reject) => {
//   let success = true;

//   if (success) {
//     resolve("congrats! your winner");
//   } else {
//     reject("Thank you better luck next time");
//   }
// });

// myPromise
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// ---------------------------------------------------------------------

let x = 10;
x = "Hello";
console.log(x); // we get hello here
//  In task 1
// if we replace let with const  the console show the error because in const we cann't re declare the value

function isTypeMatch(a, b) {
  if (typeof a == typeof b) {
    return true;
  } else{
    return false
  }
}


isTypeMatch(42, 42); // true
isTypeMatch([], []); // true
isTypeMatch({}, {}); // true
isTypeMatch(10, "10"); // false
     
