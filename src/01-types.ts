//Type Declarations

//Will not work

// let x = 7;
// x = "seven";

//Declare types w/out initialization
let address: string;
let phoneNumber: string;
let email : string;
let sS: number;
let isMarried: boolean;

//Declare types with initialization
let username : string = "instructor";
let password : string = "password"
let instructorId : number = 1;
let greeting = "hello";

//Basic types

//Primitives

//* Number
let age: number = 40;
let currentYear : number = 2022;
let balance : number = 1_000_000;

//*string
let companyName: string;
companyName= "EFA";
let appName : string;
appName = "twitter";

//*Boolean
let isLoggedIn: boolean=true;
let isAdmin: boolean = true;

//*Arrays
//? Expressed in two ways
//1 This one is more popular
let studentList: string[] = ['Bob', 'Sally', 'Tom'];
//2
let allScores: Array<number> = [1,2,3];

//*Any
let dataFromThirdParty: any ="65465gsdfsdfhf";
console.log(typeof dataFromThirdParty);

//*Void
//? A void type has no type at all. This is not really seen in variables, but is more common to see in functions that return no value.

function sayHelloToAll(): void {
    console.log("hello y'all")
}
sayHelloToAll();

//*Null & Undefined
let undefinedVariable: undefined=undefined;
let nullVariable: null = null;

//*Tuple
//? Tuple type allows you to create an array with multiple different types

let usernameAndId: [string, number];
usernameAndId=["goofyandmax", 1]

//* Enumerators
//?Enums allow us to give names to numeric values
enum Color {
    "Red", //0
    "Orange", //1
    "Yellow", //2
}

let selected:string = Color[Color.Red];

enum CardType {
    Ace = 1,
    Two,
    Three,
    Four,
}
let cardType:string=CardType[1]; //Prints Ace in 01-types.JS ! file
console.log(cardType);

//*Union Types
let x: number | string | boolean;
x = 49854;
console.log(x);
x="Darah";
console.log(x);
x=true;
console.log(x);