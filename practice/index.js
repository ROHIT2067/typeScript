"use strict";
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
class User {
    name;
    constructor(name) {
        this.name = name;
    }
}
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
