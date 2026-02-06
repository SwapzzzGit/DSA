// Leap year

const userInput = 2028;

if (userInput % 4 == 0) {
    if (userInput % 100 != 0) {
        console.log("Its a leap year");
    } else if (userInput % 400 == 0) {
        console.log("Its a Leap year");
    } else {
        console.log("It's not a Leap Year");
    }
} else {
    console.log("It's not a Leap Year");
}