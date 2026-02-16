// Convert this classic function to arrow function
// function double(x) {
//   return x * 2;
// }

// Solution

// const double = (x) => x * 2;

// 2. Write arrow function that checks if number is positive
// Use implicit return (no curly braces)
// Test: isPositive(5) → true
// Test: isPositive(-3) → false

// const isPositive = (x) => x > 0;

//3. // Write arrow function that finds max of two numbers
// Test: max(10, 5) → 10

// const max = (a, b) => (a > b ? a : b);

// console.log(max(10, 5));

//4.  Write arrow function that creates a user object
// Test: createUser("Swapnil", 25) → {name: "Swapnil", age: 25}
// TRICK: Wrap object in parentheses to avoid confusion with function body

// const createUser = (name, age) => ({ name, age });

// console.log(createUser("Swapnil", 25));

// 5. Use anonymous function with array methods
// const numbers = [1, 2, 3, 4, 5];

// // Filter even numbers using anonymous function
// const evens = numbers.filter((num) => num % 2 === 0);

// // Double all numbers using anonymous function
// const doubled = numbers.map((num) => num * 2);

// console.log(evens);
// console.log(doubled);

