// Multiple relationship between numbers

let a = 6;
let b = 18;

if (a % b === 0) {
    console.log(`${a} is multiple of ${b}`);
} else if (b % a === 0) {
    console.log(`${b} is a Multiple of ${a}`);
} else {
    console.log("No multiple relationship numbers.")
}