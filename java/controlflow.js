// Control Flow Statements in JavaScript
// If-Else Statement (if, if else, if else-if else)
// if (condition) {} --> condition true hoy to {} code run

if (12 < 13) {
  console.log(true);
}

if (15 < 13) {
  console.log(true);
} // condition is false that why if statement not run

if (!12) {// 12 --> true,!12 --> false
  console.log("number");
}

if (!0) {
  console.log("number");
}

// if-else Statement
if (12 < 13) {
  console.log(true);
} else {
  console.log(false);
}

if (15 < 13) {
  console.log(true);
} // condition is false that why if statement not run
else {
  console.log(false); // if if statement condition is false then run this code
}

if (!12) {
  console.log("number");
} else {
  console.log("Not A Number");
}

// if-else if-else Statement
/*
if (condition) {
} else if (condition) {
} else {}
*/
let loggedin = false;
let admin = false;
if (loggedin && admin) {
  console.log("welcome admin");
} else if (loggedin) {
  console.log("welcome user");
} else {
  console.log("go to login page");
}
//if statement
let age = 20;
if (age >= 18) {
  console.log("You are eligible to vote");
}
//if-else statement
let number = 5;
if (number % 2 === 0) {
  console.log("Even Number");
} else {
  console.log("Odd Number");
}
//if-else if-else statement
let productPrice = 10000;
if (productPrice >= 10000) {
  console.log("30% Discount Applied");
}
else if (productPrice >= 7000) {
  console.log("20% Discount Applied");
}
else if (productPrice >= 3000) {
  console.log("10% Discount Applied");
}
else {
  console.log("No Discount Available");
}

// Switch case Statement
switch ("BOGO") // value --> Case value sathe match karshe ane code run thase
{
  case "First50":
    console.log("50% Off on First Order");
    break;
  case "BOGO":
    console.log("Buy one get one");
    break;
  case "BlackFriday":
    console.log("It's Black Friday Sale - get at Rs. 50");
    break;
  default:
    console.log("Offer Not Vaild");
}

// Early Return Pattern
function score(value) {
  if (value > 90) {
    return "Value is more than 90";
  } else if (value <= 60) {
    return "Value is less than 60";
  } else if (value <= 70) {
    return "Value is less than 70";
  } else if (value <= 80) {
    return "Value is less than 80";
  } else {
    return "Value is less than 60";
  }
}

console.log(score(65));

function score1(value) {
  if (value > 90) return "Value is more than 90";
  else if (value < 80) return "Value is less than 80";
  else if (value < 70) return "Value is less than 70";
  else if (value < 60) return "Value is less than 60";
  else return "Value is less than 60";
}

//Example 1
let x = 2;

switch (x) {
  case 2:
    console.log("Two");
  case 3:
    console.log("Three");
}
//Example 2
function getGrade(score) {
  if (score >= 90 && score <= 100) {
    return "A+";
  } else if (score >= 80 && score <= 89) {
    return "A";
  } else if (score >= 70 && score <= 79) {
    return "B";
  } else if (score >= 60 && score <= 69) {
    return "C";
  } else if (score >= 33 && score <= 59) {
    return "D";
  } else if (score >= 0 && score <= 32) {
    return "Fail";
  } else {
    return "Invalid Marks";
  }
}
//Example 3
function playGame(player1, player2) {
  if (player1 === player2) {
    return "Draw";
  }

  if (
    (player1 === "rock" && player2 === "scissors") ||
    (player1 === "paper" && player2 === "rock") ||
    (player1 === "scissors" && player2 === "paper")
  ) {
    return player1;
  } else {
    return player2;
  }
}
