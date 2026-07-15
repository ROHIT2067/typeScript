// 1.number
// let user_id: number = 334455;
// 2.boolean
// let isLoggedIn: boolean = false;
// 3.any
// let hero: string;
// function getHero() {
//   return "thambi";
// }
// hero = getHero();
// 4.functions
// function add(num: number) {
//   return num + 2;
// }
// add(2);
// function getUpper(val: string) {
//   return val.toUpperCase();
// }
// // console.log(getUpper('thambi'))
// function signUpUser(
//   name: string,
//   email: string,
//   password: string,
//   is_paid: boolean,
// ) {
//   return console.log(
//     `name is ${name}, email is ${email}, password is ***, is_paid : ${is_paid}`,
//   );
// }
// // signUpUser('thambi','thambi@gmail','123',true)
// let loginUser = (
//   name: string,
//   password: string,
//   email: string,
//   is_paid: boolean = true,
// ) => {
//   return console.log(
//     `name is ${name}, email is ${email}, password is ***, is_paid : ${is_paid}`,
//   );
// };
// // loginUser('thambi','thambi@gmail','123',false)
// function addTwo(num: number): number {
//   return num + 2;
//   // return 'thambi'
// }
// const getHello = (s: string): string => {
//   return "thambi";
// };
// function consoleError(err: string): void {
//   console.log(err);
// }
// function handleError(err:string):never{
//     throw new Error(err)
// }
// 5.objects
// const user={name:'thambi',email:'thambi@gmail.com',isActive:true}
// function createUser({name,isPaid}:{name:string,isPaid:boolean}){}
// createUser({name:'thambi',isPaid:true})
// function createCourse({name,price}:{name:string,price:number}):{name:string,price:number}{
//     return {name:'react',price:1808}
// }
// type User={
//   name:string;
//   email:string;
//   is_active:boolean
// }
// function createUser(user:User):User{
//   return {name:'thambi',email:'thambi@gmail.com',is_active:true}
// }
// createUser({name:'thambi',email:'thambi@gmail.com',is_active:true})
// type User = {
//   readonly _id: string;
//   name: string;
//   email: string;
//   is_active: boolean;
//   creditCard?: number;
// };
// type cardNumber={
//   cardNumber:string;
// }
// type cardDate={
//   cardDate:string
// }
// type cardDetails=cardNumber&cardDate&{cvv:number}
// 6.Union
// let score: number | string = 18;
// type User={name:string,id:number}
// type Admin={userName:string,id:number}
// let thambi:User|Admin={userName:'thambi',id:18}
// thambi={name:'thambi',id:18}
// function getDbId(id:number|string){
//   if(typeof id==="string"){
//     id.toLowerCase()
//   }else{
//     id+2
//   }
// }
// getDbId("3")
// 7.array
// const data1: number[] = [1, 2, 3, 4];
// const data2: string[] = ["1", "2", "3", "4"];
// const data3: number[] | string[] = ["1", "2", "3", "4"]; // either all numbers or all strings
// const data4: (number | string)[] = [1, 2, "18"]; //strings and numbers
// 8.tuples
//array bt with strict type insertion --> tuples
// let user:[string,number,boolean]
// user=['thambi',18,true]
// let rgb:[number,number,number]
// rgb=[123,241,35]
// type User=[number,string]
// let u:User=[18,'t']
// 9.interface
// interface User {
//   readonly _id: number;
//   email: string;
//   userId: number;
//   googleID?: boolean;
//   // startTrial:()=>string,
//   startTrial(): string;
//   getCoupon(name: string): number;
// }
// const thambi: User = {
//   _id: 8,
//   email: "thambi@gmail",
//   userId: 18,
//   startTrial: () => {
//     return "trial started";
//   },
//   getCoupon: (thambi) => {
//     return 10;
//   },
//   gitHub:'thambi//'
// };
// interface User{
//   gitHub:String
// }
// interface Admin extends User{
//   role:'admin'|'ta'|'learner'
// }
// const tham:Admin={
//   role:'admin',
//   _id:8,
//   email:'th@gma',
//   userId:8,
//   startTrial:()=>{return 'a'},
//   getCoupon(name) {
//     return 8
//   },
//   gitHub:'ad'
// }
// 10.public/private
// class User {
//   public email: string; //accessible from outside(default===public)
//   private name: string;
//   readonly city: string = "kochi"; //not accessible from outside
//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//   }
// }
// const thambi = new User("thambi@gmail", "thambi");
// thambi.city;
// 11.getters and setters
class User {
    email;
    name;
    coursecount = 1;
    city = 'kochi';
    constructor(email, name) {
        this.email = email;
        this.name = name;
    }
    get getAppleEmail() {
        return `apple email: ${this.email}`;
    }
    get courseCount() {
        return this.coursecount;
    }
    set coursecounT(courseNum) {
        if (courseNum <= 1) {
            throw new Error("hehehehehehe");
        }
        else {
            this.courseCount = courseNum;
        }
    }
}
export {};
