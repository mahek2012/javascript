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
 