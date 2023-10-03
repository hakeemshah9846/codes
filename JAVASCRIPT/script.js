// // document.write("Hello world");
// // let a = document.getElementById("content");
// // a.innerHTML = "Hello world"



// let x = 10;
// const y = 20;
// x = y + z;

// let greeting = "Hello";
// if (greeting === "Hello") {
//   console.log("Hi!");
// } else {
//   console.log("Goodbye!");
// }

// let num = "10";
// let doubled = num * 2;
// console.log(doubled);

// let colors = ["red", "green", "blue"];
// let favoriteColor = colors[3];
// console.log(favoriteColor);

// function add(x, y) {
//   return x + y;
// }

// let result = add(5);
// console.log(result);


// let person = {
//   firstName: "John",
//   lastName: "Doe",
// };

// console.log(person.age);

// let numbers = [1, 2, 3, 4, 5];
// for (let i = 0; i <= numbers.length; i++) {
//   console.log(numbers[i]);
// }

// function multiply(x, y) {
//   return x * y;
// }

// let product = multiply(3, "2");
// console.log("Product:", product);

// function greet(name) {
//   return "Hello, " + name;
// }

// let username = "Alice";
// console.log(greet(username));

// let age = "30";
// console.log("Age in 5 years:", age + 5);

// let students = [
//   { name: "Alice", grade: 85 },
//   { name: "Bob", grade: "A" },
//   { name: "Charlie", grade: 92 },
// ];

// for (let student of students) {
//   if (student.grade >= 90) {
//     console.log(student.name + " has an A grade.");
//   }
// }

// console.log("End of the code");

console.log("Hello javascript");

let obj = {
    name : "rahul",
    age : 27,

}


let printNameAge = function (district, place) {
    console.log(this.name, this.age, district, place);
}

// printNameAge.call(obj, "ernakulam", "south");


// printNameAge.apply(obj,["ernakulam","south"]);

let bindResult = printNameAge.bind(obj,"ernakulam","south");
console.log(bindResult);
bindResult();


// Define the number of rows and columns for the pattern
const numRows = 5;
const numCols = 5;

// Outer loop for rows
for (let i = 0; i < numRows; i++) {
  // Initialize an empty string to store the current row
  let row = '';
  
  // Inner loop for columns
  for (let j = 0; j < numCols; j++) {
    // Add a star to the current row string
    row += '* ';
  }
  
  // Print the current row
  console.log(row);
}
