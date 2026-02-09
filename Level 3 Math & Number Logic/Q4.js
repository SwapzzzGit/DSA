//4. Single/double/multi-digit check

let num = -1234;
if (num < 0) {
    num = -num;
}

if (num >= 0 && num <= 9) {
    console.log("It's a single digit number");
} else if (num >= 10 && num <= 99) {
    console.log("It's a double digit number.")
} else if (num >= 100) {
    console.log("Its a Multi-digit number");
}