// for loop
for (let i = 1; i <= 5; i++) //(initialization;stop condition;updation)
{
    console.log("My Name is Pawan");
}

// Calculate sum 1 to 5
let sum = 0
for (let i = 1; i <= 5; i++) {
    sum += i;
}
console.log("Sum = ", sum);
// while
// do while

// for-of loop
let str = "Pawan";
let size = 0;
for (let i of str) {
    console.log(i);
    size++;
}
console.log(size);


// for-in loop
let student1 = {
    Name: "Pawan",
    Age: 23,
    cgpa: 6.2,
    isPass: true
};
for (let i in student1) {
    console.log("key = ", i, "value = ", student1[i]);
}

// create a program where you start with any random number and the user guess that number until he guesses the correct number
let gameNum = 25;
let num = prompt("Guess the Number");
console.log(num);
while (num != gameNum) {
    num = prompt("You Enter the wrong number. Guess again");
}

console.log("congratulations,You gues he right number and you won the game")