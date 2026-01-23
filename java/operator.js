// operators
// Arithmetic, comparison, logical, assignment, unary, ternary
// Arithmetic:
// +, -, /, *, **, %
// + --> Add and concatenation
// ex. 1 + 2 --> Add
// "user" + "name" --> concat
// 5 + "5" --> concat, 5 + 5 --> Add
// -
// ex. 2 - 1
// /, *
// ex. 240 / 2, 25 * 2
// % (modulus) (sheshfal) (remainder)
// ex. 12 % 4 --> 0
// ex. 9 % 2 --> 1
// ** (square) (exponentiation)
// ex. 2 ** 3 --> 8
// Comparison (ans: true, false)
// ==
// ex. 12 == 13, 12 == "12" 
// (don't check type, only check value, not strict comparison)
// ===
// ex. 12 === "12" 
// (check type and value, strict comparison)
// !=
// ex. 12 != 13 
// (reverse of ==, not strict comparison)
// !==
// ex. 12 !== "12" 
// (reverse of ===)
// >=
// ex. 22 >= 22
// <=
// ex. 13 <= 13
// <
// ex. 12 < 113, 12 < 9, 22 < 22
// >
// ex. 12 > 113, 12 > 9, 13 > 13

// assignment
// =  give a value, value assignment operator
// ex. let a = 12;
// +=
// ex. a += 3;  (add value into old value and save it into a)
// -=
// ex. a -= 4;  (subtract value into old value and save it into a)
// *=
// ex. a *= 2;
// /=
// ex. a /= 2;
// %=
// ex. a %= 2;  (give remainder)

// logical
// && (AND)
// ex. true && true  --> true
//     12 < 13 && 14 < 15  --> true
// false && true --> false
//     12 < 10 && 14 < 15  --> false
// true && false --> false
// false && false --> false

// || (OR)
// ex. true || true  --> true
// false || true --> true
// true || false --> true
// false || false --> false

// ! (NOT)
// ex. !true  --> false
// !false --> true
// !!12  --> false --> !!12 --> true

// Unary Operator
// + - !  typeof  ++ --  
//+
// convert string to number
// ex.  +"5" --> 5
// +"Name"   --> NaN
// "5" + 5   --> 55
// +"5" + 5  --> 10
// -
// ex. -5
// ! (NOT)
// ex. !12  --> false
// typeof
// ex. typeof "name"  --> string
// ++
// ex.let a = 12
// a++ --> 12   // post  ex. a++ + a  => 25 
// a++ --> 13   // pre  ex. a++ + a  => 26 
// --
// ex. let a = 3;
// a++       
// a--

// Ternary Operator
// ? :

// syntax:
// condition ? true_case : false_case
// ex.let a = 12 > 13 ? console.log("true"): console.log("false");
// typeof & instanceof
// typeof null  --> object   (JavaScript bug / special case)
// typeof []    --> object
// let p = [];
// p instanceof Array  --> true
// instanceof
// reference data type ka type check karne ke liye use hota hai
// reference data type ke liye typeof use nahi karna chahiye
// typeof NaN   --> number
// typeof       --> primitive data type ke liye use karo
// instanceof   --> reference data type ke liye use karo

//Example 1
let x = 10;
let y = 20;

if (x > 5 && y > 5) {
  console.log("Both are greater than 5");
} else {
  console.log("One or both are not greater than 5");
}
//Example 2
let isAdmin = true;
let isLoggedIn = false;

if (isAdmin || isLoggedIn) {
  console.log("Access granted");
} else {
  console.log("Access Denied");
}
//Example 3
let temp = 35;

if (!(temp > 30)) {
  console.log("Hot day");
} else {
  console.log("Pleasant day");
}
//Example 4
let a = 0;

if (a) {
  console.log("Truthy value");
} else {
  console.log("Falsy value");
}
//Example 5
let score = 78;
let grade =
  score >= 90 ? "A" :
  score >= 80 ? "B" :
  score >= 70 ? "C" : "D";

console.log("Grade:", grade);
//Example 6
let points = 120;
let status =
  points >= 100 ? "Gold" :
  points >= 50 ? "Silver" : "Bronze";

console.log("Status:", status);
//Example 7
let loggedIn = true;
let hasToken = false;

let access = loggedIn && hasToken ? "Allow" : "Deny";
console.log("access:", access);
//Example 8
let g = 5;
g++;
console.log(g);
//Example 9
let m = 8;
++m;
console.log(m);
//Example 10
let b = 4;
let c = b++;
console.log(b, c);
//Example 11
let r = 4;
let q = ++r;
console.log(r, q);
//Example 12
let n = 10;
console.log(n--);
console.log(n);
//Example 13
let s = 5;
let result = s++ + ++s;
console.log(result);
//Example 14
let likes = 100;
function likePost() {
//   result ++likes;
}
console.log(likePost());
console.log(likes);
//Example 15
let count = 5;
if (count-- === 5) {
  console.log("Matched");
} else {
  console.log("Not Matched");
}

