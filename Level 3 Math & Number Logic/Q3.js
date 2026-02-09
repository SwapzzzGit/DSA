//3. First & last digit equality  

let num = 2231; // could be any digit
let temp = num;
let last = num % 10;

while (temp >= 10) {
    temp = temp / 10
}
temp = temp - (temp % 1);

if (temp === last) {
    console.log("First and last digit is same.");
} else {
    console.log("First and last digit is not same.");
}