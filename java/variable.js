// word vs keywordas
//variable --temp data store
//var , let and const
var a ="temp";
var _123="hello";
var $123="hello";

//var 123 ="number"
b = 24; //never use
//let
//let temp = "abc"

//const
const temp_const = "hello world!!";
//console.log(a ,_123,$123,b)

//declaration and intializations
var d; //declare
var temp_d = 12; //declare and intialize for first time
//var add value into window
//var is function scoped
//var can be re-declared and reassigned
var name = "username";
var name1 = "username";


//Reassignment, redeclaration
var temp = 12;
temp ="number";//reassignment
var temp = "text";//redeclaration
//let temp_a=24;
//var temp_a=34;//you can't redeclare let variable
const temp_b = "name"
//temp_b = "username" //you can't reassign const variable

//scope(global,block,functional)
var e = 23; //global scope
console.log("Global scope " + e);
{
var e = 25; //block scope
console.log("Block scope " + e);
}
function abc(){
var e = 30; //functional scope
console.log("Functional scope " + e);
}
//abc();
console.log("Outside" + e);


let f = 23; //global scope
console.log("Global scope let variable" + f);
{
let f = 25; //block scope
console.log("Block scope let variable" + f);
}
function abc(){
let f = 30; //functional scope
console.log("Functional scope let variable" + f);
}
abc();
console.log("Outside Let Variable" + f);

//temporal Dead zone (TDZ)
// console.log(h);
// var h = 24;

//console.log(g);
// console.log(j);
// let j = 12;

//Hoisting Impact
//Hoisting --> when your create a variable into js that break into two part first is declare part that go to up and there initialization part that  go down
var temp_d = 12;
//var temp_d ; -->undefined; --> that go to up
//temp_d = 12; -->that go to down (means stuck into line 66)
//into two part first is declare part that go to up and there initialization part that go down

var temp_d = 12;

// var temp_d; --> undefined; --> that go to up
// temp_d = 12; --> that go to down (means stuck into line 66)
// if you use console.log before initialization that give you
//undefined;

let temp_d_let = 24;

// let variable not use before initialization
// if you use console.log before initialization that give you error;
// Hoisting Impact on var, let, const
/*
var   --> hoist --> undefined
let   --> hoist --> error
const --> hoist --> error
*/


//Example 1
// console.log(nm);
// let nm = "name";

//Example 2
// console.log(b);
// var b = "username";

//Example 3
// var x = 1;
// {
//     var x = 2;
// }
// console.log(x);

//Example 4
// let m = 10;
// {
//     let m = 20;
//     console.log("Inside:", m);
// }
// console.log("Outside:", m);

//Example 5
const person = { name: "demo" };

person.name = "user"; 
//person = {};
console.log(person.name)          
