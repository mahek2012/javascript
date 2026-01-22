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
<!-- Example 1 -->
<div class="example">
  <h3>Example 1: Hoisting Error (let)</h3>

  <p><b>Code:</b></p>
  <pre>
console.log(a);
let a = 10;
  </pre>

  <p><b>Answer / Error:</b></p>
  <p class="error">❌ Error: Cannot access 'a' before initialization</p>

  <p><b>Why:</b></p>
  <p>
    Variables declared with <code>let</code> are hoisted,
    but they are not initialized.
    Accessing them before declaration causes an error.
  </p>
</div>

<!-- Example 2 -->
<div class="example">
  <h3>Example 2: Unary + Operator</h3>

  <p><b>Code:</b></p>
  <pre>
console.log(+"5" + 5);
  </pre>

  <p><b>Answer:</b></p>
  <p class="answer">10</p>

  <p><b>Why:</b></p>
  <p>
    The unary <code>+</code> operator converts the string <code>"5"</code>
    into a number, so numeric addition is performed.
  </p>
</div>

<!-- Example 3 -->
<div class="example">
  <h3>Example 3: String Concatenation</h3>

  <p><b>Code:</b></p>
  <pre>
console.log("5" + 5);
  </pre>

  <p><b>Answer:</b></p>
  <p class="answer">55</p>

  <p><b>Why:</b></p>
  <p>
    When the <code>+</code> operator is used with a string,
    JavaScript performs string concatenation.
  </p>
</div>

<!-- Example 4 -->
<div class="example">
  <h3>Example 4: typeof null</h3>

  <p><b>Code:</b></p>
  <pre>
console.log(typeof null);
  </pre>

  <p><b>Answer:</b></p>
  <p class="answer">object</p>

  <p><b>Why:</b></p>
  <p>
    This is a long-standing bug in JavaScript.
    Even though <code>null</code> is a primitive value,
    <code>typeof</code> returns <code>object</code>.
  </p>
</div>

<!-- Example 5 -->
<div class="example">
  <h3>Example 5: typeof Array</h3>

  <p><b>Code:</b></p>
  <pre>
let arr = [];
console.log(typeof arr);
console.log(arr instanceof Array);
  </pre>

  <p><b>Answer:</b></p>
  <p class="answer">object<br>true</p>

  <p><b>Why:</b></p>
  <p>
    Arrays are reference data types.
    <code>typeof</code> returns <code>object</code> for arrays,
    so <code>instanceof</code> is used to properly check arrays.
  </p>
</div>

<!-- Example 6 -->
<div class="example">
  <h3>Example 6: Logical NOT</h3>

  <p><b>Code:</b></p>
  <pre>
console.log(!12);
console.log(!!12);
  </pre>

  <p><b>Answer:</b></p>
  <p class="answer">false<br>true</p>

  <p><b>Why:</b></p>
  <p>
    Any non-zero number is truthy.
    <code>!</code> reverses the boolean value,
    and <code>!!</code> returns the original boolean value.
  </p>
</div>

<!-- Example 7 -->
<div class="example">
  <h3>Example 7: Ternary Operator</h3>

  <p><b>Code:</b></p>
  <pre>
let result = 12 > 13 ? "true" : "false";
console.log(result);
  </pre>

  <p><b>Answer:</b></p>
  <p class="answer">false</p>

  <p><b>Why:</b></p>
  <p>
    The condition <code>12 > 13</code> is false,
    so the else part of the ternary operator is executed.
  </p>
</div>
