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
ken.sayHello();

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
console.log(battleShip);

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
let tesla : Automobile

class UserObj{
    name: string;
    id: number;
}
class Comments {
    id: 1; //comment id number
    text: "dfjkg"; //comment itself
    user: UserObj; //object of UserObj ie {"tony", 10}
}
