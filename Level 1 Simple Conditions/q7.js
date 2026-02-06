// Larger of 3 Numbers

let a = 3;
let b = 5;
let c = 5;

if (a > b && a > c) {
    console.log(`${a} is Largest of among ${b} and ${c}.`);
} else if (b > c && b > a) {
    console.log(`${b} is Largest among ${a} and ${c}.`);
} else if (c > a && c > b) {
    console.log(`${c} is Largest among ${a} and ${b}.`);
} else {
    console.log(`Two or more Numbers are equal.`);
}