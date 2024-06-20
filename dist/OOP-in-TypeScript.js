"use strict";
class Account {
    constructor(id, // Here e replace the initialization of pramaters and the declaration types fro lines 2-4 and 12-14
    owner, _balance) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
        // this.id = id;
        // this.owner = owner;
        // this.balance = balance;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error("Invalid amount");
        this._balance += amount;
    }
    get balace() {
        return this._balance;
    }
    set balance(value) {
        if (value < 0)
            throw new Error("Invalid Value");
        this._balance = value;
    }
}
let account = new Account(1, "Serafim", 0);
account.deposit(200);
console.log(account.balace);
account.balance = 10;
class Seatassignment {
}
let seats = new Seatassignment();
seats.A1 = "Mosh";
seats.A2 = "Serafim";
class Ride {
    start() {
        Ride._activeRides++;
    }
    stop() {
        Ride._activeRides--;
    }
    static get activeRides() {
        return Ride._activeRides;
    }
}
Ride._activeRides = 0; //because of 'static' the property belongs to the class not to the object
let ride1 = new Ride();
ride1.start();
let ride2 = new Ride();
ride2.start();
console.log(Ride.activeRides);
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    walk() {
        console.log("Walking");
    }
    get fullName() {
        return this.firstName + " " + this.lastName;
    }
}
class Student extends Person {
    constructor(id, firstName, lastName) {
        super(firstName, lastName);
        this.id = id;
    }
    takeTest() {
        console.log("Takin a test");
    }
}
let student1 = new Student(1, "Serafim", "Galinschii");
console.log(student1.fullName, student1.id);
class Teacher extends Person {
    get fullName() {
        return "Professor " + super.fullName; //super.fullName = this.firstName + " " + this.lastName;
    }
}
let teacher1 = new Teacher("Serafim", "Galinschii");
console.log(teacher1.fullName);
class Principal extends Person {
    get fullName() {
        return "Principal " + super.fullName;
    }
}
getNames([
    new Student(1, "Serafim", "Galinschii"),
    new Teacher("Alexa", "Smith"),
    new Principal("Anelise", "Keating"),
]);
function getNames(people) {
    for (let person of people)
        console.log(person.fullName);
}
class Shape {
    constructor(color) {
        this.color = color;
    }
}
class Circle extends Shape {
    constructor(radius, color) {
        super(color);
        this.radius = radius;
    }
    render() { }
}
class Persons {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + this.lastName;
    }
}
class Employees extends Persons {
    constructor(salary, firstName, lastName) {
        super(firstName, lastName);
        this.salary = salary;
    }
}
let people = {
    name: "Serafim",
    salary: 50000,
    addres: {
        stree: "Rose",
        city: "Chsisnau",
        zipCode: 2020,
    },
};
//# sourceMappingURL=OOP-in-TypeScript.js.map