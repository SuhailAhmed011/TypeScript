//Classes -> A class in TypeScript can have properties (variables) and methods (functions) that define the behavior of the objects created from the class. 
//TypeScript extends JavaScript classes by adding features
//like type annotations and access modifiers (public, private, protected).
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var device = /** @class */ (function () {
    function device() {
        this.name = 'iphone';
        this.price = 120000;
        this.available = true;
    }
    return device;
}());
var d1 = new device();
var d2 = new device();
// Constructor -> The constructor method is used to create and initialize
// an object when the class is instantiated using the new keyword.
var Food = /** @class */ (function () {
    function Food(name, price, taste, isWorth) {
        this.name = name;
        this.price = price;
        this.taste = taste;
        this.isWorth = isWorth;
    }
    return Food;
}());
var firstFood = new Food('momos', 30, 'spicy', true);
var secondFood = new Food('pizza', 100, 'mixed', true);
// This keyword -> This keyword refers to the current object where the function is called
// when we use this, it refers to that object which owns that method and it is used
// to access the properties of that current object.
var user = /** @class */ (function () {
    function user() {
        this.name = 'suhail';
        this.age = 22;
    }
    user.prototype.showdetails = function () {
        this.name = 'ahmed';
    };
    return user;
}());
var firstUser = new user();
firstUser.showdetails();
// Access modifiers(public, private, protected)
// public -> When a property or method is marked as public, it can be accessed from anywhere — inside the class, outside the class, or even in instances of the class.
// By default, all properties and methods are public if no modifier is specified
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.speak = function () {
        console.log("".concat(this.name, " is making a sound."));
    };
    return Animal;
}());
var dog = new Animal("Dog");
console.log(dog.name); // Output: Dog
dog.speak(); // Output: Dog is making a sound.
// private -> When a property or method is marked as private, it can only be accessed within the class where it is defined.
// You cannot access a private property or method outside the class
var Employee = /** @class */ (function () {
    function Employee(salary) {
        this.salary = salary;
    }
    // Public method to get salary (indirect access)
    Employee.prototype.getSalary = function () {
        return this.salary;
    };
    return Employee;
}());
var emp = new Employee(50000);
// console.log(emp.salary);  // Error: Property 'salary' is private
console.log(emp.getSalary()); // Output: 50000
// protected -> When a property or method is marked as protected, it can only be accessed within the class and its subclasses (child classes).
//  It cannot be accessed outside the class or in objects of the class.
var Person = /** @class */ (function () {
    function Person(age) {
        this.age = age;
    }
    Person.prototype.getAge = function () {
        return this.age;
    };
    return Person;
}());
// Child class inheriting from Person
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Student.prototype.displayAge = function () {
        console.log("Age: ".concat(this.age)); // Accessing protected property in child class
    };
    return Student;
}(Person));
var student = new Student(20);
student.displayAge(); // Output: Age: 20
// console.log(student.age);  // Error: Property 'age' is protected 
// Readonly -> if we use readonly before the variable initilization it doesn't allow you to change that variable value
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    User.prototype.changeName = function () {
        // this.name = 'Sameer' -> here we don't change the value of name
    };
    return User;
}());
var u1 = new User("suhail");
u1.changeName();
