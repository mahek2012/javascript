// // // function
// // // what --> function is a block of code that performs a specific task.
// // // why --> to avoid code repetition and to make code modular and reusable.
// // // how --> function keyword, name, parameters, body, return statement

// // // type of functions:
// // // function name(params) {}  --> function declaration
// // function abc() {}
// // // let fnc = function (){} --> function expression
// // let fnc = function () {};
// // // let fnc = () => {} --> arrow function --> fat arrow function
// // let fnc1 = () => {};

// // function temp_cart() {
// //     console.log("Adding Product");
// // }
// // temp_cart();
// // temp_cart();
// // temp_cart();

// // // parameters vs arguments
// // // parameters are the names listed in the function definition (params --> () ni andar lakheli values)
// // // arguments are the real values passed to the function (args --> function call karti () ni andar lakheli (pass kareli values)

// // function cart(product,price) {
// //     console.log("product:", product,"||" , "price:", price)
// // }
// // cart("laptop",200000);
// // cart("mouse",1000);
// // cart("keyboard",2000);

// // // convert into arrow function
// // let cart2 = (product,price) => {
// //     console.log("product:", product,"||" , "price:", price)
// // }
// // cart2("laptop",200000);
// // cart2("mouse",1000);
// // cart2("keyboard",2000);

// // //Default , rest and spread parameter in function
// // //default
// // function abc(v1,v2){
// //     console.log(v1,v2);
// // }
// // abc(20,21);

// // function cart3(product="product", price="price") {
// //     console.log( product, price)
// // }
// // cart3("mobile",90000);

// // //example
// // function abc(v1,v2){
// //     console.log(v1,v2);
// // }
// // abc(20,24);

// // function cart3(product="product", price="price") {
// //     console.log( product, price)
// // }
// // cart3("Tablet",80000);

// // // rest --> Jayre function ma multiple arguments pass karva to
// // // vadhare params banava pade chhe mate te na karvu pade
// // // te mate rest parameter use kariye chhiye (rest ---> ...)
// // // jo function na parameter ni andar lakhvana aave chhe

// // function abcd(v1, v2, v3, v4, v5, v6, v7, v8, v9, v10) {
// //   console.log(v1, v2, v3, v4, v5, v6, v7, v8, v9, v10);
// // }
// // abcd(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// // function abcd1(...numbers){
// //     console.log(numbers);
// // }
// // // cart4("mobile", "laptop", "tablet", "mouse", "keyboard");
// // function abcd2(v1, v2,...numbers) {
// //   console.log(v1, v2,numbers);
// // }
// // abcd2(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);


// // //return or early return
// // // return --> function mathi value bahar mokalva mate
// // function gtvalue1(value){
// //     if (value < 25) return "value is less than 25";
// //     else if (value < 50) return "value is less than 50";
// //     else if (value < 75) return "value is less than 75";
// //     return "value is 100 or more";
// // }
// // let result = gtvalue1(80);
// // console.log(result);
// //first class function
// // function can be treated as variables
// //function can be passed as arguments to other functions
// //function can be returned from other functions    

// // function can be passed as arguments to other functions
// // let fnc = function(){}
// // fnc(function(){})
// // function abc1(v1, v2) {
// //   console.log(v2);
// //   return v1();
// // }
// // abc1(function () {
// //   console.log("first class function");
// // }, "Hello");

// // function abc2(v1, v2) {
// //   return v1();
// //   console.log(v2);
// // }
// // abc2(function () {
// //   console.log("first class function");
// // }, "Hello");

// // //function can be returnede from other function
// // function abc(){
// //     return function(){
// //         console.log("function within function");
// //     }
// // }
// // abc()();

// // function abc(){
// //     return () => {
// //         console.log("arrow function within function");
// //     }
// // }
// // abc2()();

// //higher order function(HOF)
// // function that takes another function as an argument or returns a function as a result (eva fuction je return kare ek function athava acpect kare ek function params ma)
// //function abcd(val){val();}
// //--> abcd(function(){console.log("hello")})
// //function abcd(val){} --> higher order function

// //pure vs impure function
// // pure function --> function je same input par same output aapse ane koi bahar na state ne modify na kare(pure function --> je function bahar na state ne modify na kre)
// let a = 20;
// function change_a(){
//     return "a not change(pure function)" + a;
// } // --pure function
// console.log(change_a());

// // impure function --> function je same input par different output aapse athava koi bahar na state ne modify kare(impure function --> je function bahar na state ne modify kre)
// function change_a1(){
//     a++;
//     return "a changed(impure function)" + a;
// } //--impure function
// console.log(change_a1());

// //closure function
// // function je potana parent function na variables ne access kari shake (rturn thava valo function use karshe parent function na koi variable)(function within function)
// function outer() {
//     let outer_var = "outer function variable";
//     function inner() {
//         console.log(outer_var);
//     }
//      inner();
// }
// outer();

// //lexical scope --> nested function can access variables declared in their outer scope
// function outer1() {
//     let outer_var = "outer function variable";
//     function inner1() {
//         console.log(outer_var);
//         let inner_var = "inner function variable";
//         function most_inner() {
//             console.log(outer_var);
//             console.log(inner_var);
//         }
//         most_inner();
//     }
//     inner1();
// }
// outer1();

// //IIFE --> Immediately Invoked Function Expression
// (function(){})();//function je declare karta j call thay jay
// (function(){
//     console.log("IIFE executed");
// })();
// //hoisting in functions
// //use case --> show projct structure
// temp_fnc();
// function temp_fnc(){
//     console.log("Hoisting in Function ");
// }
// let temp_fnc1 =()=>{
//     console.log("Hoisting in Arrow function");
// };
// temp_fnc1(); 

// temp_fnc2();
// function temp_fnc2(){
//     console.log("Hoisting in Function expression ");
// };


//Example1
sayHi(); 
function sayHi(){}
// sayHello();
// const sayHello = function(){};
//Example2
greet();
function greet(){
  console.log("Hello!");
}
//Example3
// Normal
function add(a, b){
  return a + b;
}
// // Arrow
// const sub = (a, b) => a + b;

//Example4
function welcome(name){
  console.log("Welcome " + name);
}
welcome("user");
//Example5
function temp(a, b, c){
  console.log(a, b, c);
}
temp(1, 2);
//Example6
function temp_user(name = "Guest"){
  console.log("Hello " + name);
}
temp_user();
//Example7
function number(...numbers){
  console.log(numbers);
}
number(1, 2, 3, 4, 5);
//Example8
function calculateTotal(...scores){
    let total = 0;
    for(let i = 0; i <= scores.length; i++){
        total += scores[i];
    }
    return total;
}
//second function
function calculateTotal(...scores){
    let total = 0;
    scores.forEach(function(val){
        total = total + val;
    });
    return total;
}
let sumtotal = calculateTotal(10, 20, 30, 40, 50);
console.log(sumtotal);


// Example 9: Early Return
function checkAge(age){
  if(age < 18){
    return "Too Young";
  }
  return "Access Granted";
}
console.log(checkAge(20));


// Example 10: Return Value
function f(){
  return;
}
console.log(f());

// Example 11: First-class citizens
let fn = function () {
  return "Function as value";
};
console.log(fn());


// Example 12: Function assigned to variable
let n = function () {
  console.log("Hello");
};
n();


// Example 13: Function passed into another function
function abcd(val) {
  val();
}
abcd(function () {
  console.log("Hello");
});


// Example 14: Higher Order Function
function higherOrder(fn) {
  fn();
}
higherOrder(function () {
  console.log("I am callback");
});


// Example 16: Impure Function
let total = 5;
function num(n) {
  total += n;
}
num(3);
console.log(total);


// Example 17: Pure Function
function pureNum(total, n) {
  return total + n;
}
console.log(pureNum(5, 3));


// Example 18: Closure
function outer() {
  let x = 10;
  return function () {
    console.log(x);
  };
}
let inner = outer();
inner();


// Example 19: Closure Counter
function outerCounter() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}
const counter = outerCounter();
counter();
counter();


// Example 20: IIFE
(function () {
  console.log("Initialized");
})();


// Example 21: IIFE with private variable
let fun = (function () {
  let score = 0;
  return {
    getScore: function () {
      console.log(score);
    },
    setScore: function (val) {
      score = val;
    }
  };
})();
fun.getScore();
fun.setScore(10);
fun.getScore();


// Example 22: Function Expression Hoisting
try {
  temp_var();
} catch (e) {
  console.log("Error");
}
var temp_var = function () {
  console.log("Hello");
};


// Example 23: Function Declaration Hoisting
temp_fun();
function temp_fun() {
  console.log("Hello");
}
