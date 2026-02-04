// Array -- Hold multiple values at same time
// ["Mobile", "Laptop", "Tablet", 5000, 25, 588 ]
// ["a", "b", "Hello"]
// [2, 4, 5, 6]

// create
// variable_name = [values]
// let arr =[1,2,3,4];

// // access
// // position = [0 1 2 3]
// //access
// // array_name[position/index]
// arr[0]

// //modify
// // array_name[position/index] = new_value
// arr[0] = 10;
// arr[1] = 20;
// arr[2] = 30;
// arr[3] = 40;

//Array Methods:
//push,pop,shift,unshift,splice,slice,reverse,sort
//push --> enter new value into array -- place it into last
let a = [1,2,3,4,5];
//variable || function.method --> koi variable ke function in pacchal dot(.) kari ne lakho to te method kevai
a.push(700); 
// use case -- enter new products into existing product list

//pop --> remove last value into array
let b = [10,20,30,40];
b.pop();
// use case -- remove last product you add into your list

//shift --> remove first value into array
let c = [30,40,50,60];
c.shift();
//use case -- remove old product automatic after sometimes

//unshift -- add value into array -- first
let d = [52,35,65,85];
d.unshift(20);
// use case -- add a value into top of that data you receive

// splice – remove value into array –– specific position and
// specific number of values
// into () – first index(position), how many value you want to
// remove
let e = [50, 60, 30, 40, 10];
e.splice(3, 2);
// e.splice(3, 0, 50, 100)
// use case –– select msg and remove multiple msg at on click

// slice – copy values from array –– specific position and
// specific number of values
// new variable = array_name.slice(start index, end index)
// start index –– include into copy
// end index –– not include into copy
let f = [100, 50, 25, 0];
let new_f = f.slice(1, 3);
// use case –– copy specific data and save it into new variable
//generate a report based on date and generate a file or save the file into your local machine

// splice vs slice
// splice -- remove value into main array or modify new array
// slice -- copy value from main array and create a new array that hold the value that you can into

// reverse –– reverse the array values
let g = [25, 30, 35, 40, 85];
//g.reverse();
// use case -- show latest update first into your frontend

//sort -- set into ascending order
let h = [50, 20, 80, 10, 40];
h.sort();
//let h = [11,62,3,4,25];
//let sr = h.sort(function(a,b){
// return a-b; // ascending order
// })

//let h = [11,62,3,4,25];
//let sr = h.sort(function(a,b){
// return b-a; // decending order
// })
// use case -- sort product price low to high or high to low

// Example 1: push()
let tasks = ['Wake up', 'Brush teeth'];
tasks.push('Buy milk');


// Example 2: pop()
let notifications = ['Email', 'Message', 'Reminder'];
notifications.pop();


// Example 3: shift()
let customers = ['Customer1', 'Customer2', 'Customer3'];
customers.shift();


// Example 4: unshift()
let playlist = ['Song B', 'Song C'];
playlist.unshift('Song A');


// Example 5: splice()
let students = ['Mike', 'Alex', 'Emma', 'Sophia'];
students.splice(1, 1, 'John', 'Sara');


// Example 6: splice()
let menu = ['Burger', 'Pizza', 'Pasta', 'Salad'];
menu.splice(1, 2);


// Example 7: slice()
let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
let weekend = days.slice(5, 7);


// Example 8: reverse()
let levels = ['Easy', 'Medium', 'Hard'];
levels.reverse();


// Example 9: sort()
let scores = [45, 12, 78, 34, 89];
scores.sort((a, b) => a - b);


// Example 10: sort() with numbers
let prices = [199, 49, 999, 299, 149];
prices.sort((a, b) => a - b);


// Example 11: slice() vs splice()
let products = ['Laptop', 'Phone', 'Tablet', 'Monitor', 'Keyboard'];
let firstThree = products.slice(0, 3);


// Example 12: splice() complex
let colors = ['Red', 'Green', 'Blue', 'Yellow'];
colors.splice(2, 1, 'Purple', 'Orange');


// Example 13: reverse() + push()
let steps = ['Step 1', 'Step 2', 'Step 3'];
steps.reverse();
steps.push('Final Step');


// Example 14: sort() strings
let names = ['alice', 'Bob', 'charlie', 'David'];
names.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));


// Example 15: Combination Question
let movies = ['Avatar', 'Titanic', 'Gladiator'];
movies.push('Inception');
movies.shift();
movies.sort();


// Example 16: splice() return value
let nums1 = [1, 2, 3, 4];
let removed = nums1.splice(1, 2);


// Example 17: slice() immutability check
let nums2 = [10, 20, 30, 40];
let result = nums2.slice(1, 3);


// Example 18: reverse() mutation
let letters = ['a', 'b', 'c'];
let reversedLetters = letters.reverse();


// Example 19: splice() edge case
let arr1 = ['x', 'y', 'z'];
arr1.splice(1, 0, 'new');


// Example 20: slice() negative index
let values = [100, 200, 300, 400, 500];
let sliced = values.slice(-3, -1);


// Example 21: splice() vs slice()
let arr2 = ['a', 'b', 'c', 'd'];
// a) Update the original array → splice()
arr2.splice(1, 1);   // removes 'b'
// arr2 becomes ['a', 'c', 'd']
let arr3 = ['a', 'b', 'c', 'd'];
// b) Keep the original array unchanged → slice()
let newArr = arr3.slice(1, 3);
// arr3 remains ['a', 'b', 'c', 'd']
// newArr is ['b', 'c']


// Example 22: Chained methods
let arr4 = [1, 2, 3];
arr4.push(arr4.shift());

