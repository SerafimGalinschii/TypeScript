"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
class KeyValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
let pair = new KeyValuePair(1, "hello");
class ArrayUtils {
    static wrapInArray(value) {
        return [value];
    }
}
let number = ArrayUtils.wrapInArray(1);
// function fetch<T>(url: string): Result<T> {
//   return { data: null, error: null };
// }
// interface User {
//   username: string;
// }
// interface Product {
//   title: string;
// }
// let result = fetch<Product>("url");
// result.data?.title;
class PersonB {
    constructor(name) {
        this.name = name;
    }
}
class CustomerB extends PersonB {
}
function echo(value) {
    return value;
}
echo(new CustomerB("a"));
function Commponent(constructor) {
    console.log("Component decorator called");
    constructor.prototype.uniqueId = Date.now();
    constructor.prototype.insertInDOM = () => {
        console.log("Inserting the component in the DOM");
    };
}
let ProfileComponent = class ProfileComponent {
};
ProfileComponent = __decorate([
    Commponent
], ProfileComponent);
//# sourceMappingURL=Generic-Classes&Moderatots.js.map