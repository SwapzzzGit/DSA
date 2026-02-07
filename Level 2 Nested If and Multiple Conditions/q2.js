//Triangle type (equilateral, isosceles, scalene)

let a = 4;
let b = 4;
let c = 4;

if (a == b && b == c && c == a) {
    console.log("Its a equilateral Traiangle")
} else if (a == b || b == c || c == a) {
    console.log("Its a Isoscales Triangle");
} else if (a != b && a != c && b != c) {
    console.log("Its a Scalene Triangle");
}