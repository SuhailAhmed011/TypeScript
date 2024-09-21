// Primitive Types
let age: number= 22; // For all kinds of numbers (integers, floats)
let user: string = "suhail"; // For textual data
let isLogged: boolean = true; // For true/false values

// Arrays -> An array in TypeScript holds values of the same type
let nums: number[] = [1,2,3,4,5]
let names: string[] = ['suhail', 'ahmed', 'quazi']

// Tuples -> A tuple allows you to express an array with a fixed number of elements of different types.
let books: [string,number] = ['Atomic Habits', 350]

// Enums-> Enums allow you to define a set of named constants.
enum statusCodes{
    page_Not_FOUND = 'Error 404',
    user_Not_Found = 'error 500'
}
statusCodes.page_Not_FOUND

//Any-> Can hold any type. You lose type safety with any
let randomValue: any = 22;
randomValue = 'suhail'; // here its not giving type error


// Unknown-> Similar to any, but you can’t use it without type-checking
let value: unknown = 'suhail'
//console.log(value.toUpperCase()) // here it gives error
if(value === 'string'){
    console.log(value.toUpperCase()) //here its working and check type
}


// Void -> Represents the absence of a return value
function logMessage(message: string): void {
    console.log(message);
  }

// Null and Undefined -> null and undefined: Represents the absence of value
let u: undefined = undefined;
let n: null = null;


// Never-> Represents a function that never returns (e.g., throws an error)
function throwError(message: string): never {
    throw new Error(message);
  }

  
// Type Annotations -> 
let rupees: number = 30; // TypeScript will ensure that age is always a number


// Type Interfaces -> Interfaces is the face of object that defines howa oue object looks like
interface User {
    person: string;
    email: string;
    age: number;
    Gender?: string // ? means its optional gives or not
}

interface Admin extends User{  // Extend -> we create different interface and extend with first interface than the second one access the values of first interface

    isLogged: boolean
}

function personInfo(obj: Admin){
obj.isLogged
}
personInfo({person:'suhail', email: "suhail@gmail", age: 22, isLogged:true})


// Type aliases -> its loook like union type but we define it with type so in future our code looks good
type args = number | null | string;
let admin: args = 'suhail'




export{}
  
  
  