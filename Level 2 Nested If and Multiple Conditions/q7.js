//Even/odd comparison of two numbers

let a = 2;
let b = 4;

if (a % 2 == 0 && b % 2 == 0) {
    console.log(`${a} and ${b} both are Even.`);
} else if (a % 2 != 0 && b % 2 != 0) {
    console.log(`${a} and ${b} are odd.`);
} else if (a % 2 != 0 && b % 2 == 0) {
    console.log(`${a} is odd and ${b} is even.`);
} else if (a % 2 == 0 && b % 2 != 0) {
    console.log(`${a} is even and ${b} is odd.`);
}