//1. Return the Sum of Two Numbers
// Create a function that takes two numbers as arguments and return their sum.
function addition(a, b) {
    return a + b;
}

//addition(2, 3);

//2. Write a function that takes an integer minutes and converts it to seconds.
function convert(minutes) {
    return minutes * 60;
}
//convert(5);

//3. Write a function that takes the base and height of a triangle and return its area.
//The are of a triangle is: (base * height) / 2;
function triArea(base, height) {
    return (base * height) / 2;
}
//triArea(4, 5);

//4.Create a function that takes a number as an argument, increments the number by +1 and returns the result.
function addition(num) {
    let z = 1;
    return (num = num + z);
}
// addition(2);

//5. Create a function that takes an array and returns the first element.
function getFirstValue(arr) {
    return arr[0];
}
//getFirstValue([1,2,3]);

//6. Create a function that finds the maximum range of a triangle's third edge.
function nextEdge(side1, side2) {
    return side1 + side2 - 1;
}
//nextEdge(3,6);

//7. Write a function that converts hours into seconds.
function howManySeconds(hours) {
    let min = 60;
    let sec = 60;
    return hours * min * sec;
}
//howManySeconds(2);

//8.There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.
function remainder(x, y) {
    return x % y;
}
//remainder(8, 3);

//9. Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.
function lessThanOrEqualToZero(num) {
    if (num <= 0) {
        return true;
    }
    return false;
}

//10.In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:
// chickens = 2 legs
// cows = 4 legs
// pigs = 4 legs
// The farmer has counted his animals and he gives you a subtotal for each species.You have to implement a function that returns the total number of legs of all the animals.

function animals(chickens, cows, pigs) {
    return chickens * 2 + cows * 4 + pigs * 4;
}

//11. Write a function that takes two integers (hours, minutes) and converts them into seconds.
function convert(hours, minutes) {
    let h = hours * 60 * 60;
    let m = minutes * 60;
    return h + m;
}

//12.Given two integers, a and b, return true if a can be divided evenly by b. Return false otherwise.
function dividesEvenly(a, b) {
    if (a % b == 0) {
        return true;
    }
    return false;
}

//13. In this challenge, you must verify the equality of two different given parameters: a and b.

// Both the value and the type of parameters need to be tested in order to have an matching equality.The possible types of the given parameters are:

// Numbers
// Strings
// Booleans(false or true)
// Special values: undefined, null and NaN
// What have you learnt so far that will permit you to do two different checks(value and type) with a single statement ?

//     Implement a function that returns true if the parameters are equal, and false if they are different.

function checkEquality(a, b) {
    if (a === b) {
        return true;
    }
    return false;
}

// 14. Your job is to find out whether the lamp is on or off.
function lampStatus() {
    return lamp === "on";
}

//15.Create a function that takes in three arguments (prob, prize, pay) and returns true if prob * prize > pay; otherwise return false.
function profitableGamble(prob, prize, pay) {
    if (prob * prize > pay) {
        return true;
    }
    return false;
}

//16. Create a function that returns true if an integer is divisible by 5, and false otherwise.
function divisibleByFive(n) {
    if (n % 5 === 0) {
        return true;
    }
    return false;
}

//17. Create a function that takes an integer and returns true if it's divisible by 100, otherwise return false.
function divisible(num) {
    if (num % 100 === 0) {
        return true;
    }
    return false;
}

//18.depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.
function comp(str1, str2) {
    if (str1.length === str2.length) {
        return true;
    }
    return false;
}

//19. Write a function that returns the length of a string. Make your function recursive.
function length(str) {
    return str.length;
}

//20. Create a function that returns true if a string is empty and false otherwise.
function isEmpty(s) {
    if (s === "") {
        return true;
    }
    return false;
}

//21. Given two strings, firstName and lastName, return a single string in the format "last, first".
function concatName(firstName, lastName) {
    return lastName + ", " + firstName;
}

//22. Write a function to reverse an array.
function reverse(arr) {
    return arr.reverse();
}

//23. Create a function that accepts an array and returns the last item in the array.
function getLastItem(arr) {
    return arr[arr.length - 1];
}

//24. Create a function that takes a name and returns a greeting. Don't use a normal function but use an "arrow function".
const helloName = name => `Hello ${name}!`;

//25. Create a function that takes an object argument sizes (contains width, length, height keys) and returns the volume of the box.
function volumeOfBox(sizes) {
    let x = sizes.width * sizes.length * sizes.height;
    return x;
}

//26. Create a function that takes a number as an argument and returns "even" for even numbers and "odd" for odd numbers.
function isEvenOrOdd(num) {
    if (num % 2 === 0) {
        return "even";
    }
    return "odd";
}

//27. Create a function that finds the index of a given item.
function search(arr, item) {
    return arr.indexOf(item);
}

//28. Given two numbers, return true if the sum of both numbers is less than 100. Return false otherwise.
function lessThan100(a, b) {
    if (a + b < 100) {
        return true;
    }
    return false;
}

//29. Create a function that returns true if a string contains any spaces.
function hasSpaces(str) {
    if (str.includes(" ")) {
        return true;
    }
    return false;
}

//30. Create a function that returns the number of argument it was called with.
function numArgs() {
    return arguments.length;
}
//31.  Create a function that takes a base number and an exponent number and returns the calculation.
function calculateExponent(num, exp) {
    return Math.pow(num, exp);
}

//32.Per 6 coffee cups I buy, I get a 7th cup free. In total, I get 7 cups. Create a function that takes n cups bought and return as an integer the total number of cups I would get.

// Examples

// totalCups(6) ➞ 7

// totalCups(12) ➞ 14

//totalCups(213) ➞ 248
function totalCups(n) {
    return n + Math.floor(n / 6);
}

//33. Create a function that takes a string as an argument. The string is a random name.

// If the last character of the name is an "n", return true.
// If the last character of the name is not an "n", return false.
function isLastCharacterN(word) {
    for (i = 0; i < word.length; i++) {
        if (word[word.length - 1] === "n") {
            return true;
        }
        return false;
    }
}

//34.  ES6: Destructuring Arrays I
//const arr = [1, 2, 3, 4, 5, 6]
//let a = arr[0]
//let b = arr[1]

//console.log(a) // outputs 1
//console.log(b) // outputs 2

const arr = [1, 2, 3, 4, 5, 6];
const [a, b, c, d, e, f] = arr;

//35.There is something you have to do with the variable name rest in order to assign it an object containing the rest of the object properties. You can find out how in the MDN docs in the Resources tab.

//Use the rest syntax to change the code so that rest = {city: "Phoenix", state: "AZ", address: "USA"}. Only edit the left side of the assignmet { name, email, rest }. Ignore the .toString() function (used for validation).
const user = {
    name: "John",
    email: "john@example.com",
    city: "Phoenix",
    state: "AZ",
    country: "USA",
};
const str = `({ name, email, ...rest} = user ).toString()`;

//36.
// Create a function that takes an object as an argument and returns a string with facts about the city. The city facts will need to be extracted from the object's three properties:

// name
// population
// continent
// The string should have the following format: X has a population of Y and is situated in Z (where X is the city name, Y is the population and Z is the continent the city is situated in).
// cityFacts({
//   name: "Paris",
//   population: "2,140,526",
//   continent: "Europe"
// }) ➞ "Paris has a population of 2,140,526 and is situated in Europe"

// cityFacts({
//   name: "Tokyo",
//   population: "13,929,286",
//   continent: "Asia"
// }) ➞ "Tokyo has a population of 13,929,286 and is situated in Asia"

function cityFacts(city) {
    this.name = city.name;
    this.population = city.population;
    this.continent = city.continent;

    return `${this.name} has a population of ${this.population} and is situated in ${this.continent}`;
}
cityFacts(cityFacts);