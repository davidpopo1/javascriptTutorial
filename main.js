// var, let, const
// var is rarely used anymore, only use let and const
// let allows the variable to change in value
// const is a static variable that can not change

// String, Numbers, Boolean, null, undefined

//const name = "John"; String
//const age = 30; Number
//const rating = 4.5; Number
//const isCool = true; Boolean
//const x = null; Outputs on console as object but is actually null
//const y = undefined; Undefined
//let z; Also undefined if there is no value assigned

//Concatenation
//console.log("My name is " + name +" and I am " + age);
// Template String
//const hello = `My name is ${name} and I am ${age}`;

/*********************************************************************************/

//String

//const s = "Hello World!";
//console.log(s.length); Gives the length of a string

//console.log(s.toUpperCase()); Capitalizes everything in String

//console.log(s.toLowerCase()); Makes everything in String Lowercase

//console.log(s.substring(0, 5)); Pulls out only certain portion of the String

//console.log(s.substring(0, 5).toUpperCase()); Able to Chain together 

//const s = "technology, computers, it, code";
//console.log(s.split(", ")); Useful for tag system to split words in 1 variable

/*********************************************************************************/

//Arrays: variables that hold multiple values

//Arrays are 0 based which means it always starts with 0,1,2, and so on

//const fruits = ["apples", "oranges", "pears",];

//fruits[3] = "grapes"; adds a value to a specified location in the array

//fruits.push('mangos'); adds a value to end of array

//fruits.unshift('banana');  adds a value to beginning of array

//fruits.pop();  removes last value in array

//console.log(Array.isArray(fruits)); checks if a variable is an array

//console.log(fruits.indexOf("oranges")); shows precise location of data in an array

/**********************************************************************************/

/*Object Literals

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    hobbies: ["music", "movies", "sports"],

    address: {
        street: "50 Main St",
        city: "Boston",
        state: "MA"
    }

}

console.log(person.hobbies[1]); how to find movie in hobbies array in object literal

const {firstName, lastName, address: {city} } = person;
Above is how you separate variables from Object Literal to use them
console.log(city);

person.email = "john@gmail.com"; This is how you add a property to an object literal
*/

/*Array of Objects
const toDo = [
{
    id:1,
    text:"Take out Trash",
    isCompleted: true,
},
{
    id:2,
    text:"Meeting with Boss",
    isCompleted: true,
},
{
    id:3,
    text:"Dentist appt",
    isCompleted: false,
},
];

This array is similar to JSON syntax

Below is how you convert the array "toDo" to JSON
const todoJSON = JSON.stringify(toDo);
console.log(todoJSON);

----------
For Loop
for(let i = 0; i < toDo.length; i++) {
    console.log(toDo[i].text);
}

----------
While Loop
let i = 0;
while(i<10){
    console.log("While Loop Number: " + i);
    i++;
}

----------
forEach
toDo.forEach(function(toDo) {
    console.log(toDo.text);
});

----------
Map
const toDoText = toDo.map(function(toDo){
    return toDo.text;
});

----------
Filter
const toDoCompleted = toDo.filter(function(toDo){
    return toDo.isCompleted == true; //filters so only completed tasks are filtered
}).map(function(toDo){
    return toDo.text // this makes it so the array has only the completed tasks text
})
console.log(toDoCompleted);
*/

/**********************************************************************************/

/*Conditionals
const a = 4;
const b = 10;

=== matches the data type 
|| or
&& and

If Statement
if(a > 5 && b > 10){    
    console.log("a is more than 5 or b is more than 10");
} 

Ternary Operator

A ternary operator is a shorter if statement
const x = 9;

const color = x > 10 ? "red" : "blue";

Switch Statement
switch(color){
    case "red":
        console.log("color is red");
        break;
    case "blue":
        console.log("color is blue");
        break;
}*/



