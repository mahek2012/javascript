// DOM -- Document Object Model
// All Website Code --> DOM
// Website Output --> DOM
// DOM -- HTML body

// DOM Tree Structure:
// Node --> Element (ex. h1, div), text (ex. lorem), comment

// DOM Manipulation - change body or website using
// select element from html
// chagne text
// change html
// change css
// change attribute
// event listeners

// Selecting Elements
// getElementById
let a = document.getElementById("abc");
console.log(a);
// console.dir(a);

// // getElementsByClassName
let b = document.getElementsByClassName("abc");
console.log(b);

// // getElementsByTagName
let temp_c = document.getElementsByTagName("h1");
console.log(temp_c);

// // querySelector and querySelectorAll
// // most used in project and used by company
let c = document.querySelector("h1") // only select first element that find in your html
console.log(c);

let d = document.querySelectorAll("h1") // select all elements in you r html
console.log(d);

// // Text/Content access: innerText, textContent, innerHTML
let e = document.querySelector("h1")
console.dir(e);
e.innerText = "first h1 tag";
// document.querySelector("h1").innerText = "first h1 tag"
// e.textContent = "h1 tag"
e.innerHTML = "<i>first h1 tag</i>"
// e.outerHTML = "<i>h1 with outertext</i>"
// e.outerHTML = "h1 with outertext"

// outer vs inner
// innerText -- show text between tag -- ignore tag
// outerText -- show text between tag -- remove tag

// innerHTML -- show text between too tag -- not tag
// outerHTML -- show text with tag

// ----------------------------------------------------
// Attribute Manipulation
// getAttribute, setAttribute, removeAttribute
let link = document.querySelector('a')
console.dir(link)
// console.log("get Attribute", info) // -- give value of href attribute

// link.href = "https://www.google.com/"
// element.setAttribute("name", "change")
link.setAttribute("href", "www.google.com")
let info = link.getAttribute("href");
console.log("get Attribute", info) // -- give value
