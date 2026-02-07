//Check if three sides form a valid triangle

let a = 3;
let b = 4;
let c = 1;

if (a + b > c && a + c > b && b + c > a) {
    console.log("These sides forms a triangle")
} else {
    console.log("These sides do not form a Triangle");
}