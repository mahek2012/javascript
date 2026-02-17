// Event – page par koi pan action karo tene ek event rise karshe, page par click, hover, typing all are events
// Event Listener – event nu reaction — give reaction when click, dblclick, hover, typing

// Add Event Listener
// select --> event --> function --> what you change
// element.addEventListener("event_name", function(){})

// ===============================================
// Common Events : click, input, change, submit, mouseover, keyup
// Click
// let btn = document.querySelector("button");
let btn = document.querySelector(".btn1");
btn.addEventListener("click", ()=>{
    // // alert("Button Clicked")
    // document.body.classList.toggle("bg-color");
    if (btn.textContent === "Dark Mode"){
        btn.textContent = "Light Mode"
        document.body.style.backgroundColor = "black";
    } else {
        btn.textContent = "Dark Mode"
        document.body.style.backgroundColor = "white";
    }
})

// ===== Color Change Button =====
let colorBtn = document.querySelector(".btn");
let box = document.querySelector(".color-card");

colorBtn.addEventListener("click", () => {
    if (box.style.backgroundColor === "black") {
        box.style.backgroundColor = "white";
    } else {
        box.style.backgroundColor = "black";
    }
});


//input
// how to know which is typed ?
let inp = document.querySelector("input");
// console.dir(inp);

inp.addEventListener("input",(dets)=>{
    //console.log(dets);
    if(dets.data !== null){
        console.log(dets.data);
    }
});

//change -- when you change elements state
let select = document.querySelector(".sel");
let device = document.querySelector(".device")

select.addEventListener("change", (dets)=>{
    console.log(dets.target.value);
    device.textContent = dets.target.value;
})

select.addEventListener("change", (dets)=>{
    console.log(dets.target.value);
    device.textContent = dets.target.value;
})
// change event => change div color and border color with color input
let box1 = document.querySelector(".box");
let bg_inp = document.querySelector(".bg-inp");
let border_inp = document.querySelector(".border-inp");

bg_inp.addEventListener("change", (dets)=>{
    box1.style.backgroundColor = dets.target.value
})
border_inp.addEventListener("change", (dets)=>{
    box1.style.borderColor = dets.target.value
})

//submit
let form = document.querySelector("form");
form.addEventListener("submit",() => {
    document.body.style.backgroundColor = "green";
})

//mousemove and mouse
let box2 = document.querySelector(".box2");

box2.addEventListener("mousemove", () => {
    box2.style.backgroundColor = "skyblue";
    box2.style.width ="300px";
});

box2.addEventListener("mouseout", () => {
    box2.style.backgroundColor = "darkblue";
    box2.style.width ="150px";
});

//KeyDown
let text = document.querySelector(".keydown")

text.addEventListener("keydown", ()=> {
    text.style.backgroundColor = "black";
    text.style.color = "white";
    text.style.width = "5rem";
});
//keydown --> keyboard checker

