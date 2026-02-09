//Perfect square check (no sqrt)

let num = 25;
let isPerfectSquare = false;

if (num >= 0) {
    for (let i = 0; i * i <= num; i++) {
        if (i * i === num) {
            isPerfectSquare = true;
            break;
        }
    }
}

if (isPerfectSquare) {
    console.log("Perfect square");
} else {
    console.log("Not a perfect square");
}
