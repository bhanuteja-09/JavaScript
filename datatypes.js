//Primitive Data Types

//string data types
var a = "this is text message"
console.log(a);

//number data types
console.log(10,20,30);

//boolean data types 
test = 10 > 20;
console.log(test);

document.write("this is test meassage <br>");
document.write("12337576");

document.write("<h1>This is heading text <br>");

//null data types

let sampleView = null;

console.log(sampleView);

//Undefined Data Types
let apple;

console.log(apple);

//Complex Data Types

//Array
//use [] for write the array
//array should be different types data types
let fruits = ["apple", "mango", 55 , {name: "bhanu"} ]

console.log(fruits); 

//Object
//Use {} for write the object
const games = {
    cricket: "dhoni",
    football:"racer"
}

console.log(games);

//to knowing the data type

console.log(typeof games); //result object
console.log(typeof fruits); //result object

// In JavaScript everything is object

//To know whether it is array or not

console.log(Array.isArray(fruits)); // It result true, it is array