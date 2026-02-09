//2. Middle digit comparison  

let num = 123;

let a = (num - (num % 100)) / 100;
let b = (num % 100 - num % 10) / 10;
let c = num % 10;


if (b != a && b != c) {
    console.log("Middle digits are different.");
} else {
    console.log("One or many digits are same");
}