// SetTimeout, clearTimeout
// setTimeout --> run only one time
// timeout -- in ms

let timmer = setTimeout(() => {
  console.log("Hello");
}, 2000);

clearTimeout(timmer);

// setInterval, clearInterval
// setInterval --> run into loop(infinte times)
let timmer1 = setInterval(() => {
  console.log("Hi");
}, 2000);

// clear Interval
clearInterval(timmer1);

// counter
let number = 0;
setInterval(() => {
  if (number <= 10) {
    console.log(number);
    number++;
  }
}, 1000);

// popup windows
let card = document.querySelector(".card");
let btn = document.querySelector("button");

setTimeout(() => {
  card.style.display = "block";
}, 5000);

btn.addEventListener("click", () => {
  card.style.display = "none";
});

// Real use: delaying UI actions, auto-refresh



// setTimeout Vs setInterval
