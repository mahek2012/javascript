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