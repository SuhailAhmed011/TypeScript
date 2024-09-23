//Classes -> A class in TypeScript can have properties (variables) and methods (functions) that define the behavior of the objects created from the class. 
//TypeScript extends JavaScript classes by adding features
//like type annotations and access modifiers (public, private, protected).

class device {
    name = 'iphone';
    price = 120000
    available = true
}

let d1 = new device()
let d2 = new device()


// Constructor -> The constructor method is used to create and initialize
// an object when the class is instantiated using the new keyword.

class Food {
    constructor(public name:string, public price:number, public taste:string, public isWorth:boolean){

    }
}

let firstFood = new Food('momos', 30, 'spicy', true)
let secondFood = new Food('pizza', 100, 'mixed', true)


// This keyword -> This keyword refers to the current object where the function is called
// when we use this, it refers to that object which owns that method and it is used
// to access the properties of that current object.

class user {
    name:string =  'suhail'
    age:number = 22

    showdetails(){
        this.name = 'ahmed'
    }
}

let firstUser = new user()
firstUser.showdetails()


// Access modifiers(public, private, protected)
// public -> When a property or method is marked as public, it can be accessed from anywhere — inside the class, outside the class, or even in instances of the class.
// By default, all properties and methods are public if no modifier is specified

class Animal {
    public name: string;
  
    constructor(name: string) {
      this.name = name;
    }
  
    public speak(): void {
      console.log(`${this.name} is making a sound.`);
    }
  }
  
  const dog = new Animal("Dog");
  console.log(dog.name);  // Output: Dog
  dog.speak();            // Output: Dog is making a sound.

  // private -> When a property or method is marked as private, it can only be accessed within the class where it is defined.
 // You cannot access a private property or method outside the class
 class Employee {
    private salary: number;  // This is a private property
  
    constructor(salary: number) {
      this.salary = salary;
    }
  
    // Public method to get salary (indirect access)
    public getSalary(): number {
      return this.salary;
    }
  }
  
  const emp = new Employee(50000);
  // console.log(emp.salary);  // Error: Property 'salary' is private
  console.log(emp.getSalary());  // Output: 50000


  // protected -> When a property or method is marked as protected, it can only be accessed within the class and its subclasses (child classes).
//  It cannot be accessed outside the class or in objects of the class.
class Person {
    protected age: number;  // Protected property
  
    constructor(age: number) {
      this.age = age;
    }
  
    protected getAge(): number {
      return this.age;
    }
  }
  
  // Child class inheriting from Person
  class Student extends Person {
    public displayAge(): void {
      console.log(`Age: ${this.age}`);  // Accessing protected property in child class
    }
  }
  
  const student = new Student(20);
  student.displayAge();  // Output: Age: 20
  // console.log(student.age);  // Error: Property 'age' is protected 

  
  // Readonly -> if we use readonly before the variable initilization it doesn't allow you to change that variable value

  class User {
    constructor(public readonly name: string){

        
    }
    changeName(){ 
       // this.name = 'Sameer' -> here we don't change the value of name
    }
   
  }

  let u1 = new User("suhail")
  u1.changeName()


