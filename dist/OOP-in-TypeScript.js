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
//# sourceMappingURL=OOP-in-TypeScript.js.map