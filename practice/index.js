"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
function updateUser(id, val) {
    return;
    console.log('updated');
}
updateUser(18, { name: 'thambi' });
const c = { host: 'local', port: 1818 };
const p = { x: 1, y: 2 };
const permission = {
    admin: ['read', 'write', 'delete'],
    user: ['read', 'write'],
    guest: ['read']
};
//type definition of arrays
//basic declaration 
let nums = [1, 2, 3];
//union typed arrays
let mixed = [1, 'two', 'three', 4];
//readonly arrays
const arr = [1, 2, 3];
//multi dimensional arrays
let grid = [[1, 2], [18, 8]];
//tuple => fixed length arrays
let point = [18, 8];
let entry = ['18', 8, true];
//optional tuple 
let coord = [18, 8];
let users = [{ id: 18, name: "A" }, { id: 8, name: "K" }];
//type definition of objects
//inline object type annotation
let user = { id: 18, name: 'thambi' };
const u = { id: 18, name: 'thambi', email: 'thambi@gmail' };
const d = { name: 'black', breed: 'lab' };
//union types => value can be one of several types, connected with |
//basic syntax
let id;
//union in function parameters
function printID(id) {
    return id;
}
let s = 'pending';
//union with arrays
let values = [1, 'two'];
let userId = '18';
const us = { id: 18, name: 'thambi', email: 'thambi@gmail' };
const a = { name: 'thambi', age: 18, place: 'kochi' };
// <------------------------------------------------------->
//OOP in ts
class Animal {
    name;
    constructor(name) {
        this.name = name;
    }
}
class Dog extends Animal {
    breed; //Encapsulation
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }
    makeSound() {
        console.log(`${this.name} barks`);
    }
}
const dd = new Dog('Rex', "pug");
class Car {
    start() {
        console.log('car engine started');
    }
    stop() {
        console.log('car engine stopped');
    }
}
function operate(v) {
    v.start();
    v.stop();
}
operate(new Car());
//decorators
//class decorator => runs once when the class is defined
function logged(constructor) {
    console.log(`class created : ${constructor.name}`);
}
let User = (() => {
    let _classDecorators = [logged];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var User = class {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            User = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
            __runInitializers(_classThis, _classExtraInitializers);
        }
        name;
        constructor(name) {
            this.name = name;
        }
    };
    return User = _classThis;
})();
//property decorator => runs when the property is declared
function log(target, propertyKey) {
    console.log(`property defines : ${propertyKey}`);
}
class product {
    price = 18;
}
function greet(name, age) {
    if (age !== undefined) {
        return `hello ${name}, you are ${age} years old`;
    }
    return `hello ${name}`;
}
//method overriding => subclass replaces a method the parent already implemented
class Annimall {
    makeSound() {
        console.log('some generic animal sound');
    }
}
class Doog extends Annimall {
    makeSound() {
        console.log('BARK');
    }
}
class Cat extends Annimall {
    makeSound() {
        console.log('MEOW');
    }
}
new Annimall().makeSound();
new Doog().makeSound();
new Cat().makeSound();
//type assertion => telling the compiler : 'I know more about this value type than u do, treat it as X'
//'as' syntax
let val = 'hello world';
let strLen = val.length;
//generic functions
//basic syntax
function identity(val) {
    return val;
}
identity('thambi');
//generic array function
function firstElem(arr) {
    return arr[0];
}
firstElem([18, 1]);
//multiple type parameters
function pair(first, second) {
    return [first, second];
}
pair('id', 18);
//promise
let promise = new Promise((res, rej) => {
    let suc = true;
    if (suc) {
        res(18);
    }
    else {
        rej('failed');
    }
});
promise.then((val) => console.log(val));
