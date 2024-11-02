// When a web page is loaded, the browser creates a Document Object Model for the Page. 
window.console.log("hi Pawan");

window.console.dir(Window); // printing the html from the JS

// DOM is a way to acces the html from javaScript

// DOM Manipulation

// tagName:
console.dir(document.body);


let heading = document.getElementById("header"); //get html element using ID, Id's are used using # for styling. it should be unique

console.log(heading);


let headings = document.getElementsByClassName("hello"); //get html element using class, classed used using . for styling. it can be used in many elements.
console.log(headings);

let parahs = document.getElementsByTagName("p");
console.dir(parahs);

// Query selector
let firstElements = document.querySelector("p"); // It returns first element related to word  mentioned in queryselector
console.dir(firstElements);      // tag name

let firstElements1 = document.querySelector(".hello"); //we use class name with . in query selector. It returns first element related to word  mentioned in queryselector
console.dir(firstElements1);     // class name

let allElements = document.querySelectorAll("p"); // It returns all element related to word  mentioned in queryselectorall
console.dir(allElements);        // tag name

let allElements1 = document.querySelectorAll(".hello"); // It returns all element related to word  mentioned in queryselectorall
console.dir(allElements1);       // Class name

let allElements2 = document.querySelectorAll("#header"); //id uses same method but we use # with it, It returns all element related to word  mentioned in queryselectorall
console.dir(allElements2);       // Id name


let myDiv = document.querySelector("div");
console.dir(myDiv);

let h1 = document.querySelector("h1");
console.log(h1.innerText); // h1.innerText // it returns only innertext only of  selected element
// innerText
h1.innerText = h1.innerText + " so what" // we can manipulate it like this
console.log(h1.innerText);

let hellos = document.querySelectorAll(".hello");
// hellos[0].innerText = "new unique value 1";
let idx = 1;
for (hello of hellos) {
    hello.innerText = `new unique value ${idx}`;
    idx++;
}

// innerHTML
// myDiv.innerHTML // it returns html element as well as inner text, we can write the tags aswell


// textContent
// myDiv.textContent //   return textual content even for hidden elements


// Attributes
let par = document.querySelector("p");
console.log(par.getAttribute("class"));

console.log(par.setAttribute("class", "Nani"));

// Style

let hell = document.querySelector("button");
hell.style.backgroundColor = "blue ";


// Insert new Element
let newBtn = document.createElement("Button");
newBtn.innerText = "The ";
console.log(newBtn);

//node.append(el) : Adds at he end of node(inside)
let newBtn0 = document.createElement("Button");
newBtn0.innerText = "The Text";
let div1 = document.querySelector("div");
div1.append(newBtn);

// node.prepend(el) : adds at hte start node (inside)
let newBtn1 = document.createElement("Button");
newBtn1.innerText = "The Text only";
let div2 = document.querySelector("div");
div2.prepend(newBtn);
// node.before(el) : adds before the node(outside)
let newBtn2 = document.createElement("Button");
newBtn2.innerText = "The Text only 1";
let div3 = document.querySelector("div");
div3.before(newBtn);
// node.after(el) : adds aftr the node(outside)
let newBtn3 = document.createElement("Button");
newBtn3.innerText = "The Text only 1 available";
let div = document.querySelector("div");
div.after(newBtn);


// delete the Element

let paragraph = document.querySelector(".hello");
paragraph.remove();
console.log(paragraph);