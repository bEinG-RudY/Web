let fulName = "Pawan";

let age = 23; //Number
let price = 120.50; //Number
let x = null;
let y = undefined;
let isFollow = false; //boolean
const phoneNum = 9211439965;
let a = BigInt("123");
let b = Symbol("$");
const student = {
    fullName: "Pawan",
    age: 23,
    phoneNumber: 9717095484,
    isOk: true
};
let c = 5;
let d = 4;

console.log("c = ", c, "d = ", d);
// Arthimetic Operators
console.log("c + d =", c + d); //Addition
console.log("c - d =", c - d); //Substraction
console.log("c * d =", c * d); //Multiplication
console.log("c / d =", c / d); // Division
console.log("c % d =", c % d); // % Gives us the remainder of the division part
console.log("c ** d =", c ** d); // Exponentiation


// Unary Operator

console.log("c =", c++);  //  Post Increment Operator                 
console.log("c  =", c--); // Post Decremenet Operator

console.log("c =", ++c);  //  Pre Increment Operator                 
console.log("c  =", --c); // Pre Decremenet Operator


// Asignment Operator

let e = 4;
let f = 3;

e -= 4 // a =a -4
e += 4 // a =a +4
e *= 4 // a =a * 4
e /= 4 // a =a /4
e %= 4 // a =a % 4
e **= 4 // a =a**4

console.log("e = ", e);


// Comparision Operator
let g = 2;
let h = 3;
let i = "2";
console.log(g == i); // == equals to
console.log(g === i)// === equals to but with data type restrictions
console.log(g != h)// != not equals to
console.log(g !== h)// !==
// >, < , <=, >=


//  Logical Operator
let j = true
console.log("g < h && h == i = ", g < h && h == i); // Logical AND
console.log("g < h || h == i = ", g < h || h == i); // Logical OR
console.log("j = ", j)
console.log("!j = ", !j);         // LOgical NOT