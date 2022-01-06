//* Properties

class Person {
    firstName: string;
    lastName: string;
}
let user: Person = new Person();  // user :Person (type of), new Person (new instance of)
user.firstName= "Timmy";
user.lastName = "Smith";



class User {
    firstName: string;
    lastName: string;
    sayHello(){
        console.log("Hello", this.firstName);
    }
}
let ken: User = new User();
ken.firstName = "Ken";
// ken.sayHello();  <<commented because no longer needed as it was already checked

//Constructors

class Game {
    constructor(name:string, maker:string){  //treat constructor with function syntax
        this.name=name
        this.maker=maker
    }
    name: string
    maker: string
}
let battleShip: Game = new Game ('Battleship', 'Hasbro');
// console.log(battleShip);  <<commented because no longer needed as it was already checked

//Inheritance

class Vehicle {
    type: string;
    make: string;
    model: string;
    manufactureYear:number;
    runs: boolean;
    topSpeed: number;
}
class Automobile extends Vehicle{
    isSelfDriving: boolean;
}
let myCar: Automobile = new Automobile();



myCar.isSelfDriving=false;
myCar.topSpeed=200;
myCar.make="Volvo";

// console.log({myCar});  << already checked

class Motorcycle extends Vehicle {
    easyToDoWheelie: boolean;
}
let myMotorcycle: Motorcycle = new Motorcycle();
myMotorcycle.easyToDoWheelie=false;
myMotorcycle.topSpeed=250;

// console.log({myMotorcycle})



class UserObj{
    name: string;
    id: number;
}
class Comments {
    id: 1; //comment id number
    text: "dfjkg"; //comment itself
    user: UserObj; //object of UserObj ie {"tony", 10}
}

//Accessors

// class Store {
// name:string;
// city:string;

//     constructor(name:string, city:string){
//         this.name=name; /*this. pulls instance of higher nested arguments*/
//         this.city=city;
//     }
// }
// let ikea:Store =new Store ('Ikea', 'Chicago');

// console.log({ikea});


//Steamlined approach
    class Store {
        constructor(public storeName:string, public city:string){}
    }
    let ikea:Store =new Store ('Ikea', 'Chicago');
    console.log({ikea})



    class Employee extends Person{
    private _salary: number; 
    public badgeId:number;
    schedule: string[]; /* << If private or public is not listed, it is default public*/

    getSalary():number{
        return this._salary;
    }
    setSalary(newSal:number){
        this._salary=newSal;
    }
    }

    let newEmployee: Employee = new Employee();
    // newEmployee._salary:  <<'_salary' is private and only accessible within class 'Employee'.
    newEmployee.badgeId = 46456;
    newEmployee.schedule=[''];

    newEmployee.setSalary(30000);
    console.log(newEmployee.getSalary());