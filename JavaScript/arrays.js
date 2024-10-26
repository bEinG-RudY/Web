//Arrays are the collections of the data of some items
let heroes = ["ironman", "hulk", "thor", "wanda", "black widow"];
let marks = [97, 82, 75, 64, 36];
console.log(marks);
console.log(heroes);

// Array store the data on the indices, we can acces data or value using those indices

for (let i = 0; i < heroes.length; i++) {
    console.log(heroes[i]);
}

for (let i of marks) {
    console.log(i);
}

let cities = ["delhi", "pune", "mumbai", "hydrabad", "gurgoan"]


// Create a progaram to find the average of total marks

let mark = [85, 97, 44, 37, 76, 60];
let sum = 0

for (let val of mark) {
    sum += val;
}

let average = sum / mark.length;
console.log(`The average marks of the total is ${average}`);


// Array methods  push(): Add to end, pop(): delete from the end & return, toString(): converts array to string
let foodItems = ["potato", "apple", "lichi", "tomato"];
console.log(foodItems);
foodItems.push("paneer", "chips", "Burgur");
console.log(`After using push ${foodItems}`);
let deletedItem = foodItems.pop();
console.log(`After using pop`, foodItems);
console.log("deleted item = ", deletedItem);
console.log(foodItems.toString());

// unshift(): add at the starting index, shift(): delete at the starting index, concat(): add to arrays

let dcHeroes = ["batman", "superman", "aquaman", "wonder woman", "flash"];
let allHeroes = heroes.concat(dcHeroes);
console.log(allHeroes);
allHeroes.unshift("antman");
console.log(allHeroes);
allHeroes.shift();
console.log(allHeroes);

// slice(): returns a piece of the array , splice(): change original array(add, remove, replace)

let num = [1, 2, 3, 4, 5, 6, 7];
num.splice(2, 2, 101, 102); // deleting 2 element and added 2 element
console.log(num);


// creaye a array and perform these things - remove first company, remove uber and add ola in its place, add amazon at the end
let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
console.log(companies);
companies.shift();              //Removed the first company
console.log("After removing the first company", companies);
companies.splice(1, 1, "Ola");    // Replaced the Uber with Ola
console.log("After Replacing the Ola with Uber", companies);
companies.push("Amazon")        // Added the Amazon in the End
console.log("After adding Amazon at the end", companies);

