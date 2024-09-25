// Generics Functions ->
// Generics in TypeScript allow you to create reusable, flexible components, functions, or classes that can work with different types. Instead of specifying a fixed data type, you use a placeholder, which is replaced with a specific type when the code is executed or invoked

function arrayItem<T>(items:T[]): T[]{
    return items
}
let numbers = arrayItem<number>([1,2,3,4,5])
let string = arrayItem<string>(['cars', 'pens', 'money'])


// Generic Classes

class development <T>{
constructor(public lang:T){

}
}
let D1 = new development("TypeScript")
let D2 = new development("JavaScript ")
console.log(D1)

// Type Assertion

let a : any = 12;
(a as string)