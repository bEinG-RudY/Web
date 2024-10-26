// Normal Function
function firstFunctiion() {
    console.log("Welcome Pawan");
    console.log("I am Learning JavaScript");
}

firstFunctiion();

// Function with Parameter

function myFunction(msg) {
    console.log(msg);
}

myFunction("I love Freedom");


// function to create sum of two numbers

function sumOfTwoNumbers(x, y) {
    console.log(x + y);
}

sumOfTwoNumbers(12, 96);


function sumOfTwoNumbers(x, y) {
    s = x + y;  //(function's local variable/block variable) it means these variables only exist in the scope of this function
    return s;                     // Using Return here for th sum
}

let val = sumOfTwoNumbers(12, 96);

console.log(val);


// compact way of writing function

function sum(a, b) {
    return a + b;
}

const arrowSum = (a, b) => {
    console.log(a + b);
};

function mul(a, b) {
    return a * b;
}

const arrowMul = (a, b) => {
    console.log(a * b);
}


// Createa afunciton using the "function" keyword that takes a String as an argument & returns the number of vowels in the string.
function returningTheVowels(str) {
    let vowel = 0;
    for (const char of str) {
        if (char === "a" || char === "A" || char === "e" || char === "E" || char === "i" || char === "I" || char === "o" || char === "O" || char === "u" || char === "U") {
            vowel++;
        }
    }
    return vowel;
}

console.log(returningTheVowels("ApnaCollege"));

const countVowels = (str) => {
    let vowel = 0;
    for (const char of str) {
        if (char === "a" || char === "A" || char === "e" || char === "E" || char === "i" || char === "I" || char === "o" || char === "O" || char === "u" || char === "U") {
            vowel++;
        }
    }
    return vowel;
}

console.log(countVowels("PawanKaCollege"));

// forEach function in Array
// A callback function passed as an argument to another function.

let arr = [1, 2, 3, 4, 5];
console.log("callback method");
arr.forEach(function printVal(val)   // printVal is callback function
{
    console.log(val);
});

// same above function using compact method
console.log("compact method");
arr.forEach((val) => {
    console.log(val);
});

// for given array of numbers, print the square of each value using the forEach loop.
let arr1 = [1, 2, 3, 4, 5];
console.log(" A program");
arr1.forEach((val) => {
    val = val * val;
    console.log(val);
}
);

// Map in JavaScript

let arr2 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
let newArr = arr2.map((val) => {
    return val * val;
});
console.log(newArr);

// filter(); filter out the value you need from the array, Reduce():it performs some operation and reduces the array to a single value.

let evenArr = arr2.filter((val) => {
    return val % 2 === 0;
});

console.log("Even array", evenArr);

let output = arr2.reduce((res, curr) => {
    return res + curr;
});
console.log("addition of all numbers in array is ", output);


let output1 = arr2.reduce((previous, curr) => {
    return previous > curr ? previous : curr;
});

console.log("the largest number is ", output1)