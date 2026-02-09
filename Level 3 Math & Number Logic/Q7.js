//Currency note distribution

// We need to find minimal notes reqired for currency distribution.

let amount = 1860;
console.log(amount);
if (amount >= 500) {
    let note500 = amount / 500;
    note500 = note500 - (note500 % 1);
    amount = amount % 500;
    console.log("500 notes:", note500);
}
console.log(amount);

if (amount >= 200) {
    let note200 = amount / 200;
    note200 = note200 - (note200 % 1);
    amount = amount % 200;
    console.log("200 notes:", note200);
}
console.log(amount);

if (amount >= 100) {
    let note100 = amount / 100;
    note100 = note100 - (note100 % 1);
    amount = amount % 100;
    console.log("100 notes:", note100);
}
console.log(amount);

if (amount >= 50) {
    let note50 = amount / 50;
    note50 = note50 - (note50 % 1);
    amount = amount % 50;
    console.log("50 notes:", note50);
}
console.log(amount);

if (amount >= 10) {
    let note10 = amount / 10;
    note10 = note10 - (note10 % 1);
    amount = amount % 10;
    console.log("10 notes:", note10);
}
console.log(amount);