//Data Types:
//Two Type of Data Types:
//1.Primitive Data Types
//Copy --> real value
let a = 5;
let b = a;

// types: string, number, boolean, null, undefined, symbol, bigint

//2. Non-primitive Data Types (Reference Data Types) [], (), {}
// copy --> give refrence of parent
let d = [1, 2, 3];
let e = d;

//types: array [], objects {}, function()



//<-- Primitive Data Types-->
// types: string, number, boolean, null, undefiend, symbol, bigint
//string:
// ''- single quotes
// ""- double quoates
// `` - backticks
let m = "name";
m = "username";
m = `firstname`;

//number
let f = 12;
f = 12.25;
f = -25;

//boolean:
let g = true;
g = false;

//null:
//you give a value
let i = null;

//undefined:
//you don't give a value,by default value
let h;


// symbol:
// unique immutable value
let u1 = Symbol("uid");
let u2 = Symbol("uid");
// check u1 === u2
let obj = { uid: 1, name: "test", email: "test@test.com" };
let u3 = "uid";
let u4 = Symbol("uid");
obj[u3] = "001";

// bigint:
// check range of number , Number.MAX_SAFE_INTEGER
let number = 9007199254740991;
number = number + 6;
let num2 = 9007199254740991n;
num2 + 4n;



// <----- Non-Primitive Data Types ----->
// types: arrays [], objects {}, functions ()
let temp_array = ["user1", "user2", "user3"];
let temp_obj = {name: "test",age: 9,phone_number: 558998554};
let profiles = [
  { name: "test1", age: 10, phone_number: 98989775 },
  { name: "test2", age: 15, phone_number: 9898889775 },
  { name: "test3", age: 11, phone_number: 9898975575 }
];
function name(params) {}

// Dynamic Typing
let u_name = "username";
u_name = 123;
u_name = {};
// javascript --> typescript

// typeof quirks
// typeof 12
// check type of variable use --> ex. typeof NaN, typeof null, 1 + "1" = "11", 1 == "1"
// why typeof NaN --> number
// NaN is a failed number operations that why that type is number
// ex. "hello" - 5 --> NaN

// type coercion
// "5" + 1 // + --> Value Add and Coeration (Mix)
// "5" - 1

// Truthy vs Falsy Values
// 0, false, "", null, undefined, NaN, document.all --> false
// ex. !!0 --> check value is true and false
// ex. if(null){}, js convert it into false
// ex. if(-1){}, js convert it into true
// all --> true


//Example 1
true + false
//Example 2
null + 1
//Example 3
"12" + 12
//Example 4
!!undefined
//Example 5
"12" - 1
//typeof NaN
typeof NaN
Number("hello") // NaN
"hello" + 5 // "hello5" (string), NOT NaN
"hello" - 5 // NaN
//Undefined vs Null
let x;
console.log(x);
let y = null;
console.log(y);
