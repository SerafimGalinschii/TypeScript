"use strict";
// Type Aliase
let employee = {
    id: 1,
    name: "Mosh",
    retire: (date) => {
        console.log(date);
    },
};
function kgToLbs(weight) {
    if (typeof weight === "number")
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
kgToLbs(10);
kgToLbs("10");
let textBox = {
    drag: () => { },
    resize: () => { },
};
let qunatity = 100;
let metric = "cm";
// Nullable Types
function greet(name) {
    if (name) {
        console.log(name.toUpperCase());
    }
    else {
        console.log("Hola!");
    }
}
greet(undefined);
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(1);
console.log(customer === null || customer === void 0 ? void 0 : customer.birthday.getFullYear());
// Nullish coslescing operator
let speed = null;
let irde = {
    speed: speed !== null && speed !== void 0 ? speed : 30,
};
// Type Assertions
let phone = document.getElementById("phone");
phone.value;
//# sourceMappingURL=index.js.map