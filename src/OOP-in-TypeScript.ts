class Account {
  //   readonly id: number;
  //   owner: string;
  //   private balance: number;
  nickname?: string;

  constructor(
    public readonly id: number, // Here e replace the initialization of pramaters and the declaration types fro lines 2-4 and 12-14
    public owner: string,
    private _balance: number
  ) {
    // this.id = id;
    // this.owner = owner;
    // this.balance = balance;
  }

  deposit(amount: number): void {
    if (amount <= 0) throw new Error("Invalid amount");
    this._balance += amount;
  }

  get balace() {
    return this._balance;
  }

  set balance(value: number) {
    if (value < 0) throw new Error("Invalid Value");
    this._balance = value;
  }
}

let account = new Account(1, "Serafim", 0);
account.deposit(200);
console.log(account.balace);
account.balance = 10;

class Seatassignment {
  //A1, A2. ...
  //Mosh, Serafim, ...
  //Index signature property
  [seatNumber: string]: string;
}

let seats = new Seatassignment();
seats.A1 = "Mosh";
seats.A2 = "Serafim";

class Ride {
  private static _activeRides: number = 0; //because of 'static' the property belongs to the class not to the object

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

let ride1 = new Ride();
ride1.start();

let ride2 = new Ride();
ride2.start();

console.log(Ride.activeRides);

class Person {
  constructor(public firstName: string, public lastName: string) {}

  walk() {
    console.log("Walking");
  }
  get fullName() {
    return this.firstName + " " + this.lastName;
  }
}

class Student extends Person {
  constructor(public id: number, firstName: string, lastName: string) {
    super(firstName, lastName);
  }

  takeTest() {
    console.log("Takin a test");
  }
}

let student1 = new Student(1, "Serafim", "Galinschii");
console.log(student1.fullName, student1.id);

class Teacher extends Person {
  override get fullName() {
    return "Professor " + super.fullName; //super.fullName = this.firstName + " " + this.lastName;
  }
}

let teacher1 = new Teacher("Serafim", "Galinschii");
console.log(teacher1.fullName);

class Principal extends Person {
  override get fullName() {
    return "Principal " + super.fullName;
  }
}
getNames([
  new Student(1, "Serafim", "Galinschii"),
  new Teacher("Alexa", "Smith"),
  new Principal("Anelise", "Keating"),
]);

function getNames(people: Person[]) {
  for (let person of people) console.log(person.fullName);
}

abstract class Shape {
  constructor(public color: string) {}

  abstract render(): void;
}

class Circle extends Shape {
  constructor(public radius: number, color: string) {
    super(color);
  }
  override render(): void {}
}

class Persons {
  constructor(public firstName: string, public lastName: string) {}

  get fullName() {
    return this.firstName + this.lastName;
  }
}

class Employees extends Persons {
  constructor(public salary: number, firstName: string, lastName: string) {
    super(firstName, lastName);
  }
}

let people = {
  name: "Serafim",
  salary: 50_000,
  addres: {
    stree: "Rose",
    city: "Chsisnau",
    zipCode: 2020,
  },
};

interface Address {
  stree: string;
  city: string;
  zipCode: number;
}
interface Person {
  name: string;
  salary: number;
  address: Address;
}
