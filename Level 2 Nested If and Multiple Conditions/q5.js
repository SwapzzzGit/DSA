//Greeting based on hour (0–23)

let hour = 14;

if (hour >= 0 && hour <= 11) {
    console.log("Good Morning");
}
else if (hour >= 12 && hour <= 16) {
    console.log("Good Afternoon");
}
else if (hour >= 17 && hour <= 20) {
    console.log("Good Evening");
}
else if (hour >= 21 && hour <= 23) {
    console.log("Good Night");
}
else {
    console.log("Invalid hour");
}
