//Coordinate quadrant

// What is quandrant ?
// In school time we use to plot a graph on a paper and we use to divide the graph into 4 parts and each part is called quadrant.

// The first quadrant is the upper right part of the graph, where both x and y coordinates are positive.
// The second quadrant is the upper left part of the graph, where x is negative and y is positive.
// The third quadrant is the lower left part of the graph, where both x and y coordinates are negative.
// The fourth quadrant is the lower right part of the graph, where x is positive and y is negative.

// So if we have a point (x,y) then we can determine which quadrant it belongs to by looking at the signs of x and y.

let x = 3;
let y = -4;

if (x > 0 && y > 0) {
    console.log("Given value lies in I Quadrant.");
} else if (x < 0 && y > 0) {
    console.log("Given value lies in II Quadrant.");
} else if (x < 0 && y < 0) {
    console.log("Given value lies in III Quadrant.");
} else if (x > 0 && y < 0) {
    console.log("Given value lies in IV Quadrant.");
}