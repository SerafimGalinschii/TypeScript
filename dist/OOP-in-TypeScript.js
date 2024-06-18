"use strict";
class Account {
    constructor(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error("Invalid amount");
        this.balance += amount;
    }
}
let account = new Account(1, "Serafim", 0);
account.deposit(200);
console.log(account.balance);
//# sourceMappingURL=OOP-in-TypeScript.js.map