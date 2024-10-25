// Conditional if and else
let mode = "dark";
let color;

if (mode === "dark") {
    color = "black";
} else {
    color = "white"
}

console.log(color);

// conditional if, else if and else
if (mode === "dark") {
    color = "black";
} else if (mode === "pink") {
    color = "pink";
} else if (mode === "blue") {
    color = "blue";
} else if (mode === "red") {
    color = "red";
} else {
    color = "white";
}

console.log(color);

// Ternary Operator
let myAge = 23;
// condition ? true Output: false Output;
myAge >= 18 ? "adult" : "Not adult";

let number = prompt("Enter the Number");
if (number % 5 === 0) {
    console.log("the", number, "is multiple of 5");
} else {
    console.log("the", number, "is  not multiple of 5");
}