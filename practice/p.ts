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
let arr1:number[]=[18,8,18]     //1
let arr2:Array<number>=[18,8,18]        //2
    //variants:
    let names:string[]=['a','t']
    let mixed:(string|number)[]=['a',8]     //union type array
    let matrix:number[][]=[[8,18],[18,8]]   //2D array
    let readOnlyArr:readonly number[]=[8,18,18]     //immutable


// tuple (fixed length,fixed type array)
let tuple:[string,number]=['a',18]
let t:[string,number?]=['a']        //optional


// Object Type Definition(defines the shape of an object - property names and their types)
    //inline syntax(better practice to use interface or type alias)
    let user:{name:string,age:number}={name:'thambi',age:18}
    //OTD using interface and type alias
    interface User{
        name:string,
        age:number,
        email?:string       //optional property
        readonly _id:number     //cant be reassgined 
    }
    type UserT={
        name:string
        age:number
    }
    const u:User={_id:18,name:'thambi',age:18}


// Union Types(a value can be one of several types, using | )
let id:string|number
id=18
id='thambi'


//Type Keyword / type aliase(creates a custom name for any type-primitive,union,tuple,object,function)
//used to name complex/reused type 
type ID=string|number
type point={x:number,y:number}
type callback=(data:string)=>void
let cor:point={x:18,y:8}


//Interface
interface A{x:number}
interface B{y:number}       //merges : A now has x AND y
    //basic syntax
    interface user{
        name:string,
        age:number,
        readonly _id:number     //set once, cant reassign
        emai?:string        //optional
    }
    //function type in interface
    interface Greet{
        (name:string):string        //callable 
    }
    const greet:Greet=(name)=>`Hello ${name}`
    //extending interface
    interface Animal{name:string}
    interface pet {owner:string}
    interface Dog extends Animal,pet{
        breed:string
    }
const d:Dog={name:'black',owner:'thambi',breed:'lab'}


//Generic function
function identity<T>(value:T):T{        //the parameter and argument will be of the same type
    return value
}
identity(['1',2,8])
    //multiple type parameter
    function pair<T,U>(a:T,b:U):[T,U]{
        return [a,b]
    }
    pair('age',25)
    //constraints(extends)
    interface hasLength{
        length:number
    }
    function logLength<T extends hasLength>(item:T){
        return item.length
    }
    logLength("hello")
    //generic function(array)
    function getFirstElem<T>(array:T[]){
        return array[0]
    }