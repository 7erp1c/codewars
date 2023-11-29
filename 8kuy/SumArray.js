function sum (numbers) {
    let result = 0; //"use strict";
    for (let i = 0; i < numbers.length; i++){
       result += numbers[i];
    }

return result;
}
console.log(sum([8,5,6]));

-------------------------------------------------------
///Creating array
let arr = [4, 8, 7, 13, 12];

// Function to find the sum of the array using recursion
function sumArray(arr, index) {
    if (index === arr.length) {
        return 0;
    }
    return arr[index] + sumArray(arr, index + 1);
}

console.log("Sum is " + sumArray(arr, 0));

//___________________________________________
// Creating array
let arr = [4, 8, 7, 13, 12]

// Using reduce function to find the sum
let sum1 = arr.reduce(function (x, y) {
    return x + y;
}, 0);

// Prints: 44
console.log("Sum using Reduce method: " + sum1);
//____________________________________________________
// Creating array
let arr = [4, 8, 7, 13, 12]

// Creating variable to store the sum
let sum = 0;

// Calculation the sum using forEach
arr.forEach(x => {
    sum += x;
});

// Prints: 44
console.log("Sum is " + sum);