"use strict";
// OOP in TS
// abstract class Animal{
//     constructor(protected name:string){}
//     abstract makeSound():void       //Abstaction
// }
// class Dog extends Animal{       //Inheritance
//     private breed:string        //Encapsulation
//     constructor(name:string,breed:string){
//         super(name)
//         this.breed=breed
//     }
//     makeSound(): void {         //Polymorphism
//         console.log(`${this.name} barks`);
//     }
// }
// const d=new Dog('Rex',"pug")    
// d.makeSound()
// Array Type Definition(there are two syntax for declaring array types)
let arr1 = [18, 8, 18]; //1
let arr2 = [18, 8, 18]; //2
//variants:
let names = ['a', 't'];
let mixed = ['a', 8]; //union type array
let matrix = [[8, 18], [18, 8]]; //2D array
let readOnlyArr = [8, 18, 18]; //immutable
// tuple (fixed length,fixed type array)
let tuple = ['a', 18];
let t = ['a']; //optional
// Object Type Definition(defines the shape of an object - property names and their types)
//inline syntax(better practice to use interface or type alias)
let user = { name: 'thambi', age: 18 };
const u = { _id: 18, name: 'thambi', age: 18 };
// Union Types(a value can be one of several types, using | )
let id;
id = 18;
id = 'thambi';
let cor = { x: 18, y: 8 };
const greet = (name) => `Hello ${name}`;
const d = { name: 'black', owner: 'thambi', breed: 'lab' };
//Generic function
function identity(value) {
    return value;
}
identity(['1', 2, 8]);
//multiple type parameter
function pair(a, b) {
    return [a, b];
}
pair('age', 25);
function logLength(item) {
    return item.length;
}
console.log(logLength("hello"));
