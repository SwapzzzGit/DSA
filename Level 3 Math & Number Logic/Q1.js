//1. Distinct digits in a 3-digit number 

let num = 122;

let a = num % 10
let b = (num % 100 - a) / 10
let c = (num - (num % 100)) / 100

if (a != b && a != c && b != c) {
    console.log("All are Distinct Numbers");
} else {
    console.log("Two or more are not Distinct Numbers");
}