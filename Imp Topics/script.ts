// Important Topics

                       // Modules 
// --> Import and Export

// Exporting
export const myVar = 42;
export function myFunction() {
  console.log("Hello!");
}

// Importing
// import { myVar, myFunction } from './myModule';

// Default and Named Export
// Named export
export const myVar1 = 42;
export const myFunction1 = () => {};

// Default export
export default function defaultFunction() {
  console.log("This is a default export");
}

// Importing
// import defaultFunc from './myModule';  // Default import
// import { myVar1, myFunction1 } from './myModule';  // Named import


                                    // Type Narrowing
// --> Type Guards (typeof, instanceof)
function example(x: string | number) {
    if (typeof x === 'string') {
      console.log(x.toUpperCase()); // `x` is narrowed to string
    } else {
      console.log(x.toFixed(2));    // `x` is narrowed to number
    }
  }
  
  class Animal {}
  class Dog extends Animal {}
  
  function isDog(animal: Animal): animal is Dog {
    return animal instanceof Dog;
  }

                                          // Adavnce Types
// Insertion types
type Person = { name: string };
type Employee = { employeeId: number };

type EmployeePerson = Person & Employee;

const emp: EmployeePerson = { name: "Alice", employeeId: 123 };

// Mapped Types
type OptionsFlags<T> = {
    [Property in keyof T]: boolean;
  };
  
  type FeatureFlags = {
    darkMode: boolean;
    newUser: boolean;
  };
  
  const flags: OptionsFlags<FeatureFlags> = {
    darkMode: true,
    newUser: false
  };
  

