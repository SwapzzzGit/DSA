//Uppercase, lowercase, digit, or special character

let letter = 'A';

if (letter >= 'A' && letter <= 'Z') {
    console.log("The letter is UPPERCASE");
} else if (letter >= 'a' && letter <= 'z') {
    console.log("The letter is Lowercase");
} else if (letter >= 0 && letter <= 9) {
    console.log("The Entered value is Digit")
} else {
    console.log("Enter value is special character")
}