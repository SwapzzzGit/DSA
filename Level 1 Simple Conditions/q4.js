// Divisible by both 3 and 5

const userInput = 15

// if (userInput % 3 == 0 && userInput % 5 == 0) {
//     console.log("Number is divisible by 3 and 5");
// } else {
//     console.log("Number is not divisible by 3 and 5");
// }

if (userInput % 3 == 0) {
    console.log("Divisible by 3");
    if (userInput % 5 == 0) {
        console.log("Divisible by 5");
    } else {
        console.log("Not divisible by 5");
    }
} else {
    console.log("Not divisible by 3 and 5");
}