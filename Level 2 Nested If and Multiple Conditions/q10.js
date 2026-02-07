//10. Days in a month  
let month = 4;

if (month === 1 || month === 3 || month === 5 || month === 7 ||
    month === 8 || month === 10 || month === 12) {
    console.log("31 days");
}
else if (month === 4 || month === 6 || month === 9 || month === 11) {
    console.log("30 days");
}
else if (month === 2) {
    console.log("28 days");
}
else {
    console.log("Invalid month");
}
