//Utility types
    //partial => makes all properties optional
    interface user{id:number;name:string;email:string}
    function updateUser(id:number,val:Partial<user>){
        return
        console.log('updated')
    }
    updateUser(18,{name:'thambi'})
    //required => makes all properties, mandatory
    interface config{host?:string;port?:number}
    const c:Required<config>={host:'local',port:1818}
    //readonly => prevents reassignment of properties
    interface point {x:number;y:number}
    const p:Readonly<point>={x:1,y:2}
    //record => builds an object type with keys K and values V
    type role='admin'|'user'|'guest'
    const permission:Record<role,string[]>={
        admin:['read','write','delete'],
        user:['read','write'],
        guest:['read']
    }
    //pick => selects a subset of properties
    interface todo{id:number;title:string;completed:boolean}
    type todoPreview=Pick<todo,'id'|'title'>
    //omit => excludes specified properties
    type todoWithoutId=Omit<todo,'id'>
    //exclude => removes types from a union
    type status='active'|'inactive'|'banned'
    type nonBanned=Exclude<status,'banned'>


//type definition of arrays
    //basic declaration 
    let nums:number[]=[1,2,3]
    //union typed arrays
    let mixed:(string|number)[]=[1,'two','three',4]
    //readonly arrays
    const arr:readonly number[]=[1,2,3]
    //multi dimensional arrays
    let grid:number[][]=[[1,2],[18,8]]
        //tuple => fixed length arrays
        let point:[number,number]=[18,8]
        let entry:[string,number,boolean]=['18',8,true]
        //optional tuple 
        let coord:[number,number,string?]=[18,8]
        //array of objects/interfaces
        interface User{id:number;name:string}
        let users:User[]=[{id:18,name:"A"},{id:8,name:"K"}]


//type definition of objects
    //inline object type annotation
    let user:{id:number;name:string}={id:18,name:'thambi'}
    //interface
    interface USser{
        id:number;
        name:string;
        email:string
    }
    const u:USser={id:18,name:'thambi',email:'thambi@gmail'}
    //type alias
    type USSer={
        name:string;
        id:number;
        email:string
    }
    //extending object types
    interface Annimal {name:string}
    interface dog extends Annimal{breed:string}
    const d:dog={name:'black',breed:'lab'}
        //or
    type animaal={name:string}
    type Dogg=animaal&{breed:string}


//union types => value can be one of several types, connected with |
    //basic syntax
    let id:string|number
    //union in function parameters
    function printID(id:string|number){
        return id
    }
    //union of literal types
    type sttatus='pending'|'approved'
    let s:sttatus='pending'
    //union with arrays
    let values:(string|number)[]=[1,'two']


//type keyword => creates a type alias, name for any type, not just objects
    //basic syntax
    type ID=string|number
    let userId:ID='18'


//interface
    //basic syntax
    interface USSSser{
        id:number;
        name:string;
        email:string
    }
    const us:USSSser={id:18,name:'thambi',email:'thambi@gmail'}
    //optional properties
    interface confIG{
        host:string;
        port?:number
    }
    //extending another interface
    interface name {name:string}
    interface age {age:number}
    interface place extends name,age{
        place:string
    }
    const a:place={name:'thambi',age:18,place:'kochi'}

// <------------------------------------------------------->

//OOP in ts
abstract class Animal{
    constructor(protected name:string){}
    abstract makeSound():void       //Abstaction
}
class Dog extends Animal{       //Inheritance
    private breed:string        //Encapsulation

    constructor(name:string,breed:string){
        super(name)
        this.breed=breed
    }

    makeSound(): void {         //Polymorphism
        console.log(`${this.name} barks`);
    }
}
const dd=new Dog('Rex',"pug")    
// dd.makeSound()


//abstraction using interface/ class from interface
interface Vechicle{
    start():void;
    stop():void
}
class Car implements Vechicle{
    start(){
        console.log('car engine started')
    }
    stop(){
        console.log('car engine stopped')
    }
}
function operate(v:Vechicle){
    v.start()
    v.stop()
}
operate(new Car())


//decorators
    //class decorator => runs once when the class is defined
    function logged(constructor:Function){
        console.log(`class created : ${constructor.name}`)
    }
    @logged
    class User{
        constructor(public name:string){
        }
    }
    //property decorator => runs when the property is declared
    function log(target:any,propertyKey:string){
        console.log(`property defines : ${propertyKey}`)
    }
    class product{
        price:number=18
    }


//method overloading => same function name, multiple valid parameter signatures
function greet(name:string):string
function greet(name:string,age:number):string
function greet(name:string,age?:number):string{
    if(age!==undefined){
        return `hello ${name}, you are ${age} years old`
    }
    return `hello ${name}`
}


//method overriding => subclass replaces a method the parent already implemented
class Annimall{
    makeSound():void{
        console.log('some generic animal sound')
    }
}
class Doog extends Annimall{
    makeSound(): void {
        console.log('BARK')
    }
}
class Cat extends Annimall{
    makeSound(): void {
        console.log('MEOW')
    }
}
new Annimall().makeSound()
new Doog().makeSound()
new Cat().makeSound()


//type assertion => telling the compiler : 'I know more about this value type than u do, treat it as X'
    //'as' syntax
    let val:unknown='hello world'
    let strLen:number=(val as string).length


//generic functions
    //basic syntax
    function identity<T>(val:T):T{
        return val
    }
    identity<string>('thambi')
    //generic array function
    function firstElem<T>(arr:T[]):T{
        return arr[0]
    }
    firstElem([18,1])
    //multiple type parameters
    function pair<T,U>(first:T,second:U):[T,U]{
        return [first,second]
    }
    pair('id',18)


//promise
let promise:Promise<number>=new Promise((res,rej)=>{
    let suc=true
    if(suc){
        res(18)
    }else{
        rej('failed')
    }
})
promise.then((val:number)=>console.log(val))



//Encapsulation: Bundling data and methods together and controlling access to the internal state.

// Absmtraction: Hiding unnecessary implementation details and exposing only essential functionality.

// Inheritance: Creating a new class from an existing class, allowing it to reuse and extend its properties and methods.

// Polymorphism: The same interface or method can have different implementations or behaviors depending on the object/type.

// decorator : special function used to add or modify the behavior of a class, method, property, or parameter without directly changing its original code.

// generics : feature that allows us to write reusable code that works with different types while maintaining type safety.