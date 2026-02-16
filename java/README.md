Javascript Variable



<h1>Example or Excercise:</h1>
<div>
<h3>Example 1 :</h3>
<p>console.log(nm);</p>
<p>let nm = "name";</p>
<p>Answer or Error: ReferenceError: Cannot access 'nm' before initialization</p>
<p>Why : let variables are hoisted but not initialized.
They stay in the Temporal Dead Zone (TDZ) until the declaration line is executed.
Accessing them before declaration causes an error.</p>
</div>
 
<div>
<h3>Example 2 :</h3>
<p>console.log(b);</p>-
<p>var b = "username";</p>
<p>Answer or Error: undefined </p>
<p>Why : var variables are hoisted and initialized with undefined.</p>
</div>
 
<div>
<h3>Example 3 :</h3>
<p>var x = 1;</p>
<p>{
    var x= 2;
}
</p>
<p>console.log(x);</p>
<p>Answer or Error: 2</p>
<p>Why : var is not block-scoped, it has function or global scope.
The value 2 overwrites the previous value of x.</p>
</div>
 
<div>
<h3>Example 4 :</h3>
<p>let a = 10; </p>
<p>{
    let a = 20;
    console.log("Inside:", a);
}</p>
<p>
console.log("Outside:", a);
</p>
<p>Answer or Error: Inside: 20
Outside: 10
</p>
<p>Why : let is block-scoped.
The a inside the block is a different variable from the one outside.
So both values are preserved separately.</p>
</div>
 
<div>
<h3>Example 5 :</h3>
<p>const person = {name: "demo"}; </p>
on console.log
<p>person.name= "user"; ✅</p>
<p>person = {} ; ❌ </p>
<p>Answer or Error: user</p>
<p>Why : const makes the variable reference constant, not the object itself.
You are not reassigning the person variable; you are only modifying a property of the object.
Changing object properties is allowed with const.
Reassigning the entire object (person = {}) is not allowed and would cause a TypeError.</p>
</div>
 

<!-- Javascript Datatype: -->
<div>
 <h3>Example 1 :</h3>
<p>true + false </p>
<p>Answer or Error: 1</p>
<p>Why :  true is converted to 1,false is converted to 0,1 + 0 = 1</p>
</div>
 
<div>
<h3>Example 2 :</h3>
<p>null + 1 </p>
<p>Answer or Error: 1</p>
<p>Why : null is converted to 0 in numeric operations,0 + 1 = 1</p>
</div>
 
<div>
<h3>Example 3 :</h3>
<p>"12" + 12 </p>
<p>Answer or Error: '1212'</p>
<p>Why : + with a string performs string concatenation,Number 12 is converted to a string,"12" + "12" = '1212'</p>
</div>
 
<div>
<h3>Example 4 :</h3>
<p>!! undefined</p>
<p>Answer or Error: false</p>
<p>Why : undefined is a falsy value
First ! converts it to true
Second ! converts it back to boolean false</p>
</div>
 
<div>
<h3>Example 5 :</h3>
<p>"12" - 1 </p>
<p>Answer or Error: 11</p>
<p>Why : - operator forces numeric conversion   
"12" becomes 12
12 - 1 = 11</p>
</div>
 
<div>
<p> why typeof NaN --> number </p> 
<p>NaN is a failed number oprations that why that type is number</p>
<p> ex. "hello" + 5 --> NaN</p>
<p>Answer or Error: "number"</p>
<p>Why : NaN means Not a Number, but it represents a failed numeric operation
JavaScript still treats it as part of the Number datatype</p>
</div>
 
<div>
<p>Undefined vs Null</p>
<p>let x;</p>
<p>console.log(x);</p>
<p>let y = null;</p>
<p>console.log(y);</p>
<p>Answer or Error: undefined,null</p>
<p>Why : undefined:-Memory is allocated, but no value is stored yet.
null:-The variable exists, but you are explicitly saying “this has no value”.</p>
</div>


<!-- javascript Operator: -->
<div>
<h1>Example 1 :</h1>
<p>let x = 10;</p>
<p>let y = 20;</p>
<p>if(x>5 && y > 5){
    console.log("Both are greater than 5");
}else{
    console.log("One or both are not greater than 5");
}</p>
<p>Answer or Error: Both are greater than 5</p>
<p>Why : && (AND) returns true only if both conditions are true,
x > 5 → true, y > 5 → true</p>
</div>
</div>

<div>
<h1>Example 2 :</h1>
<p>let isAdmin = true;</p>
<p>let isLoggedIn = false;</p>
<p>if(isAdmin || isLoggedIn){
    console.log("Acess granted");
}else{
    console.log("Acess Denied");
}</p>
<p>Answer or Error: Access granted</p>
<p>Why : || (OR) returns true if any one condition is true,
isAdmin is true</p>
</div>

<div>
<h1>Example 3 :</h1>
<p>let temp = 35;</p>
<p>if(!(temp > 30)){
    console.log("Hot day");
}else{
    console.log("Pleasant day");
}</p>
<p>Answer or Error: Pleasant day</p>
<p>Why : temp > 30 → true,
!true → false,
if condition fails, so else runs</p>
</div>

<div>
<h1>Example 4 :</h1>
<p>let a = 0;</p>
<p>if(a){
    console.log("Truthy value");
}else{
    console.log("Falsy value");
}</p>
<p>Answer or Error: Falsy value</p>
<p>Why : 0 is a falsy value in JavaScript</p>
</div>

<div>
<h1>Example 5 :</h1>
<p>let score = 78;</p>
<p>let grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "D";</p>
<p>console.log("Grade:", grade);</p>
<p>Answer or Error: Grade: C</p>
<p>Why : 78 >= 70 is true,
Ternary operator checks conditions from left to right</p>
</div>

<div>
<h1>Example 6 :</h1>
<p>let points = 120;</p>
<p>let status = points >= 100 ? "Gold" : points >= 50 ? "Silver" : "Bronze";</p>
<p>console.log("Status:", status);</p>
<p>Answer or Error: Status: Gold</p>
<p>Why : points >= 100 is true, so "Gold" is selected</p>
</div>

<div>
<h1>Example 7:</h1>
<p>let loggedIn = true;</p>
<p>let hasToken = false;</p>
<p>let access = loggedIn && hasToken ? "Allow" : "Deny";</p>
<p>console.log("access:", access);</p>
<p>Answer or Error: access: Deny</p>
<p>Why : && requires both values to be true,
hasToken is false</p>
</div>

<div>
<h1>Example 8:</h1>
<p>let a = 5;</p>
<p>a++</p>
<p>console.log(a);</p>
<p>Answer or Error: 6</p>
<p>Why : g++ increments the value by 1</p>
</div>

<div>
<h1>Example 9:</h1>
<p>let a = 8;</p>
<p>++a</p>
<p>console.log(a);</p>
<p>Answer or Error: 9</p>
<p>Why : Pre-increment increases value before usage
</p>
</div>

<div>
<h1>Example 10:</h1>
<p>let b = 4;</p>
<p>let c = b++</p>
<p>console.log(b, c);</p>
<p>Answer or Error: 5 4</p>
<p>Why : b++ assigns old value to c first, then increments b</p>
</div>

<div>
<h1>Example 11:</h1>
<p>let b = 4;</p>
<p>let c = ++b</p>
<p>console.log(b, c);</p>
<p>Answer or Error: 5 5</p>
<p>Why : ++r increments first, then assigns value</p>
</div>

<div>
<h1>Example 12:</h1>
<p>let m = 10;</p>
<p>console.log(m--)</p>
<p>console.log(m);</p>
<p>Answer or Error: 10
9</p>
<p>Why : Post-decrement returns old value first, then decreases</p>
</div>

<div>
<h1>Example 13:</h1>
<p>let n = 5;</p>
<p>let result = n++ + ++n;</p>
<p>console.log(result);</p>
<p>Answer or Error: 12</p>
<p>Why : n++ → 5 (n becomes 6),
++n → 7,
5 + 7 = 12</p>
</div>

<div>
<h1>Example 14:</h1>
<p>let likes = 100;</p>
<p>function likePost(){
result ++likes;
}</p>
<p>console.log(likePost());</p>
<p>console.log(likes);</p>
<p>Answer or Error: SyntaxError</p>
<p>Why : result ++likes; is invalid syntax
Correct version:likes++;</p>
</div>

<div>
<h1>Example 15:</h1>
<p>let count = 5;</p>
<p>if(count-- === 5){   
console.log("Matched");
}else{
    console.log("Not Matched"); 
}</p>
<p>Answer or Error: Matched</p>
<p>Why : count-- returns 5 first, then decrements,
5 === 5 → true</p>
</div>

<!-- Javascript Controlflow -->
<div>
<h1>Example 1 :</h1>
<p>let x = 2;</p>
<p>switch(x){
   case 2:
   console.log("Two");
   case 3:
   console.log("Three");
}</P>
<p>Answer or Error: Two
Three</p>
<p>Why : The switch statement does not have break after case 2.
When x === 2, execution starts at case 2 and falls through to case 3.
So both "Two" and "Three" are printed..</p>
<div>

<div>
<h1>Example 2 :</h1>
<p>Write a function getGrade(score) that:</p>
<p> Takes A student's score as input (0 to 100)</P>
<p>Returns the grade based on below logic:</P>
<p>90-100 A+</P>
<p>80-89 A</P>
<p>70-79 B</P>
<p>60-69 C</P>
<p>33-59 D</P>
<p>0-32 Fail</P>
<p>Anything Else Invalid Marks</P>
<p>Answer or Error: A+
</p>
<p>Why : score = 99
First condition score >= 90 && score <= 100 is true
Function immediately returns "A+"
Remaining conditions are skipped.</p>
<div>

<div>
<h1>Example 3 :</h1>
<p>Rock-Paper-Scissors:</p>
<p>rock - scissors --> rock</P>
<p>paper - rock --> paper</P>
<p>scissors - paper --> scissors</P>
<p>Answer or Error: rock
</p>
<p>Why : player1 = "rock" and player2 = "scissors"
First condition matches: player1 === "rock" && player2 === "scissors"</p>
<div>

<!-- JavaScript Loops: For, while, do-while, break, continue -->
<div>
<h1>Example 1:</h1>
<p>Print number from 1 to 10 using a for loop.</p>
<p>Answer or Error: 1 2 3 4 5 6 7 8 9 10</p>
<p>Why : Loop starts at 1,
Runs while i <= 10,
Increments i by 1 each time</p>
</div>

<div>
<h1>Example 2:</h1>
<p>Print number from 10 to 1 using while loop.</p>
<p>Answer or Error: 10 9 8 7 6 5 4 3 2 1</p>
<p>Why : while loop runs until condition becomes false,
i-- decreases value each iteration</p>
</div>

<div>
<h1>Example 3:</h1>
<p>Print even numbers from 1 to 20 using for loop.</p>
<p>for(let i=1; i<=20; i++){
    if(i%2 ===0){
    console.log(i);
    }
}</p>
<p>Answer or Error: 2 4 6 8 10 12 14 16 18 20</p>
<p>Why : Even numbers give remainder 0 when divided by 2</p>
</div>

<div>
<h1>Example 4:</h1>
<p>Print odd numbers from 1 to 15 using while loop.</p>
<p>let i= 1;</p>
<p>while(i<=15){
    if(i%2 !==0){ // or (i%2 ===1)
    console.log(i);
    }
    i++;
}</p>
<p>Answer or Error: </p>
<p>Why : </p>
</div>

<div>
<h1>Example 5:</h1>
<p>Print the multiplication table of 5.</p>
<p>
for(let i=1; i<=10; i++){
    console.log(`5 x ${i} = ${5*i}`);
}
</p>
<p>Answer or Error: </p>
<p>Why : </p>
</div>

<div>
<h1>Example 6:</h1>
<p>Find the sum of numbers from 1 to 100 using a loop.</p>
<p>
let sum = 0;
for(let i=1; i<=100; i++){
    // let sum =0;
    sum = sum + i;
    // console.log(sum);
}
console.log(sum);
</p>
<p>Answer or Error: </p>
<p>Why : </p>
</div>

<div>
<h1>Example 7:</h1>
<p>Print all numbers between 1 to 50 that are divisible by 3.</p>
<p>
for(let i=1; i<=50; i++){
    if(i%3 === 0){
        console.log(i);
    }
}
</p>
<p>Answer or Error: </p>
<p>Why : </p>
</div>

<div>
<h1>Example 8:</h1>
<p>Ask the user for a number and print whether each number from 1 to that number is even or odd.</p>
<p>
let num = prompt("give a number");
for(let i=1; i <=numl i++){
    if(i%2 ===0){
        console.log(i, " is even");
    }else{
        console.log(i, " is odd");
    }
}
</p>
<p>Answer or Error: </p>
<p>Why : </p>
</div>

<div>
<h1>Example 9:</h1>
<p>Count how many numbers between 1 to 100 are divisible by 3 or 5.</p>
<p>
for(let i=1; i<=100; i++){
    if(i%3 ===0 || i%5 ===0){
        console.log(i);
    }
}
</p>
<p>Answer or Error: </p>
<p>Why : </p>
</div>

<div>
<h1> (Break and Continue)Example 10:</h1>
<p>Stop at First Multiple of 7</p>
<p>Write a Loop from 1 to 100 that:</p>
<p>Prints Each number</p>
<p>Stop Completely when it finds the first number divisible by 7</p>
<p>
for(let i=1; i<=100; i++){
    console.log(i);
    if(i%7 ===0){
        break;
    }
}
</p>
<p>Answer or Error: </p>
<p>Why : </p>
</div>

<div>
<h1> (Break and Continue)Example 11:</h1>
<p>Skip Multiples of 3</p>
<p>Write a Loop From 1 to 20 that:</p>
<p>Skip number divisible by 3</p>
<p>Prints all other numbers</p>
<p>
for(let i=1; i<=20; i++){
    if(i%3 ===0){
        continue;
    }
    console.log(i);

}
</p>
<p>Answer or Error: </p>
<p>Why : </p>
</div>

<div>
<h1> (Break and Continue)Example 12:</h1>
<p>Print First 5 Odd Numbers</p>
<p>Write a loop from 1 to 100 that:</p>
<p>Prints only 5 odd numbers</p>
<p>Then stops the loop</p>
<p>Use Both if, continue and a counter + break</p>
<p>
count = 0;
for(let i =1; i<=100; i++){
    if(i%2 ===1){
        count++;
        console.log(i)
    }
    console.log(i);
    if(count ===5){cha
        break;
    }
}
</p>
<p>Answer or Error: </p>
<p>Why : </p>
</div>

<!-- Javascript Function (1 to 10) -->
 
## Function Examples
<hr>
<div>
<h1> Example 1: </h1>
<p>What's the difference between function declaration and function expression in terms of hoisting?</p>
<p>Answer or Error: Function Declaration → Hoisted

Function Expression → Not hoisted</p>
<p>Why : Function declarations are fully hoisted (function body included).
Function expressions depend on variables, and variables are hoisted as undefined.</p>
</div>
<div>
<h1> Example 2: </h1>
<p>greet();</p>
<p>function greet(){
    console.log("Hello!");
}</p>
<p>Answer or Error: Hello!</p>
<p>Why : greet() is a function declaration,
Function declarations are hoisted, so it works even before definition.</p>
</div>
<div>
<h1> Example 3: </h1>
<p>Convert normal function to Arrow Function</p>
<p>function add(a, b){
    return a + b;
}</p>
<p>Answer or Error: no error</p>
<p>Why : Arrow functions provide shorter syntax,
Implicit return when only one statement</p>
</div>
<div>
<h1> Example 4: </h1>
<p>Identify what is parms and what is args</p>
<p>function welcome(name){
    console.log("Welcome " + name);
}</p>
<p>welcome("user");</p>
<p>Answer or Error: Parameter: name,
Argument: "user"</p>
<p>Why : Parameter → variable in function definition,
Argument → actual value passed during function call.</p>
</div>
<div>
<h1> Example 5: </h1>
<p>how many parameters and args</p>
<p>function temp (a, b, c){
    console.log(a,b,c);
}</p>
<p>temp(1, 2)</p>
<p>Answer or Error: 1 2 undefined</p>
<p>Why : Parameters: 3 (a, b, c),
Arguments: 2 (1, 2),
Missing argument becomes undefined.</p>
</div>
<div>
<h1> Example 6: </h1>
<p>Predict the output</p>
<p>function temp_user(name = "Guest"){
    console.log("Hello " + name);
}</p>
<p>temp_user();</p>
<p>Answer or Error: Hello Guest</p>
<p>Why : Default parameter value is used when no argument is passed</p>
</div>
<div>
<h1> Example 7: </h1>
<p>what is ... operator and why use it  in function</p>
<p>function number(...numbers){
    console.log(numbers);
}</p>
<p>number(1, 2, 3, 4, 5)</p>
<p>Answer or Error: [1, 2, 3, 4, 5]</p>
<p>Why : ... is Rest Operator,
It collects multiple arguments into an array,
Used when number of arguments is unknown.</p>
</div>
<div>
<h1> Example 8: </h1>
<p>Use rest Parameters to accept any number of scores and return the total</p>
<p>function calculateTotal(...scores){
    let total = 0;
    for(let i=0; i<=scores.length; i++){
        total += scores[i];
    }
    return total;
}</p>
<p>function calculateTotal(...scores){
    let total = 0;
    scores.forEach(function(val){
        total = total + val;
    });
    return total;
}</p>
<p>calculateTotal(10, 20 ,30 ,40 ,50)</p>
<p>let sumtotal = calculateTotal(10, 20 ,30 ,40 ,50)</p>
<p>Answer or Error: 150</p>
<p>Why : forEach safely loops through array,
All values added correctly.</p>
</div>
<div>
<h1> Example 9: </h1>
<p>Fix the function using early return</p>
<p>function checkAge(age){
    if(age < 18){
        console.log("Too Young");
    } else {
        console.log("Access Granted");
    }
}</p>
<p>Answer or Error: Access Granted</p>
<p>Why : Early return stops function execution,
Cleaner and more readable.</p>
</div>
<div>
<h1> Example 10: </h1>
<p>What is the return value of above function</p>
<p>function f(){ return;}</p>
<p>Answer or Error: undefined</p>
<p>Why : return; without value returns undefined by default</p>
</div>
 
<div>
<h1> Example 11: </h1>
<p>What does is mean when we say "functions are first-class citizens"?</p>

<p><b>Ans:</b></p>
<p>
Functions are treated like normal values in JavaScript.
</p>

<p><b>Why:</b></p>
<p>
Functions can be stored in variables, passed as arguments,
and returned from other functions.
</p>
</div>


<div>
<h1> Example 12: </h1>
<p>Can you assign a function to a variable and then call it?</p>

<p>
let a = function(){ console.log("Hello"); }
a();
</p>

<p><b>Ans:</b></p>
<p>
Output: Hello
</p>

<p><b>Why:</b></p>
<p>
The function is stored inside variable <b>a</b>.
Calling <b>a()</b> executes the function.
</p>
</div>


<div>
<h1> Example 13: </h1>
<p>Pass a function into another function and execute it.</p>

<p>
function abcd(val){ val(); }
abcd(function(){ console.log("Hello") })
</p>

<p><b>Ans:</b></p>
<p>
Output: Hello
</p>

<p><b>Why:</b></p>
<p>
A function is passed as an argument and executed inside another function.
</p>

<p><b>How:</b></p>
<p>
The argument <b>val</b> holds a function, and calling <b>val()</b> runs it.
</p>
</div>


<div>
<h1> Example 14: </h1>
<p>What is higher order function?</p>

<p><b>Ans:</b></p>
<p>
A function that takes another function as an argument
or returns a function.
</p>

<p><b>Why:</b></p>
<p>
It helps in writing reusable and flexible code.
</p>
</div>


<div>
<h1> Example 16: </h1>
<p>pure or impure function?</p>

<p>
let total = 5;
function num(num){
  total += num;
}
num(3);
</p>

<p><b>Ans:</b></p>
<p>
This is an <b>Impure Function</b>.
</p>

<p><b>Why:</b></p>
<p>
It uses and modifies an external variable (<b>total</b>),
so it has side effects.
</p>
</div>


<div>
<h1> Example 17: </h1>
<p>Convert example 16 function into pure function?</p>

<p><b>Ans:</b></p>
<p>
function num(total, num){
  return total + num;
}
num(5, 3);
</p>

<p><b>Why:</b></p>
<p>
The function does not depend on external variables
and always returns the same output for the same input.
</p>
</div>


<div>
<h1> Example 18: </h1>
<p>What is Closure? When is it created?</p>

<p><b>Ans:</b></p>
<p>
Closure is created when a function remembers variables
from its outer scope.
</p>

<p><b>Example:</b></p>
<p>
function outer(){
  let x = 10;
  return function(){
    console.log(x);
  }
}
</p>
</div>


<div>
<h1> Example 19: </h1>
<p>What's logged?</p>

<p>
function outer(){
    let count = 0;
    return function(){
        count++;
        console.log(count);
    };
}
const counter = outer();
counter();
counter();
</p>

<p><b>Ans:</b></p>
<p>
1<br>
2
</p>

<p><b>Error:</b></p>
<p>
No Error
</p>

<p><b>Why:</b></p>
<p>
The inner function forms a closure and remembers
the same <b>count</b> variable.
</p>
</div>


<div>
<h1> Example 20: </h1>
<p>Convert below function into an IIFE:</p>

<p><b>Ans:</b></p>
<p>
(function(){
  console.log("Initialized");
})();
</p>

<p><b>Why:</b></p>
<p>
IIFE runs immediately and avoids polluting the global scope.
</p>
</div>


<div>
<h1> Example 21: </h1>
<p>What is the use of IIFE? Name one real-world use case.</p>

<p><b>Ans:</b></p>
<p>
Used for data privacy and encapsulation.
</p>

<p><b>Why:</b></p>
<p>
Variables inside IIFE are private and cannot be accessed directly.
Used in modules and counters.
</p>
</div>


<div>
<h1> Example 22: </h1>
<p>What will be the output here and why?</p>

<p>
temp_var();
var temp_var = function(){
    console.log("Hello");
}
</p>

<p><b>Ans:</b></p>
<p>
Error: temp_var is not a function
</p>

<p><b>Why:</b></p>
<p>
Function expressions are not hoisted.
The variable exists but its value is undefined.
</p>
</div>


<div>
<h1> Example 23: </h1>
<p>What will be the output here and why?</p>

<p>
temp_var();
function temp_var(){
    console.log("Hello");
}
</p>

<p><b>Ans:</b></p>
<p>
Output: Hello
</p>

<p><b>Why:</b></p>
<p>
Function declarations are fully hoisted,
so they can be called before definition.
</p>
</div>

<!-- Array Method : push, pop, shift, unshift, splice, slice, reverse -->



<div>
  <h1>Example 1: push()</h1>
  <p>You are building a to-do app. Add a new task 'Buy milk' to the tasks array.</p>
  <p>let tasks = ['Wake up', 'Brush teeth'];</p>
  <p>tasks.push('Buy milk');</p>
  <p>Answer or Error: ['Wake up','Brush teeth','Buy milk']</p>
  <p>Why: push() array ke end me element add karta hai.</p>
</div>

<div>
  <h1>Example 2: pop()</h1>
  <p>Remove the last notification from the notifications array.</p>
  <p>let notifications = ['Email','Message','Reminder'];</p>
  <p>notifications.pop();</p>
  <p>Answer or Error: ['Email','Message']</p>
  <p>Why: pop() last element remove karta hai.</p>
</div>

<div>
  <h1>Example 3: shift()</h1>
  <p>A queue system removes the first customer.</p>
  <p>let customers = ['Customer1','Customer2','Customer3'];</p>
  <p>customers.shift();</p>
  <p>Answer or Error: ['Customer2','Customer3']</p>
  <p>Why: shift() first element remove karta hai.</p>
</div>

<div>
  <h1>Example 4: unshift()</h1>
  <p>A new song is added to the beginning of the playlist.</p>
  <p>let playlist = ['Song B','Song C'];</p>
  <p>playlist.unshift('Song A');</p>
  <p>Answer or Error: ['Song A','Song B','Song C']</p>
  <p>Why: unshift() start me element add karta hai.</p>
</div>

<div>
  <h1>Example 5: splice()</h1>
  <p>Remove 'Alex' and add 'John' and 'Sara' in the same position.</p>
  <p>let students = ['Mike','Alex','Emma','Sophia'];</p>
  <p>students.splice(1,1,'John','Sara');</p>
  <p>Answer or Error: ['Mike','John','Sara','Emma','Sophia']</p>
  <p>Why: splice() same index par remove aur add karta hai.</p>
</div>

<div>
  <h1>Example 6: splice()</h1>
  <p>Remove 2 items starting from index 1.</p>
  <p>let menu = ['Burger','Pizza','Pasta','Salad'];</p>
  <p>menu.splice(1,2);</p>
  <p>Answer or Error: ['Burger','Salad']</p>
  <p>Why: index 1 se 2 elements delete hue.</p>
</div>

<div>
  <h1>Example 7: slice()</h1>
  <p>Create a new array that contains only weekend days.</p>
  <p>let days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];</p>
  <p>let weekend = days.slice(5,7);</p>
  <p>Answer or Error: ['Saturday','Sunday']</p>
  <p>Why: slice() new array banata hai, original change nahi hota.</p>
</div>

<div>
  <h1>Example 8: reverse()</h1>
  <p>Reverse the order of levels in a game.</p>
  <p>let levels = ['Easy','Medium','Hard'];</p>
  <p>levels.reverse();</p>
  <p>Answer or Error: ['Hard','Medium','Easy']</p>
  <p>Why: reverse() array ko mutate karta hai.</p>
</div>

<div>
  <h1>Example 9: sort()</h1>
  <p>Sort the scores in ascending order.</p>
  <p>let scores = [45,12,78,34,89];</p>
  <p>scores.sort((a,b)=>a-b);</p>
  <p>Answer or Error: [12,34,45,78,89]</p>
  <p>Why: number sort ke liye compare function use hota hai.</p>
</div>

<div>
  <h1>Example 10: sort() with numbers</h1>
  <p>Sort the prices from lowest to highest.</p>
  <p>let prices = [199,49,999,299,149];</p>
  <p>prices.sort((a,b)=>a-b);</p>
  <p>Answer or Error: [49,149,199,299,999]</p>
  <p>Why: default sort string jaisa behave karta hai.</p>
</div>

<div>
  <h1>Example 11: slice()</h1>
  <p>Create a new array of the first 3 items without changing original.</p>
  <p>let products = ['Laptop','Phone','Tablet','Monitor','Keyboard'];</p>
  <p>let firstThree = products.slice(0,3);</p>
  <p>Answer or Error: ['Laptop','Phone','Tablet']</p>
  <p>Why: slice() non-mutating method hai.</p>
</div>

<div>
  <h1>Example 12: splice() complex</h1>
  <p>Remove 'Blue' and add 'Purple' and 'Orange'.</p>
  <p>let colors = ['Red','Green','Blue','Yellow'];</p>
  <p>colors.splice(2,1,'Purple','Orange');</p>
  <p>Answer or Error: ['Red','Green','Purple','Orange','Yellow']</p>
  <p>Why: splice() remove aur add dono karta hai.</p>
</div>

<div>
  <h1>Example 13: reverse() + push()</h1>
  <p>Reverse the array and then add 'Final Step'.</p>
  <p>let steps = ['Step 1','Step 2','Step 3'];</p>
  <p>steps.reverse(); steps.push('Final Step');</p>
  <p>Answer or Error: ['Step 3','Step 2','Step 1','Final Step']</p>
  <p>Why: reverse order badalta hai, push end me add karta hai.</p>
</div>

<div>
  <h1>Example 14: sort() strings</h1>
  <p>Sort names alphabetically, ignoring case sensitivity.</p>
  <p>let names = ['alice','Bob','charlie','David'];</p>
  <p>names.sort((a,b)=>a.toLowerCase().localeCompare(b.toLowerCase()));</p>
  <p>Answer or Error: ['alice','Bob','charlie','David']</p>
  <p>Why: toLowerCase() case ignore karta hai.</p>
</div>

<div>
  <h1>Example 15: Combination Question</h1>
  <p>Add 'Inception', remove first movie, then sort.</p>
  <p>let movies = ['Avatar','Titanic','Gladiator'];</p>
  <p>movies.push('Inception'); movies.shift(); movies.sort();</p>
  <p>Answer or Error: ['Gladiator','Inception','Titanic']</p>
  <p>Why: push add, shift remove, sort arrange karta hai.</p>
</div>

<div>
  <h1>Example 16: splice() return value</h1>
  <p>let nums1 = [1,2,3,4];</p>
  <p>nums1.splice(1,2);</p>
  <p>Answer or Error: [2,3]</p>
  <p>Why: splice() removed elements return karta hai.</p>
</div>

<div>
  <h1>Example 17: slice() immutability</h1>
  <p>let nums2 = [10,20,30,40];</p>
  <p>let result = nums2.slice(1,3);</p>
  <p>Answer or Error: nums2 unchanged</p>
  <p>Why: slice() original array change nahi karta.</p>
</div>

<div>
  <h1>Example 18: reverse() mutation</h1>
  <p>let letters = ['a','b','c'];</p>
  <p>let reversedLetters = letters.reverse();</p>
  <p>Answer or Error: letters bhi reverse ho jata hai</p>
  <p>Why: reverse() mutating method hai.</p>
</div>

<div>
  <h1>Example 19: splice() edge case</h1>
  <p>let arr = ['x','y','z'];</p>
  <p>arr.splice(1,0,'new');</p>
  <p>Answer or Error: ['x','new','y','z']</p>
  <p>Why: deleteCount 0 hone par sirf insert hota hai.</p>
</div>

<div>
  <h1>Example 20: slice() negative index</h1>
  <p>let values = [100,200,300,400,500];</p>
  <p>let sliced = values.slice(-3,-1);</p>
  <p>Answer or Error: [300,400]</p>
  <p>Why: negative index end se count hota hai.</p>
</div>

<div>
  <h1>Example 21: splice() vs slice()</h1>
  <p>a) Update original array → splice()</p>
  <p>b) Keep original unchanged → slice()</p>
  <p>Why: splice mutating hai, slice non-mutating.</p>
</div>

<div>
  <h1>Example 22: Chained methods</h1>
  <p>let arr2 = [1,2,3];</p>
  <p>arr2.push(arr2.shift());</p>
  <p>Answer or Error: [2,3,1]</p>
  <p>Why: shift first element nikalta hai, push end me add karta hai.</p>
</div>

<!-- Javascript Array Examples: -->
<div>
  <h1>Example 1: Double daily steps count</h1>
  <p>Real life: Fitness app doubling step goal</p>
  <p>const steps = [1000, 2000, 3000];</p>
  <p>const newSteps = steps.map(step => step * 2);</p>
  <p>Answer: [2000, 4000, 6000]</p>
  <p>Why: map() har step ko 2 se multiply karke naya array banata hai.</p>
</div>

<div>
  <h1>Example 2: Convert minutes to seconds</h1>
  <p>Real life: Video duration calculation</p>
  <p>const minutes = [1, 5, 10];</p>
  <p>const seconds = minutes.map(min => min * 60);</p>
  <p>Answer: [60, 300, 600]</p>
  <p>Why: 1 minute = 60 seconds, map() har value convert karta hai.</p>
</div>

<div>
  <h1>Example 3: Add ₹50 delivery charge</h1>
  <p>Real life: Food delivery app</p>
  <p>const prices = [200, 350, 500];</p>
  <p>const finalPrices = prices.map(price => price + 50);</p>
  <p>Answer: [250, 400, 550]</p>
  <p>Why: map() har price me ₹50 add karta hai.</p>
</div>

<div>
  <h1>Example 4: Convert exam marks to grades</h1>
  <p>Real life: Result system</p>
  <p>const marks = [35, 72, 88, 40];</p>
  <p>const grades = marks.map(mark => mark &gt;= 40 ? 'Pass' : 'Fail');</p>
  <p>Answer: ['Fail', 'Pass', 'Pass', 'Pass']</p>
  <p>Why: Condition ke basis par map() Pass ya Fail return karta hai.</p>
</div>

<div>
  <h1>Example 5: Capitalize names</h1>
  <p>Real life: Display usernames properly</p>
  <p>const names = ['rahul', 'neha', 'amit'];</p>
  <p>const formattedNames = names.map(name => name[0].toUpperCase() + name.slice(1));</p>
  <p>Answer: ['Rahul', 'Neha', 'Amit']</p>
  <p>Why: map() har name ka first letter capital karta hai.</p>
</div>

<div>
  <h1>Example 6: Apply 10% discount</h1>
  <p>Real life: Shopping sale</p>
  <p>const prices = [500, 1000, 1500];</p>
  <p>const discounted = prices.map(price => price - price * 0.10);</p>
  <p>Answer: [450, 900, 1350]</p>
  <p>Why: map() har price par 10% discount apply karta hai.</p>
</div>

<div>
  <h1>Example 7: Add bonus points</h1>
  <p>Real life: Game scoring system</p>
  <p>const scores = [45, 60, 85];</p>
  <p>const finalScores = scores.map(score => score &gt;= 80 ? score + 20 : score &gt;= 50 ? score + 10 : score);</p>
  <p>Answer: [45, 70, 105]</p>
  <p>Why: Score ke range ke according bonus add hota hai.</p>
</div>

<div>
  <h1>Example 8: Convert Celsius to Fahrenheit</h1>
  <p>Real life: Weather app</p>
  <p>const celsius = [0, 20, 30];</p>
  <p>const fahrenheit = celsius.map(temp => (temp * 9/5) + 32);</p>
  <p>Answer: [32, 68, 86]</p>
  <p>Why: Formula use karke map() temperature convert karta hai.</p>
</div>

<div>
  <h1>Example 9: Generate table of 2</h1>
  <p>Real life: Math learning app</p>
  <p>const numbers = [1, 2, 3, 4];</p>
  <p>const tableOfTwo = numbers.map(num => num * 2);</p>
  <p>Answer: [2, 4, 6, 8]</p>
  <p>Why: map() har number ko 2 se multiply karta hai.</p>
</div>

<div>
  <h1>Example 10: Balance message formatting</h1>
  <p>Real life: SMS notification system</p>
  <p>const balances = [500, 1200, 300];</p>
  <p>const messages = balances.map(balance => `Your balance is ₹${balance}`);</p>
  <p>Answer: ['Your balance is ₹500', 'Your balance is ₹1200', 'Your balance is ₹300']</p>
  <p>Why: map() string template ke saath message generate karta hai.</p>
</div>

<!-- JavaScript .filter() Method Example: -->
<div>
  <h1>Example 1: Get even numbers</h1>
  <p>Find even roll numbers</p>
  <p>const numbers = [1, 2, 3, 4, 5, 6];</p>
  <p>const evenNumbers = numbers.filter(num => num % 2 === 0);</p>
  <p>Answer or Error: [2, 4, 6]</p>
  <p>Why: filter() sirf wahi numbers return karta hai jo even condition satisfy karte hain.</p>
</div>

<div>
  <h1>Example 2: Filter adults</h1>
  <p>Allow only adult users</p>
  <p>const ages = [2, 1, 10, 16, 5];</p>
  <p>const adults = ages.filter(age => age >= 18);</p>
  <p>Answer or Error: []</p>
  <p>Why: Koi bhi age 18 ya usse zyada nahi hai.</p>
</div>

<div>
  <h1>Example 3: Remove empty items</h1>
  <p>Clean user input</p>
  <p>const inputs = ['Hello', '', 'World', '', 'JS'];</p>
  <p>const validInputs = inputs.filter(text => text !== '');</p>
  <p>Answer or Error: ['Hello', 'World', 'JS']</p>
  <p>Why: Empty strings filter ho jaati hain.</p>
</div>

<div>
  <h1>Example 4: Filter passing marks</h1>
  <p>Exam result system</p>
  <p>const marks = [35, 72, 88, 40, 25];</p>
  <p>const passedStudents = marks.filter(mark => mark >= 40);</p>
  <p>Answer or Error: [72, 88, 40]</p>
  <p>Why: Sirf 40 ya usse zyada marks wale select hote hain.</p>
</div>

<div>
  <h1>Example 5: Get affordable prices</h1>
  <p>Shopping app price filter</p>
  <p>const prices = [199, 499, 999, 1499, 299];</p>
  <p>const affordable = prices.filter(price => price <= 500);</p>
  <p>Answer or Error: [199, 499, 299]</p>
  <p>Why: ₹500 se kam ya barabar prices filter hoti hain.</p>
</div>

<div>
  <h1>Example 6: Filter long words</h1>
  <p>Search keyword validation</p>
  <p>const words = ['hi', 'hello', 'javascript', 'ok'];</p>
  <p>const longWords = words.filter(word => word.length > 3);</p>
  <p>Answer or Error: ['hello', 'javascript']</p>
  <p>Why: 3 se zyada length wale words select hote hain.</p>
</div>

<div>
  <h1>Example 7: Filter positive numbers</h1>
  <p>Bank transaction validation</p>
  <p>const transactions = [200, -100, 500, -50, 300];</p>
  <p>const credits = transactions.filter(amount => amount > 0);</p>
  <p>Answer or Error: [200, 500, 300]</p>
  <p>Why: Sirf positive amounts allow kiye gaye hain.</p>
</div>

<div>
  <h1>Example 8: Filter numbers within a range</h1>
  <p>Score selection</p>
  <p>const scores = [45, 60, 85, 30, 90];</p>
  <p>const selectedScores = scores.filter(score => score >= 50 && score <= 90);</p>
  <p>Answer or Error: [60, 85, 90]</p>
  <p>Why: Range condition ke andar wale scores hi milte hain.</p>
</div>


<!-- JavaScript .reduce() Method Example: -->

<div>
  <h1>Example 1: Total money in wallet</h1>
  <p>Add all cash amounts</p>
  <p>const money = [100, 200, 50];</p>
  <p>const totalMoney = money.reduce((sum, amount) => sum + amount, 0);</p>
  <p>Answer or Error: 350</p>
  <p>Why: reduce() har amount ko sum me add karta hai.</p>
</div>

<div>
  <h1>Example 2: Total steps walked in a week</h1>
  <p>Fitness tracker</p>
  <p>const steps = [3000, 5000, 4000, 6000];</p>
  <p>const weeklySteps = steps.reduce((total, step) => total + step, 0);</p>
  <p>Answer or Error: 18000</p>
  <p>Why: Sabhi daily steps ko ek total me joda gaya hai.</p>
</div>

<div>
  <h1>Example 3: Find total cart price</h1>
  <p>Shopping bill</p>
  <p>const prices = [499, 299, 199];</p>
  <p>const totalPrice = prices.reduce((total, price) => total + price, 0);</p>
  <p>Answer or Error: 997</p>
  <p>Why: reduce() prices ka total nikalta hai.</p>
</div>

<div>
  <h1>Example 4: Find maximum score</h1>
  <p>Highest exam mark</p>
  <p>const marks = [45, 88, 67, 92];</p>
  <p>const highest = marks.reduce((max, mark) => mark > max ? mark : max);</p>
  <p>Answer or Error: 92</p>
  <p>Why: Har value ko compare karke sabse bada number return hota hai.</p>
</div>

<div>
  <h1>Example 5: Count total characters</h1>
  <p>Text length calculation</p>
  <p>const words = ['Hi', 'Hello', 'JS'];</p>
  <p>const totalChars = words.reduce((count, word) => count + word.length, 0);</p>
  <p>Answer or Error: 9</p>
  <p>Why: Har word ki length ko add kiya gaya hai.</p>
</div>

<div>
  <h1>Example 6: Combine words into a sentence</h1>
  <p>Message builder</p>
  <p>const words = ['Learning', 'JavaScript', 'is', 'fun'];</p>
  <p>const sentence = words.reduce((text, word) => text + ' ' + word);</p>
  <p>Answer or Error: Learning JavaScript is fun</p>
  <p>Why: reduce() words ko ek string me combine karta hai.</p>
</div>

<div>
  <h1>Example 7: Count passed students</h1>
  <p>Result summary</p>
  <p>const marks = [35, 72, 88, 40, 25];</p>
  <p>const passCount = marks.reduce((count, mark) => mark >= 40 ? count + 1 : count, 0);</p>
  <p>Answer or Error: 3</p>
  <p>Why: Sirf pass marks par count increase hota hai.</p>
</div>

<div>
  <h1>Example 8: Calculate final balance</h1>
  <p>Bank account calculation</p>
  <p>const transactions = [1000, -200, -300, 500];</p>
  <p>const finalBalance = transactions.reduce((balance, amount) => balance + amount, 0);</p>
  <p>Answer or Error: 1000</p>
  <p>Why: Credits aur debits ko add karke final balance milta hai.</p>
</div>

<div>
  <h1>Example 9: Build comma-separated string</h1>
  <p>Display values in UI</p>
  <p>const items = ['Pen', 'Book', 'Pencil'];</p>
  <p>const result = items.reduce((text, item) => text + ', ' + item);</p>
  <p>Answer or Error: Pen, Book, Pencil</p>
  <p>Why: reduce() array ko ek string me convert karta hai.</p>
</div>

<!-- JavaScript .Map, .Filter() and .reduce() Method Examples: -->

<div>
  <h1>Example 1: Shopping App – Discounted Total</h1>
  <p>const prices = [200, 800, 1200, 450, 700];</p>
  <p>const total = prices.filter(price => price > 500).map(price => price * 0.9).reduce((sum, price) => sum + price, 0);</p>
  <p>Answer or Error: 2430</p>
  <p>Why: Pehle 500 se upar prices filter hue, phir 10% discount laga aur end me total nikala.</p>
</div>

<div>
  <h1>Example 2: Fitness App – Total Active Minutes</h1>
  <p>const minutes = [20, 45, 60, 15, 90];</p>
  <p>const totalCalories = minutes.filter(min => min > 30).map(min => min * 5).reduce((total, cal) => total + cal, 0);</p>
  <p>Answer or Error: 975</p>
  <p>Why: 30 se zyada minutes wale days select hue, calories me convert hue aur total add hua.</p>
</div>

<div>
  <h1>Example 3: Exam System – Average of Passed Marks</h1>
  <p>const marks = [35, 72, 88, 40, 25, 90];</p>
  <p>const passed = marks.filter(mark => mark >= 40);</p>
  <p>const average = passed.reduce((sum, mark) => sum + mark, 0) / passed.length;</p>
  <p>Answer or Error: 72.5</p>
  <p>Why: Sirf passing marks liye gaye aur unka average nikala.</p>
</div>

<div>
  <h1>Example 4: Salary System – Monthly Payout</h1>
  <p>const wages = [300, 800, 450, 1000, 600];</p>
  <p>const totalPayout = wages.filter(wage => wage > 500).map(wage => wage + 100).reduce((total, wage) => total + wage, 0);</p>
  <p>Answer or Error: 2700</p>
  <p>Why: 500 se zyada wages par bonus add karke total payout nikala.</p>
</div>

<div>
  <h1>Example 5: Online Course – Completion Points</h1>
  <p>const progress = [20, 50, 75, 40, 100];</p>
  <p>const totalPoints = progress.filter(p => p >= 50).map(p => p * 2).reduce((sum, p) => sum + p, 0);</p>
  <p>Answer or Error: 450</p>
  <p>Why: Completed lessons ko points me convert karke total nikala.</p>
</div>

<div>
  <h1>Example 6: Bank Transactions – Final Balance</h1>
  <p>const transactions = [1000, -500, 2000, -300, 1500];</p>
  <p>const creditedAmount = transactions.filter(amount => amount > 0).map(amount => amount * 1.02).reduce((total, amount) => total + amount, 0);</p>
  <p>Answer or Error: 4590</p>
  <p>Why: Sirf credit transactions par interest add karke total calculate hua.</p>
</div>

<div>
  <h1>Example 7: Game App – Final Score</h1>
  <p>const scores = [30, 60, 90, 45, 80];</p>
  <p>const finalScore = scores.filter(score => score > 50).map(score => score + 10).reduce((sum, score) => sum + score, 0);</p>
  <p>Answer or Error: 270</p>
  <p>Why: 50 se upar scores par bonus add karke sum nikala.</p>
</div>

<div>
  <h1>Example 8: E-commerce – Total Taxed Amount</h1>
  <p>const prices = [500, 1200, 3000, 800, 1500];</p>
  <p>const finalAmount = prices.filter(price => price > 1000).map(price => price * 1.18).reduce((sum, price) => sum + price, 0);</p>
  <p>Answer or Error: 6724</p>
  <p>Why: 1000 se upar items par tax add karke final amount nikala.</p>
</div>

<div>
  <h1>Example 9: Attendance System – Reward Points</h1>
  <p>const hours = [6, 8, 9, 7, 10];</p>
  <p>const totalPoints = hours.filter(hour => hour >= 8).map(hour => hour * 10).reduce((sum, point) => sum + point, 0);</p>
  <p>Answer or Error: 270</p>
  <p>Why: 8 ya usse zyada hours par points calculate hue aur total hua.</p>
</div>

<div>
  <h1>Example 10: Interview Brain Teaser</h1>
  <p>const numbers = [1, 2, 3, 4, 5, 6];</p>
  <p>const sumOfSquares = numbers.filter(num => num % 2 === 0).map(num => num * num).reduce((sum, num) => sum + num, 0);</p>
  <p>Answer or Error: 56</p>
  <p>Why: Even numbers ke squares ka sum nikala gaya.</p>
</div>


<!-- JavaScript Question for .Map(), .filter() and .reduce() -->

<div>
  <h1>Example 1: Grocery Store – Total Cost</h1>
  <p>const prices = [50, 120, 300, 80, 200];</p>
  <p>const totalCost = prices.filter(p => p > 100).map(p => p * 1.05).reduce((s, p) => s + p, 0);</p>
  <p>Answer or Error: 651</p>
  <p>Why: 100 se zyada items par 5% tax lagakar total nikala.</p>
</div>

<div>
  <h1>Example 2: Fitness App – Weekly Calories</h1>
  <p>const minutes = [10, 25, 40, 15, 60];</p>
  <p>const totalCalories = minutes.filter(m => m >= 20).map(m => m * 4).reduce((s, c) => s + c, 0);</p>
  <p>Answer or Error: 500</p>
  <p>Why: 20+ minutes wale days ko calories me convert kiya.</p>
</div>

<div>
  <h1>Example 3: Exam Results – Total Passed Marks</h1>
  <p>const marks = [35, 55, 80, 20, 45];</p>
  <p>const totalMarks = marks.filter(m => m >= 40).reduce((s, m) => s + m, 0);</p>
  <p>Answer or Error: 180</p>
  <p>Why: Sirf passing marks ka sum liya gaya.</p>
</div>

<div>
  <h1>Example 4: Bank App – Total Credits</h1>
  <p>const transactions = [500, -200, 1000, -300, 700];</p>
  <p>const totalCredit = transactions.filter(t => t > 0).reduce((s, t) => s + t, 0);</p>
  <p>Answer or Error: 2200</p>
  <p>Why: Sirf positive transactions add hue.</p>
</div>

<div>
  <h1>Example 5: Online Sale – Discounted Bill</h1>
  <p>const prices = [800, 1500, 3000, 600, 1200];</p>
  <p>const totalBill = prices.filter(p => p > 1000).map(p => p * 0.85).reduce((s, p) => s + p, 0);</p>
  <p>Answer or Error: 4760</p>
  <p>Why: 1000 se upar items par 15% discount laga.</p>
</div>

<div>
  <h1>Example 6: Attendance – Reward Points</h1>
  <p>const hours = [5, 7, 8, 6, 9];</p>
  <p>const totalPoints = hours.filter(h => h >= 7).map(h => h * 10).reduce((s, p) => s + p, 0);</p>
  <p>Answer or Error: 240</p>
  <p>Why: 7+ hours ko points me convert kiya.</p>
</div>

<div>
  <h1>Example 7: Delivery App – Total Distance</h1>
  <p>const distances = [3, 6, 10, 4, 8];</p>
  <p>const totalDistance = distances.filter(d => d > 5).map(d => d + 1).reduce((s, d) => s + d, 0);</p>
  <p>Answer or Error: 27</p>
  <p>Why: 5 km se zyada trips me bonus add hua.</p>
</div>

<div>
  <h1>Example 8: Salary System – Final Salary</h1>
  <p>const salaries = [18000, 25000, 30000, 15000];</p>
  <p>const totalSalary = salaries.filter(s => s > 20000).map(s => s + 2000).reduce((t, s) => t + s, 0);</p>
  <p>Answer or Error: 59000</p>
  <p>Why: Eligible salaries me bonus add karke total.</p>
</div>

<div>
  <h1>Example 9: Study App – Total Study Time</h1>
  <p>const hours = [0.5, 1.5, 2, 0.75, 3];</p>
  <p>const totalMinutes = hours.filter(h => h > 1).map(h => h * 60).reduce((s, m) => s + m, 0);</p>
  <p>Answer or Error: 390</p>
  <p>Why: 1 ghante se zyada sessions ko minutes me badla.</p>
</div>

<div>
  <h1>Example 10: Electricity Usage – Monthly Bill</h1>
  <p>const units = [80, 120, 200, 90, 150];</p>
  <p>const totalBill = units.filter(u => u > 100).map(u => u * 6).reduce((s, b) => s + b, 0);</p>
  <p>Answer or Error: 2820</p>
  <p>Why: 100 se upar units ka bill calculate hua.</p>
</div>

<div>
  <h1>Example 11: Game Scores – Final Power Score</h1>
  <p>const scores = [30, 50, 90, 20, 70];</p>
  <p>const powerScore = scores.filter(s => s > 40).map(s => s * 2).reduce((t, s) => t + s, 0);</p>
  <p>Answer or Error: 420</p>
  <p>Why: High scores double karke sum hue.</p>
</div>

<div>
  <h1>Example 12: Travel App – Total Fare</h1>
  <p>const rides = [5, 12, 20, 8, 15];</p>
  <p>const totalFare = rides.filter(r => r > 10).map(r => r + 50).reduce((s, r) => s + r, 0);</p>
  <p>Answer or Error: 147</p>
  <p>Why: Long rides me service fee add hui.</p>
</div>

<div>
  <h1>Example 13: Office Work – Productive Hours</h1>
  <p>const hours = [4, 6, 8, 5, 9];</p>
  <p>const productiveMinutes = hours.filter(h => h >= 6).map(h => h * 60).reduce((s, m) => s + m, 0);</p>
  <p>Answer or Error: 1380</p>
  <p>Why: 6+ hours ko minutes me convert kiya.</p>
</div>

<div>
  <h1>Example 14: Shopping Cart – Reward Coins</h1>
  <p>const purchases = [300, 800, 1200, 400];</p>
  <p>const coins = purchases.filter(p => p > 500).map(p => 10).reduce((s, c) => s + c, 0);</p>
  <p>Answer or Error: 20</p>
  <p>Why: Har eligible purchase par 10 coins mile.</p>
</div>

<div>
  <h1>Example 15: Fuel App – Total Fuel Cost</h1>
  <p>const liters = [3, 6, 10, 4, 8];</p>
  <p>const totalFuelCost = liters.filter(l => l > 5).map(l => l * 105).reduce((s, c) => s + c, 0);</p>
  <p>Answer or Error: 2520</p>
  <p>Why: 5 se zyada liters ka total cost nikla.</p>
</div>

<div>
  <h1>Example 16: Interview Classic – Sum of Cubes</h1>
  <p>const numbers = [1, 2, 3, 4, 5];</p>
  <p>const sumCubes = numbers.filter(n => n % 2 !== 0).map(n => n ** 3).reduce((s, n) => s + n, 0);</p>
  <p>Answer or Error: 153</p>
  <p>Why: Odd numbers ke cubes ka sum.</p>
</div>

<div>
  <h1>Example 17: Performance Tracking – Bonus Points</h1>
  <p>const scores = [10, 20, 30, 40, 50];</p>
  <p>const avg = scores.reduce((s, n) => s + n, 0) / scores.length;</p>
  <p>const totalScore = scores.filter(s => s > avg).map(s => s + 5).reduce((t, s) => t + s, 0);</p>
  <p>Answer or Error: 100</p>
  <p>Why: Average se upar scores me bonus add hua.</p>
</div>

<div>
  <h1>Example 18: Subscription App – Final Bill</h1>
  <p>const plans = [199, 399, 599, 299];</p>
  <p>const finalBill = plans.filter(p => p > 300).map(p => p * 1.18).reduce((s, p) => s + p, 0);</p>
  <p>Answer or Error: 1180.82</p>
  <p>Why: 300 se upar plans par tax add hua.</p>
</div>

<div>
  <h1>Example 19: Learning App – Achievement Score</h1>
  <p>const scores = [45, 60, 70, 30, 80];</p>
  <p>const totalScore = scores.filter(s => s >= 60).map(s => s * s).reduce((t, s) => t + s, 0);</p>
  <p>Answer or Error: 14900</p>
  <p>Why: Eligible scores ke squares ka sum.</p>
</div>

<div>
  <h1>Example 20: Interview Finisher</h1>
  <p>const numbers = [3, 6, 9, 10, 12];</p>
  <p>const finalSum = numbers.filter(n => n % 3 === 0).map(n => n * 10).reduce((s, n) => s + n, 0);</p>
  <p>Answer or Error: 300</p>
  <p>Why: 3 se divisible numbers ka final sum.</p>
</div>


<!-- JavaScript – Interview‑Style Practice Questions (Beginner → Advanced) -->
/*****************************************************
 🟢 VARIABLES & DATA TYPES (1–15)
*****************************************************/

let a = "a";
let b = "10";
let c = 10;
let d;
let e = null;

// 1
console.log(a == "a");   // true (value check)
console.log(a === "a");  // true (value + type same)

// 2
console.log(b == c);   // true (string "10" → number 10)
console.log(b === c);  // false (string !== number)
// ERROR REASON: == does type coercion, === does not.

// 3
b = Number(b);
console.log(b === c); // true

// 4
console.log(d === undefined); // true

// 5
if (d == null) console.log("d is null or undefined");
if (e == null) console.log("e is null or undefined");

// 6
console.log(null == undefined);  // true
console.log(null === undefined); // false

// 7
console.log(c + "10"); // "1010" (string concat)
console.log(c + Number("10")); // 20 (fixed)

// 8
let result = c / "a";
console.log(Number.isNaN(result)); // true

// 9
let num1 = Number("10");
let num2 = +"10";

// 10
let str1 = String(c);
let str2 = c.toString();

// 11
console.log(Boolean(0)); // false
console.log(!!"hello");  // true

// 12
const pi = 3.14;
// pi = 3; ❌ ERROR: Assignment to constant variable

// 13
let x = 5;
let y = x;
y = 20;
console.log(x); // 5 (unchanged)

// 14
console.log(0 == false); // true (coercion)

// 15
console.log("5" === 5); // false (fixed using strict equality)



/*****************************************************
 🟢 OPERATORS (16–30)
*****************************************************/

// 16 Even without %
let n = 4;
console.log((n & 1) === 0);

// 17 Max without if or Math.max
let m1 = 5, m2 = 9;
let max = m1 > m2 ? m1 : m2;

// 18 Calculator
function calc(a,b,op){
  if(op==="+") return a+b;
  if(op==="-") return a-b;
  if(op==="*") return a*b;
  if(op==="/") return a/b;
}

// 19 Default
let username = null;
console.log(username ?? "Guest");

// 20
let age = 18;
let status = age>=18 ? "Adult":"Minor";

// 21
let marks = 85;
let grade = marks>=90?"A":marks>=75?"B":"C";

// 22
true && console.log("Executed");

// 23
console.log(false && "Won’t run");

// 24
console.log("5" == 5);  // true
console.log("5" === 5); // false

// 25
let val = null;
console.log(val ?? "Default");

// 26
console.log(0 || 100);  // 100
console.log(0 ?? 100);  // 0

// 27
let arr1=[1,2], arr2=[3,4];
let merged=[...arr1,...arr2];

// 28
function sumAll(...nums){
  return nums.reduce((a,b)=>a+b,0);
}

// 29
let copy=[...arr1];
copy.push(99);

// 30
console.log(2+3*4); // 14 (multiplication first)



/*****************************************************
 🟡 CONTROL FLOW (31–45)
*****************************************************/

// 31
function gradeSys(m){
 if(m>=90) return "A";
 else if(m>=75) return "B";
 else return "C";
}

// 32
function gradeSwitch(g){
 switch(true){
  case g>=90: return "A";
  case g>=75: return "B";
  default: return "C";
 }
}

// 33
switch(2){
 case 1: console.log("One");
 case 2: console.log("Two"); // fall-through
}

// 34
let user="admin", pass="123";
if(user==="admin"){
 if(pass==="123") console.log("Login success");
}

// 35
if(user==="admin" && pass==="123") console.log("Login success");

// 36
if(true && true) console.log("Both true");

// 37
if(age>18 || age===18) console.log("Valid");

// 38
let choice=1;
switch(choice){
 case 1: console.log("Start"); break;
 case 2: console.log("Stop"); break;
}

// 39 Missing break shows fall-through

// 40 if-else equivalent of switch done above

// 41
let num=50;
if(num>=1 && num<=100) console.log("In range");

// 42
function test(val){
 if(!val) return "Invalid";
 return "Valid";
}

// 43
let light="red";
switch(light){
 case "red": console.log("Stop"); break;
 case "green": console.log("Go"); break;
}

// 44
let rain=true;
if(rain) console.log("Take umbrella");

// 45
function divide(a,b){
 if(b===0) return "Cannot divide by zero";
 return a/b;
}



/*****************************************************
 🟡 LOOPS (46–60)
*****************************************************/

// 46
for(let i=1;i<=100;i++) console.log(i);

// 47
for(let i=2;i<=100;i+=2) console.log(i);

// 48
for(let i=1;i<=10;i++){
 if(i===5) break;
}

// 49
for(let i=1;i<=10;i++){
 if(i%3===0) continue;
}

// 50
let sum=0;
for(let i=1;i<=5;i++) sum+=i;

// 51 Reverse number
let numRev=123, rev=0;
while(numRev>0){
 rev=rev*10+numRev%10;
 numRev=Math.floor(numRev/10);
}

// 52 Count digits
let count=0,temp=12345;
while(temp>0){ count++; temp=Math.floor(temp/10); }

// 53 Factorial
let fact=1;
for(let i=1;i<=5;i++) fact*=i;

// 54 Fibonacci
let f1=0,f2=1;
for(let i=0;i<5;i++){
 let next=f1+f2;
 f1=f2; f2=next;
}

// 55 Break nested
outer: for(let i=0;i<3;i++){
 for(let j=0;j<3;j++){
  break outer;
 }
}

// 56 continue shown above

// 57 Multiplication
for(let i=1;i<=10;i++) console.log(5*i);

// 58 Infinite loop fix
let k=0;
while(k<5){ k++; }

// 59 for vs while → for when count known

// 60
[1,2,3].forEach(n=>console.log(n));



/*****************************************************
 🟡 FUNCTIONS (61–80)
*****************************************************/

// 61
function sum(a,b){ return a+b; }

// 62
const sumArrow=(a,b)=>a+b;

// 63
function greet(name="Guest"){ return name; }

// 64
function outer(){ return function(){ return "Inner"; } }

// 65
function run(fn){ fn(); }

// 66
function process(cb){ cb("Done"); }

// 67 Pure
function add(a,b){ return a+b; }

// 68 Side effect
let counter=0;
function inc(){ counter++; }

// 69 Recursion
function factRec(n){
 if(n===1) return 1;
 return n*factRec(n-1);
}

// 70 Iterative
function factIter(n){
 let r=1;
 for(let i=1;i<=n;i++) r*=i;
 return r;
}

// 71
function total(...args){
 return args.reduce((a,b)=>a+b,0);
}

// 72
function hof(fn){ return fn(5); }

// 73 Closure
function counterFn(){
 let c=0;
 return ()=>++c;
}

// 74 Counter
let cnt=counterFn();

// 75 Currying
const multiply=a=>b=>a*b;

// 76 Memoization
function memo(){
 let cache={};
 return function(n){
  if(cache[n]) return cache[n];
  return cache[n]=n*n;
 }
}

// 77
function safe(a){
 if(typeof a!=="number") return "Invalid";
 return a*2;
}

// 78 Arrow doesn’t have own this

// 79 Run once
let once=(function(){
 let done=false;
 return function(){
  if(!done){ done=true; console.log("Run"); }
 }
})();

// 80 DRY
function square(n){ return n*n; }



/*****************************************************
 🔵 ARRAYS (81–101)
*****************************************************/

let arr=[1,2,3,4,5];

// 81
arr.reduce((a,b)=>a+b,0);

// 82
Math.max(...arr);

// 83
[...new Set([1,2,2,3])];

// 84
let sorted=[...arr].sort((a,b)=>b-a);
let second=sorted[1];

// 85
arr.filter(n=>n>0);

// 86
arr.map(n=>n*n);

// 87
arr.reduce((c)=>c+1,0);

// 88
arr.filter(n=>n>2).map(n=>n*2).reduce((a,b)=>a+b,0);

// 89
arr.find(n=>n>3);

// 90
arr.some(n=>n>4);

// 91
arr.every(n=>n>0);

// 92
let [first,...rest]=arr;

// 93
[...arr,...[6,7]];

// 94 Deep clone
JSON.parse(JSON.stringify(arr));

// 95 Bubble sort
function bubble(a){
 for(let i=0;i<a.length;i++){
  for(let j=0;j<a.length-1;j++){
   if(a[j]>a[j+1]){
    [a[j],a[j+1]]=[a[j+1],a[j]];
   }
  }
 }
 return a;
}

// 96 Rotate
function rotate(a){
 return [...a.slice(1),a[0]];
}

// 97 Flatten
function flat(a){
 return a.reduce((acc,val)=>
  Array.isArray(val)?acc.concat(flat(val)):acc.concat(val),[]);
}

// 98 Custom map
Array.prototype.myMap=function(cb){
 let res=[];
 for(let i=0;i<this.length;i++){
  res.push(cb(this[i],i,this));
 }
 return res;
}

// 99 Custom filter
Array.prototype.myFilter=function(cb){
 let res=[];
 for(let i=0;i<this.length;i++){
  if(cb(this[i])) res.push(this[i]);
 }
 return res;
}

// 100 Custom reduce
Array.prototype.myReduce=function(cb,acc){
 for(let i=0;i<this.length;i++){
  acc=cb(acc,this[i]);
 }
 return acc;
}

// 101 FINAL BOSS
let final = arr
 .filter(n=>n%2===0)
 .map(n=>n*10)
 .reduce((a,b)=>a+b,0);

console.log(final);

<!-- JavaScript Core Concepts – Interview Questions (Beginner → Advanced) -->
# JavaScript Interview Q&A (Beginner to Advanced)

---

# 🟢 BEGINNER LEVEL (1–20)

## Q1. Variables

`var` is function-scoped and can be re-declared.
`let` is block-scoped and can be reassigned.
`const` is block-scoped and cannot be reassigned.

---

## Q2. Data Types

Primitive types:

* string
* number
* boolean
* undefined
* null
* bigint
* symbol

---

## Q3. Type Checking

Use `typeof` operator.

```js
typeof variable;
```

---

## Q4. Operators

`==` compares values (type coercion allowed).
`===` compares value and type (strict comparison).

---

## Q5. Arithmetic Operators

```js
let x = 10;
console.log(x + 5 * 2);
```

Output: `20`
Reason: Multiplication happens before addition.

---

## Q6. String Concatenation

```js
console.log('5' + 2);
```

Output: `'52'` (number converts to string)

---

## Q7. Boolean Logic

```js
console.log(true && false);
```

Output: `false`

---

## Q8. Functions

A function is a reusable block of code used to perform a task.

---

## Q9. Function Call

```js
function add(a, b) {
  return a + b;
}
add(2, 3);
```

Output: `5`

---

## Q10. Arrays

```js
let arr = [1, 2, 3];
```

---

## Q11. Array Access

```js
const arr = [10, 20, 30];
console.log(arr[1]);
```

Output: `20`

---

## Q12. Objects

An object stores data in key-value pairs.

---

## Q13. Object Access

```js
const user = { name: 'A', age: 20 };
console.log(user.age);
```

Output: `20`

---

## Q14. Control Flow

An `if` statement runs code only if a condition is true.

---

## Q15. Condition Check

```js
let x = 5;
if (x > 3) console.log('Yes');
```

Output: `Yes`

---

## Q16. Loops

A loop repeats code multiple times.

---

## Q17. for Loop

```js
for (let i = 0; i < 3; i++) {
  console.log(i);
}
```

Output:

```
0
1
2
```

---

## Q18. while Loop

Use `while` when the number of iterations is unknown.

---

## Q19. Increment Operator

```js
let a = 5;
a++;
console.log(a);
```

Output: `6`

---

## Q20. Comments

Single-line:

```js
// comment
```

Multi-line:

```js
/* comment */
```

---

# 🟡 INTERMEDIATE LEVEL (21–35)

## Q21. Scope

Block scope means variables declared with `let` or `const` exist only inside `{}`.

---

## Q22. Hoisting

Hoisting moves variable and function declarations to the top of their scope before execution.

---

## Q23. Undefined vs Null

`undefined` = variable declared but not assigned.
`null` = intentional empty value.

---

## Q24. Truthy & Falsy

Falsy values:

* false
* 0
* ''
* null
* undefined
* NaN

---

## Q25. Functions vs Arrow Functions

Arrow functions:

* No own `this`
* Shorter syntax

---

## Q26. Parameters vs Arguments

Parameters = variables in function definition.
Arguments = values passed when calling.

---

## Q27. Return Keyword

If no return → function returns `undefined`.

---

## Q28. Array Methods

`push()` adds to end.
`pop()` removes from end.

---

## Q29. Loop vs Array Methods

Use loops for complex control.
Use array methods for cleaner functional style.

---

## Q30. Object Iteration

```js
for (let key in obj) {
  console.log(key, obj[key]);
}
```

---

## Q31. Break & Continue

`break` stops loop.
`continue` skips current iteration.

---

## Q32. Comparison Operators

```js
console.log(0 == false);  // true
console.log(0 === false); // false
```

---

## Q33. Ternary Operator

```js
status = age >= 18 ? 'adult' : status;
```

---

## Q34. Array Destructuring

Extract values from array into variables.

```js
let [a, b] = [1, 2];
```

---

## Q35. Spread Operator

Copies or merges arrays.

```js
let newArr = [...arr];
```

---

# 🔵 ADVANCED LEVEL (36–50)

## Q36. Closures

A closure remembers variables from its outer scope.

```js
function outer() {
  let count = 0;
  return function() {
    count++;
    return count;
  }
}
```

---

## Q37. Execution Context

Environment where JS code runs (Global & Function context).

---

## Q38. Call Stack

Stack that manages function execution order (LIFO).

---

## Q39. Pass by Value vs Reference

Primitives copy by value.
Objects/arrays copy by reference.

---

## Q40. Shallow vs Deep Copy

Shallow copy copies references.
Deep copy creates fully independent copy.

---

## Q41. Higher-Order Functions

A function that takes or returns another function.

---

## Q42. Callback Functions

A function passed as an argument to another function.

---

## Q43. Immutability

Prevents unexpected data changes and improves predictability.

---

## Q44. Event Loop

Mechanism that handles asynchronous operations in JS.

---

## Q45. Synchronous vs Asynchronous

Synchronous runs line by line.
Asynchronous runs tasks without blocking execution.

---

## Q46. forEach vs map

`forEach()` executes function but returns nothing.
`map()` returns a new array.

---

## Q47. == Interview Trap ⭐

```js
console.log([] == []);
```

Output: `false`
Reason: Different references.

---

## Q48. typeof Interview Trap ⭐

```js
console.log(typeof null);
```

Output: `'object'` (historical JS bug)

---

## Q49. NaN Check

```js
Number.isNaN(value);
```

---

## Q50. FINAL INTERVIEW QUESTION 

JavaScript execution flow:

1. Global Execution Context created.
2. Memory phase (hoisting).
3. Code execution line by line.
4. Functions pushed to Call Stack.
5. Async tasks handled by Web APIs.
6. Event Loop moves callbacks to Call Stack when ready.

---

<!-- JavaScript Dom -->
<div>
<h1> Example 1: </h1>
<p>What is the DOM? How does it represent the HTML structure?</p>

<p><b>Ans:</b></p>
<p>
DOM (Document Object Model) ek programming interface hai jo HTML document ko tree structure me represent karta hai.
Har HTML tag ek node ban jata hai aur pura page ek tree ki tarah structure hota hai.
</p>

<p><b>Why:</b></p>
<p>
JavaScript DOM ke through HTML elements ko access aur manipulate kar sakta hai.
</p>
</div>

<div>
<h1> Example 2: </h1>
<p>Name the types of nodes in the DOM tree.</p>

<p><b>Ans:</b></p>
<p>
1. Element Node  
2. Text Node  
3. Attribute Node  
4. Comment Node  
5. Document Node
</p>

<p><b>Why:</b></p>
<p>
DOM tree me har cheez ek node hoti hai — chahe wo tag ho, text ho ya comment.
</p>
</div>

<div>
<h1> Example 3: </h1>
<p>Difference between element node and text node?</p>

<p><b>Ans:</b></p>
<p>
Element Node = HTML tag (jaise &lt;div&gt;, &lt;p&gt;)  
Text Node = Tag ke andar ka text content
</p>

<p><b>Why:</b></p>
<p>
Element structure banata hai, text node content show karta hai.
</p>
</div>

<div>
<h1> Example 4: </h1>
<p>Identify nodes in: &lt;div&gt;Hello&lt;span&gt;World&lt;/span&gt;&lt;/div&gt;</p>

<p><b>Ans:</b></p>
<p>
Document Node  
└── div (Element Node)  
  ├── "Hello" (Text Node)  
  └── span (Element Node)  
    └── "World" (Text Node)
</p>

<p><b>Why:</b></p>
<p>
Har tag element node hai aur andar ka text text node hai.
</p>
</div>

<div>
<h1> Example 5: </h1>
<p>Difference between getElementById and querySelector?</p>

<p><b>Ans:</b></p>
<p>
getElementById("id") = Sirf ID se select karta hai  
querySelector() = CSS selector use karta hai (#id, .class, tag)
</p>

<p><b>Why:</b></p>
<p>
querySelector flexible hai, getElementById fast aur specific hai.
</p>
</div>

<div>
<h1> Example 6: </h1>
<p>What does getElementsByClassName return? Is it an array?</p>

<p><b>Ans:</b></p>
<p>
Ye HTMLCollection return karta hai. Ye array nahi hota.
</p>

<p><b>Why:</b></p>
<p>
Isme length hoti hai lekin array methods (forEach etc.) directly use nahi kar sakte.
</p>
</div>

<div>
<h1> Example 7: </h1>
<p>Select all buttons with class "buy-now".</p>

<p><b>Ans:</b></p>
<p>
document.querySelectorAll(".buy-now");
</p>

<p><b>Why:</b></p>
<p>
querySelectorAll CSS selector use karke multiple elements return karta hai.
</p>
</div>

<div>
<h1> Example 8: </h1>
<p>Select heading by ID and change text.</p>

<p><b>Ans:</b></p>
<p>
let head = document.getElementById("heading");  
head.textContent = "Welcome to JS DOM";
</p>

<p><b>Why:</b></p>
<p>
textContent se safe tarike se text change hota hai.
</p>
</div>

<div>
<h1> Example 9: </h1>
<p>Select all &lt;li&gt; and print text.</p>

<p><b>Ans:</b></p>
<p>
let list = document.querySelectorAll("li");  

list.forEach((val)=>{  
console.log(val.textContent);  
});
</p>

<p><b>Why:</b></p>
<p>
querySelectorAll NodeList deta hai jisme forEach use kar sakte hain.
</p>
</div>

<div>
<h1> Example 10: </h1>
<p>Difference between innerText, textContent and innerHTML?</p>

<p><b>Ans:</b></p>
<p>
innerText = Visible text  
textContent = Saara text (hidden bhi)  
innerHTML = HTML tags ke saath content
</p>

<p><b>Why:</b></p>
<p>
innerHTML HTML ko parse karta hai, textContent sirf text handle karta hai.
</p>
</div>

<div>
<h1> Example 11: </h1>
<p>When should you use textContent instead of innerHTML?</p>

<p><b>Ans:</b></p>
<p>
Jab sirf text set karna ho aur HTML inject nahi karna ho.
</p>

<p><b>Why:</b></p>
<p>
Security ke liye (XSS attack avoid karne ke liye).
</p>
</div>

<div>
<h1> Example 12: </h1>
<p>Replace paragraph content with &lt;b&gt; Updated &lt;/b&gt; by JavaScript</p>

<p><b>Ans:</b></p>
<p>
let p = document.querySelector("p");  
p.innerHTML = "&lt;b&gt; Updated &lt;/b&gt; by JavaScript";
</p>

<p><b>Why:</b></p>
<p>
innerHTML se HTML tags render hote hain.
</p>
</div>

<div>
<h1> Example 13: </h1>
<p>How to get src of an image?</p>

<p><b>Ans:</b></p>
<p>
let img = document.querySelector("img");  
console.log(img.src);
</p>

<p><b>Why:</b></p>
<p>
src property image ka URL return karti hai.
</p>
</div>

<div>
<h1> Example 14: </h1>
<p>What does setAttribute() do?</p>

<p><b>Ans:</b></p>
<p>
Element me naya attribute add ya update karta hai.
</p>

<p><b>Why:</b></p>
<p>
Dynamic attribute control ke liye use hota hai.
</p>
</div>

<div>
<h1> Example 15: </h1>
<p>Add title attribute to div dynamically.</p>

<p><b>Ans:</b></p>
<p>
let div = document.querySelector("div");  
div.setAttribute("title","This is a div");
</p>

<p><b>Why:</b></p>
<p>
setAttribute attribute ko dynamically add karta hai.
</p>
</div>

<div>
<h1> Example 16: </h1>
<p>Remove disabled attribute from button.</p>

<p><b>Ans:</b></p>
<p>
let btn = document.querySelector("button");  
btn.removeAttribute("disabled");
</p>

<p><b>Why:</b></p>
<p>
removeAttribute attribute delete karta hai.
</p>
</div>

<div>
<h1> Example 17: </h1>
<p>What does createElement() do? What is returned?</p>

<p><b>Ans:</b></p>
<p>
Naya HTML element create karta hai aur element node return karta hai.
</p>

<p><b>Why:</b></p>
<p>
Dynamic DOM manipulation ke liye use hota hai.
</p>
</div>

<div>
<h1> Example 18: </h1>
<p>Difference between appendChild() and prepend()?</p>

<p><b>Ans:</b></p>
<p>
appendChild() = End me add karta hai  
prepend() = Start me add karta hai
</p>

<p><b>Why:</b></p>
<p>
Position difference hota hai.
</p>
</div>

<div>
<h1> Example 19: </h1>
<p>Can you remove element using removeChild()?</p>

<p><b>Ans:</b></p>
<p>
Haan, parent.removeChild(child) se remove kar sakte hain.
</p>

<p><b>Why:</b></p>
<p>
Child element ko DOM se delete karta hai.
</p>
</div>

<div>
<h1> Example 20: </h1>
<p>Create new list item and add to end of ul.</p>

<p><b>Ans:</b></p>
<p>
let li = document.createElement("li");  
li.textContent = "New Task";  
document.querySelector("ul").appendChild(li);
</p>

<p><b>Why:</b></p>
<p>
createElement se new node banta hai aur appendChild se add hota hai.
</p>
</div>

<div>
<h1> Example 21: </h1>
<p>Create new image and add at top of div.</p>

<p><b>Ans:</b></p>
<p>
let img = document.createElement("img");  
img.src = "https://via.placeholder.com/150";  
document.querySelector("div").prepend(img);
</p>

<p><b>Why:</b></p>
<p>
prepend start position me element add karta hai.
</p>
</div>

<div>
<h1> Example 22: </h1>
<p>Select first list item and delete it.</p>

<p><b>Ans:</b></p>
<p>
let first = document.querySelector("ul li");  
first.remove();
</p>

<p><b>Why:</b></p>
<p>
remove() direct element ko delete karta hai.
</p>
</div>

<div>
<h1> Example 23: </h1>
<p>How to change background color?</p>

<p><b>Ans:</b></p>
<p>
element.style.backgroundColor = "yellow";
</p>

<p><b>Why:</b></p>
<p>
.style se inline CSS change hota hai.
</p>
</div>

<div>
<h1> Example 24: </h1>
<p>Difference between classList.add() and classList.toggle()?</p>

<p><b>Ans:</b></p>
<p>
add() = Class add karta hai  
toggle() = Agar class hai to remove karega, nahi hai to add karega
</p>

<p><b>Why:</b></p>
<p>
toggle dynamic switching ke liye useful hai.
</p>
</div>

<div>
<h1> Example 25: </h1>
<p>Add highlight class to every even item.</p>

<p><b>Ans:</b></p>
<p>
let li = document.querySelectorAll("ul li:nth-child(2n)");  

li.forEach((elem)=>{  
elem.classList.add("highlight");  
});
</p>

<p><b>Why:</b></p>
<p>
nth-child(2n) even elements select karta hai.
</p>
</div>

<div>
<h1> Example 26: </h1>
<p>Set font size of all &lt;p&gt; to 18px.</p>

<p><b>Ans:</b></p>
<p>
let para = document.querySelectorAll("p");  

para.forEach((p)=>{  
p.style.fontSize = "18px";  
});
</p>

<p><b>Why:</b></p>
<p>
Loop ke through sab elements ka style change hota hai.
</p>
</div>
