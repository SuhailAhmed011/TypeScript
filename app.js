"use strict";
// Primitive Types
let age = 22; // For all kinds of numbers (integers, floats)
let user = "suhail"; // For textual data
let isLogged = true; // For true/false values
// Arrays -> An array in TypeScript holds values of the same type
let nums = [1, 2, 3, 4, 5];
let names = ['suhail', 'ahmed', 'quazi'];
// Tuples -> A tuple allows you to express an array with a fixed number of elements of different types.
let books = ['Atomic Habits', 350];
// Enums-> Enums allow you to define a set of named constants.
var statusCodes;
(function (statusCodes) {
    statusCodes["page_Not_FOUND"] = "Error 404";
    statusCodes["user_Not_Found"] = "error 500";
})(statusCodes || (statusCodes = {}));
statusCodes.page_Not_FOUND;
//Any-> Can hold any type. You lose type safety with any
let randomValue = 22;
randomValue = 'suhail'; // here its not giving type error
// Unknown-> Similar to any, but you can’t use it without type-checking
let value = 'suhail';
//console.log(value.toUpperCase()) // here it gives error
if (value === 'string') {
    console.log(value.toUpperCase()); //here its working and check type
}
// Void -> Represents the absence of a return value
function logMessage(message) {
    console.log(message);
}
// Null and Undefined -> null and undefined: Represents the absence of value
let u = undefined;
let n = null;
// Never-> Represents a function that never returns (e.g., throws an error)
function throwError(message) {
    throw new Error(message);
}
// Type Annotations -> 
let rupees = 30; // TypeScript will ensure that age is always a number
function personInfo(obj) {
}
personInfo({ person: 'suhail', email: "suhail@gmail", age: 22 });
