// ARRAYS AND LOOP:



// Q1:

// var arr1 = [];
// var arr2 = [];
// var arr3 = [];
// var mainArr = [arr1,arr2,arr3];

// console.log(mainArr);


// Q2:

// var arr1 = [0,1,2,3];
// var arr2 = [1,0,1,2];
// var arr3 = [2,1,0,1];
// var mainArr = [arr1,arr2,arr3];

// console.log(mainArr);


// Q3:

// for ( var i = 1 ; i <= 10 ; i++ ) {
//     console.log(i);
// }


// Q4:

// var num = +prompt("Enter a number to show it's multiplication table");
// var length = +prompt("Enter length of multiplication table");

// document.write(`Multiplication table of ${num} <br>`);
// document.write(`Length: ${length} <br> <br>`);

// for ( var i = 1 ; i <= length ; i++ ) {
//     document.write( ` ${num} x ${i} = ${num*i} <br> ` );
// }


// Q5:

// var fruits = ["apple","banana","mango","orange","strawberry"];

// for ( var i = 0 ; i < fruits.length ; i++ ) {
//     console.log(fruits[i]);
// }

// for ( var i = 0 ; i < fruits.length ; i++ ) {
//     console.log(`Element at index ${i} is ${fruits[i]}`);
// }


// Q6:

// a. Counting
// var counting = Array.from({ length: 15 }, (_, i) => i + 1);
// console.log("Counting:", counting.join(", "));

// b. Reverse counting
// var reverseCounting = Array.from({ length: 10 }, (_, i) => 10 - i);
// console.log("Reverse counting:", reverseCounting.join(", "));

// c. Even numbers
// var evenNumbers = Array.from({ length: 11 }, (_, i) => i * 2);
// console.log("Even:", evenNumbers.join(", "));

// d. Odd numbers
// var oddNumbers = Array.from({ length: 10 }, (_, i) => i * 2 + 1);
// console.log("Odd:", oddNumbers.join(", "));

// e. Series (2k)
// var kSeries = Array.from({ length: 10 }, (_, i) => (i + 1) * 2);
// console.log("Series (2k):", kSeries.join("k, "));


// Q7:

// var bakeryItems = ["cake","apple pie","cookie","chips","patties"];

// var userInput = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");

// var flag = false;

// for ( var i = 0 ; i < bakeryItems.length ; i++ ) {
//     if ( userInput === bakeryItems[i] ) {
//         console.log(` ${userInput} is available at index ${i} in our bakery `);
//         flag = true;
//     }
// }

// if ( flag === false ) {
//     console.log(`We are sorry. ${userInput} is not available in our bakery`);
// }


// Q8:

// var nums = [24,53,78,91,12];
// var largestNum = Math.max(nums);

// console.log(`Array Items: ${nums}`);
// console.log(`The largest number is ${largestNum}`);


// Q9:

// var nums = [24,53,78,91,12];
// var largestNum = Math.min(nums);

// console.log(`Array Items: ${nums}`);
// console.log(`The largest number is ${largestNum}`);


// Q10:

// for (let i = 1; i <= 100; i++) {
//     if (i % 5 === 0) {
//         console.log(i);
//     }
// }



// STRING METHODS:



// Q1:

// var firstName = prompt("Enter your first name");
// var lastName = prompt("Enter your last name");
// var fullName = firstName + lastName;

// alert(`Welcome ${fullName}`);


// Q2:

// var userInput = prompt("Enter your favourite mobile phone model");

// document.write(`My favourite phone is: ${userInput} <br>`);
// document.write(`Length of string: ${userInput.length}`);


// Q3:

// var string = "Pakistani";

// document.write(`String: ${string} <br>`);
// document.write(`Index of 'n': ${7}`);


// Q4:

// var word = "Hello world";
// var letter = "l";
// var lastIndex = word.lastIndexOf(letter);

// console.log(`Last index of 'l': ${lastIndex}`);


// Q5:

// var string = "Pakistani";

// document.write(`String: ${string} <br>`);
// document.write(`Character at index 3: ${string[3]}`);


// Q6:

// var firstName = prompt("Enter your first name");
// var lastName = prompt("Enter your last name");
// var fullName = firstName + lastName;

// alert(`Welcome ${fullName}`);


// Q7:

// var city = "Hyderabad";

// for ( var i = 0 ; i < city.length ; i++ ) {
//     if ( city.slice ( i , i + 5 ) === "Hyder" ) {
//         city = city.slice(0,i) + "Islam" + city.slice (i+5);
//     }
// }

// document.write(`City: Hyderabad <br>`);
// document.write(`After replacement: ${city}`);


// Q8:

// var message = "Ali and Sami are best friends. They play cricket and football together.";

// for ( var i = 0 ; i < message.length ; i++ ) {
//     if ( message.slice( i , i + 3 ) === "and" ) {
//         message = message.slice(0,i) + "&" + message.slice(i+3);
//     }
// }

// document.write(message);


// Q9:

// var valueInStr = "472";
// var valueInNum = Number(valueInStr);

// document.write(`Value: ${valueInStr} <br>`);
// document.write(`Type: string <br>`);
// document.write(`Value: ${valueInNum} <br>`);
// document.write(`Type: number <br>`);


// Q10:

// var userInput = prompt("Enter a word");
// var newInput = userInput.toUpperCase();

// console.log(newInput);


// Q11:


// Q12:

// var num = 35.36;
// var numString = num.toString();
// var result = numString.replace('.', '');

// document.getElementById("result").innerText = `Result: ${result}`;


// Q13:


// Q14:

// var arr = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Enter an item to search:");
// var found = arr.some(item => item.toLowerCase() === userInput.toLowerCase());

// if (found) {
//     alert(`${userInput} is available in the list.`);
// } else {
//     alert(`${userInput} is not available in the list.`);
// }


// Q15:


// Q16:

// var university = "University of Karachi";
// var universityArray = university.split();

// console.log(universityArray);

// Q17:


// Q18:






// MATH METHODS:



// Q1:

// var number = +prompt("Enter a positive integer");
// var round = Math.round(number);
// var floor = Math.floor(number);
// var ceil = Math.ceil(number);

// document.write(`number: ${number} <br>`);
// document.write(`round off value: ${round} <br>`);
// document.write(`floor value: ${floor} <br>`);
// document.write(`ceil value: ${ceil} <br>`);


// Q2:

// var number = +prompt("Enter a negative floating point");
// var round = Math.round(number);
// var floor = Math.floor(number);
// var ceil = Math.ceil(number);

// document.write(`number: ${number} <br>`);
// document.write(`round off value: ${round} <br>`);
// document.write(`floor value: ${floor} <br>`);
// document.write(`ceil value: ${ceil} <br>`);


// Q3:


// Q4:

// var dice = Math.ceil(Math.random() * 6);
// document.write(dice);


// Q5:

// var headUser = prompt("Enter head username:");
// var tailUser = prompt("Enter tail username:");
// var toss = Math.round(Math.random() * 1);

// if ( toss === 1 ) {
//     alert( headUser + " won " );
// }
// else {
//     alert( tailUser + " won " );
// }


// Q6:

// var randomNum = Math.random() * 100;
// document.write(randomNum.toFixed());


// Q7:


// Q8:

// var secretNum = Math.random() * 11;
// var userNum = +prompt("Enter a number between 1 to 10");

// if ( secretNum.toFixed() === userNum ) {
//     alert("Congratulations :)");
// }
// else {
//     alert("Try Again!");
// }