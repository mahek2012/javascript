// // Array -- Hold multiple values at same time
// // ["Mobile", "Laptop", "Tablet", 5000, 25, 588 ]
// // ["a", "b", "Hello"]
// // [2, 4, 5, 6]

// // create
// // variable_name = [values]
// // let arr =[1,2,3,4];

// // // access
// // // position = [0 1 2 3]
// // //access
// // // array_name[position/index]
// // arr[0]

// // //modify
// // // array_name[position/index] = new_value
// // arr[0] = 10;
// // arr[1] = 20;
// // arr[2] = 30;
// // arr[3] = 40;

// //Array Methods:
// //push,pop,shift,unshift,splice,slice,reverse,sort
// //push --> enter new value into array -- place it into last
// let a = [1,2,3,4,5];
// //variable || function.method --> koi variable ke function in pacchal dot(.) kari ne lakho to te method kevai
// a.push(700); 
// // use case -- enter new products into existing product list

// //pop --> remove last value into array
// let b = [10,20,30,40];
// b.pop();
// // use case -- remove last product you add into your list

// //shift --> remove first value into array
// let c = [30,40,50,60];
// c.shift();
// //use case -- remove old product automatic after sometimes

// //unshift -- add value into array -- first
// let d = [52,35,65,85];
// d.unshift(20);
// // use case -- add a value into top of that data you receive

// // splice – remove value into array –– specific position and
// // specific number of values
// // into () – first index(position), how many value you want to
// // remove
// let e = [50, 60, 30, 40, 10];
// e.splice(3, 2);
// // e.splice(3, 0, 50, 100)
// // use case –– select msg and remove multiple msg at on click

// // slice – copy values from array –– specific position and
// // specific number of values
// // new variable = array_name.slice(start index, end index)
// // start index –– include into copy
// // end index –– not include into copy
// let f = [100, 50, 25, 0];
// let new_f = f.slice(1, 3);
// // use case –– copy specific data and save it into new variable
// //generate a report based on date and generate a file or save the file into your local machine

// // splice vs slice
// // splice -- remove value into main array or modify new array
// // slice -- copy value from main array and create a new array that hold the value that you can into

// // reverse –– reverse the array values
// let g = [25, 30, 35, 40, 85];
// //g.reverse();
// // use case -- show latest update first into your frontend

// //sort -- set into ascending order
// let h = [50, 20, 80, 10, 40];
// h.sort();
// //let h = [11,62,3,4,25];
// //let sr = h.sort(function(a,b){
// // return a-b; // ascending order
// // })

// //let h = [11,62,3,4,25];
// //let sr = h.sort(function(a,b){
// // return b-a; // decending order
// // })
// // use case -- sort product price low to high or high to low

// // Example 1: push()
// let tasks = ['Wake up', 'Brush teeth'];
// tasks.push('Buy milk');


// // Example 2: pop()
// let notifications = ['Email', 'Message', 'Reminder'];
// notifications.pop();


// // Example 3: shift()
// let customers = ['Customer1', 'Customer2', 'Customer3'];
// customers.shift();


// // Example 4: unshift()
// let playlist = ['Song B', 'Song C'];
// playlist.unshift('Song A');


// // Example 5: splice()
// let students = ['Mike', 'Alex', 'Emma', 'Sophia'];
// students.splice(1, 1, 'John', 'Sara');


// // Example 6: splice()
// let menu = ['Burger', 'Pizza', 'Pasta', 'Salad'];
// menu.splice(1, 2);


// // Example 7: slice()
// let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
// let weekend = days.slice(5, 7);


// // Example 8: reverse()
// let levels = ['Easy', 'Medium', 'Hard'];
// levels.reverse();


// // Example 9: sort()
// let scores = [45, 12, 78, 34, 89];
// scores.sort((a, b) => a - b);


// // Example 10: sort() with numbers
// let prices = [199, 49, 999, 299, 149];
// prices.sort((a, b) => a - b);


// // Example 11: slice() vs splice()
// let products = ['Laptop', 'Phone', 'Tablet', 'Monitor', 'Keyboard'];
// let firstThree = products.slice(0, 3);


// // Example 12: splice() complex
// let colors = ['Red', 'Green', 'Blue', 'Yellow'];
// colors.splice(2, 1, 'Purple', 'Orange');


// // Example 13: reverse() + push()
// let steps = ['Step 1', 'Step 2', 'Step 3'];
// steps.reverse();
// steps.push('Final Step');


// // Example 14: sort() strings
// let names = ['alice', 'Bob', 'charlie', 'David'];
// names.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));


// // Example 15: Combination Question
// let movies = ['Avatar', 'Titanic', 'Gladiator'];
// movies.push('Inception');
// movies.shift();
// movies.sort();


// // Example 16: splice() return value
// let nums1 = [1, 2, 3, 4];
// let removed = nums1.splice(1, 2);


// // Example 17: slice() immutability check
// let nums2 = [10, 20, 30, 40];
// let result = nums2.slice(1, 3);


// // Example 18: reverse() mutation
// let letters = ['a', 'b', 'c'];
// let reversedLetters = letters.reverse();


// // Example 19: splice() edge case
// let arr1 = ['x', 'y', 'z'];
// arr1.splice(1, 0, 'new');


// // Example 20: slice() negative index
// let values = [100, 200, 300, 400, 500];
// let sliced = values.slice(-3, -1);


// // Example 21: splice() vs slice()
// let arr2 = ['a', 'b', 'c', 'd'];
// // a) Update the original array → splice()
// arr2.splice(1, 1);   // removes 'b'
// // arr2 becomes ['a', 'c', 'd']
// let arr3 = ['a', 'b', 'c', 'd'];
// // b) Keep the original array unchanged → slice()
// let newArr = arr3.slice(1, 3);
// // arr3 remains ['a', 'b', 'c', 'd']
// // newArr is ['b', 'c']


// // Example 22: Chained methods
// let arr4 = [1, 2, 3];
// arr4.push(arr4.shift());

// //use case -- sort product price low to high
// let arr9 = [10, 2, 5, 20, 30]
// let sort_var = arr9.sort(function(a,b){
//  return a-b; // ascending order
// });
// let arr0 = ['b', 'f', 'z', 'q', 'm', 'k']

// For Each Loop
// for Each --- Array ni darek value mate loop chalse
let i = [10, 35, 40, 68];

i.forEach((val) => {
  let new_val = val + 10;
  console.log(new_val);
});

[5, 58, 42, "Hello"].forEach(val =>{
  let new_arr = val + 2;
  console.log(new_arr)
})


// .map() Method:
// map tyare j use karvu ke jyare ek new array create karvo chhe
// first map create a black array -- only for understanding
let data = [10, 20, 50, 40, 15];
// same like a for each loop but map return a new array
let temp_data = data.map((val) => {
  if (val > 20) {
    return val;
  }
});

// use case -- data ma thi specific data new array ma store karvo hoy
// ex. product ma thi specific category na product new array ma store karva hoy
// if you want to show only electronics producat on your homepage
let marks = [10,5,20,25,15]
let final_marks = marks.map((val) => {
  if (val == 5){
    return val + 4;
  }
  return val;
})


//filter 
// filter tyare use karvu ke jyare ek new array create karvo chhe with condition 
//in return true/false
// if true --> add into new array
//id else(false) --> not add into new array
let laptops_price = [15000,20000,30000,65000,99000,45000];

let expensive_laptops = laptops_price.filter((price) => {
  if (price > 30000) return true;
});
// je value 30000 thi vadhare che te new array ma add thase and biji value ne array ma add nhi kare
// use case -- data ma thi specific data new array ma store karvo hoy based on condition
// ex. poduct ma thi specific price na producat new array ma store karva hoy
// if you want to show only expensive producat on your homepage
// if you want to filter producat based on price
let product_type = ["Mobile", "Tablet", "Laptop","Mouse", "Keyborad"];

let filter_product_type = product_type.filter((type)=> {
  if (type === "Tablet" || type === "Mobile") return
true;
});


// reduce
// reduce tyare j use karvu ke jare ek single value calculate karvi hoy from array
let total_price = [15, 68, 45, 58, 52, 48];

let final_price = total_price.reduce((accumulator,
val) => {
  return accumulator + val;
}, 0); // intial value of accumulator

// 0 + 10 => 10
// 10 + 10 => 20
// 20 + 10 => 30
// 30 + 10 => 40
console.log("final Price:", final_price)
//accumulator --> je value functipon ma return thase te accumulator ma store thase --> accumulator name change kari sako cho
// val --> array ni darek value
// use case -- data ma thi ek single value calculate karvi hoy
//ex. product ma thi total price calculate karvi hoy

// find
// find tyare j use karvu ke jare array mathi ek value find karvi hoy based on condition
// find() return kare chhe array no element --> callback no return value nahi
// never returns what you return inside it
// returns the array element itself
// .find() stops at the first match
// It does not continue looping

let product = ["Laptop", "Mobile", "Tablet","Desktop", "Smart Watch"];
let find_product = product.find( (item) => {
  console.log("can't find product"); // not working
// why??
if (item === "Tablet") {
  return true;
} else if (item === "Mobile") {
  return true;
} else {
  return false;
}
});  
// use case -- data ma thi ek value find karvi hoy based on condition
// ex. producat ma thi specific producat find karvo hoy based on name
// find vs filter
// Real-life Scenario: Shopping Mall Security
// you are a security guard at a shopping mall
// chack the list of visitors
let people = ["John", "Sara", "Mike", "Anna","David", "Sara"];
// find --> you are looking for the first person named "Sara" in the list and stop searching (Pehli var j male, bas e j and Anagal check j na kare)
let person = people.find((name) => name === "Sara");
console.log(person);

// filter --> you want to find all visitors named "sara" in the list(all data check kare and list na end sudhi check kare)
let AllSara = people.filter((name) => name === "Sara");
console.log(AllSara);

//exmple 2: Book bus for travel 

// some
// check kare chhe ke array ma koi pan ek item condition satisfy kare chhe ke nahi
// condition true aave tyare stop kare
// some() vs find() --> some() can't return you value its return true or false, find() return value of array
// give ans in true and false
let marks1 = [10, 20, 35, 90];
let any = marks1.some(function (val) {
  if (val > 85) return true;
  // if (val < 85) return "need improvement";
});
// use case -- check if some producat are out of stock in your cart

//every
// check kare chhe ke array ma baddha j item condition satisfy kare chhe ke nahi
// true -- baddha items condition match kare
// false -- ek pan fail thay to
let def = [20, 30, 40, 50];
let num = def.every(function (val) {
    return val < 60;
});
// use case --> check all student is pass or not
// some(), find(), filter(), every()
// let products = ["Tablet", "Mobile", "Laptop", "MoBile"]
// method --> condition --> output
// .some()   --> item === "Mobile"  --> true
// .find()   --> item === "Mobile"  --> "Mobile"
// .filter() --> item === "Mobile"  --> ["Mobile", "Mobile"]
// .every()  --> item === "Mobile"  --> false

// Destructuring operator -- give value to variable (ex. we don't use every time arr[1], just save it into variable let [ , k] = arr)
let arr4 = [1, 2, 3, 4, 5];
let [j, k] = arr4; // --> destructuring
// let [j, , k] = arr;
console.log(k);
let temp_a = arr4[4]
let temp_b = arr4[2]
let temp_c = arr4[1]
let user_data = ["text","text@gmail.com","Male","Surat"]

// spread oprator -- copy value from main array
let arr8 = [1, 2, 3, 4, 5, 6, 7];
// let arr4 = arr3; // --> just give reference not
// copy value(when you change into arr4 that will be
// change arr3 too)
let arr9 = [...arr8];
// ... --> rest --> into function
// ... --> spread --> into Array and Object
