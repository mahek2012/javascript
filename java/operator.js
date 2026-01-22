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
