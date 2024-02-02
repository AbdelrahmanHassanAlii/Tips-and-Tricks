//1 - console.error example
// let a = 1;
// b = 3;
// sum = 5;
// sum !== 4 ? console.error(`sum should be 4`) : console.log(sum);

//2 - console.assert example
// let x = 10;
// let y = 5;
// console.assert(x < y, "x should be greater than y");

//3 - console.group example
// console.group("Group 1");
// console.log("Message 1");
// console.log("Message 2");
// console.groupEnd();

// console.group("Group 2");
// console.log("Message 3");
// console.log("Message 4");
// console.groupEnd();

//4 - console.table example
const data = [
  { name: "John", age: 30, city: "New York" },
  { name: "Alice", age: 25, city: "San Francisco" },
  { name: "Bob", age: 35, city: "Los Angeles" },
];

console.table(data);
