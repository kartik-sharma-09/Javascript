// Type Coercion => is implicit and happens automatically based on
//  the operation being performed. ( this operation done by the JS engine)

// Type Conversion => is explicit and happens when you manually convert a value from
//  one type to another using specific functions. (by a devloper )
// Converting one data to the another one => Type Conversion

let num = 3 + "1";

// console.log("num is ", num)

let temp = "hello" + 7;
// console.log('temp is ',typeof temp)
// in + addition js convert the number into string because it is the safer method

let num1 = 1 * "3"; // multiply
// console.log(num1)

let numm = 5 - "3";
// console.log(num1)

let name1 = "hello" - "ello"; // here we get the NaN beacuse string didn't except to be minus
// console.log(name1)

//[] == 0
// true
// [] + 1
// '1'
// [].toString()
// ''
// [1,2,3].toString()
// '1,2,3'

//Type conversion (or typecasting) means
//  transfer of data from one data type to another.

let str = "Javascript";
// console.log(typeof str)

str = Number("Javascript");

// console.log( typeof str)

const value = "5";
const value2 = 9;

let sum = value + value2;
// console.log(sum)

let num3 = 4 > "2";
let num4 = true + false; // because ture = 1 and false = 0
let num5 = 5 + 6 + "number"; // here we get the 6 + 5 = 11+'number' => '11number' (pehle + operation hoga)
let num6 = [1] > null;
let num7 = "true" == true;
false;
let num8 = 0 == true;
// console.log(num2)

let score = false;
// console.log(typeof score)

let valueScore = Number(score);
// console.log(valueScore)

//"33" => 33
// "33abc" => NaN and type of NaN is Number
// true => 1 ; false => 0

let Login = 1;
let boo = true;
let sumUp = Login == boo;
// console.log(sumUp)

// 1 => true ; 0=> false
// "kartik" => true

let NewNum = 77;
let strNewNum = String(NewNum);
// console.log(strNewNum)
// console.log(typeof strNewNum)

// Type of Coersion  => Implicit  vs Explicit
//Implicit => Automatic Conversion

let valueis = 5 + 4 + "kartik";

//  console.log(valueis)

//  Explicit => initiated by code

let stris = "67";
// console.log(typeof stris)
let newStris = Number(stris);
// console.log(typeof newStris)

let boolValue = -0;
// console.log(typeof boolValue);

let newboolValue = Boolean(boolValue);
// console.log( newboolValue);

let result = '15' - null  + 1
// console.log(typeof result)

// console.log(result)

// -------------String Conversion -------------------

// string() for explicit-
//string(boolean) -- string(true) => 'true'
//string(number) -- string(123) => '123'
// string(undefined) -- string(undefined) => 'undefined'
// string(null) -- string(null) => 'null'
// string(symbol) -- string(symbol()) => 'symbol()'

// string + string -- 'kartik' + 'sharma' => 'kartiksharma' 


// '+' binary operations for implicit
// string + boolean -- 'kartik'+ true => 'kartikfalse'
// string + number -- '8'+ 8 => '88'
// string + undefined -- '100'+ undefined => '100undefined'
// string + null -- 'kartik'+ null => 'kartiknull'
// string + symbol -- 'kartik'+ symbol() => 'TypeError' (Implicit Conversion of symbol is not allowed when converting into string)


// -------------Boolean Conversion:----------------

// ------------falsy value in Js ------------ "", 0, null, undefined, false, NaN

// Boolean() for explicit-
// Boolean(string) -- Boolean('kartik') > true Boolean("") > false
// Boolean(number) -- Boolean(45) > true  Boolean(0) > false
// Boolean(undefined) -- Boolean(undefined)  > false
//  Boolean(null) --  Boolean(null) > false
//  Boolean(symbol()) --  Boolean(symbol()) > true

//45 && 40
40
45 && 0
0

0 || 10
10

"kartik" || 45
'kartik'

!"kartik"
false

!undefined
true

!!"kartik"
true

!!undefined
false

5 + 4 ? "hello" : "oh no"
'hello'

// ---------------Number conversion----------------

// Number for explicit-
// Number(boolean) -- Number(true) -> | Number(false) > 0
// Number(string) -- Number('54') > 45
// Number(undefined) - NaN
// Number(null) -- 0
// Number(symbol) --  Type Error

//--------------For implicit--------------------
// comparison operators (<,>,<=,>=)
// bitwise operators (| & ^ ~)
// arithmatic operators (- + *%) NOTE. that binary(+) does not trigger numeric conversion , when any operand is a string 


// two rules 
// 1. null equals only to null or undefined, and does not equal to anything else
//2. NaN does not equal to anything, even itself

