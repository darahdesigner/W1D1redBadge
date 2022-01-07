interface Animal {
    name: string;
    numberOfLegs:number;  /* ? would make it optional!*/ 
}
//! Error cannot instantiate then, interfaces are NOT Classes
// let a: Animal = new Animal();

//!Error because an interface was assigned, the variable expects to have the same properties within that interface.
// let dog: Animal={}

let dog: Animal={
    name:"Fido",
    numberOfLegs:4,
}

//*Methods
//? Interfaces have methods but they can only have method signatures, not the implementation of the method

//Method signature - First line of the function 
// sayHello(name:string):string  /*This is the method signature -- function at start of method signature is implicit, not needed*/

//Method implementation -- execution code for the  function

//    { let fName=name
//     return fName;
// }

interface Product{
    name: string;
    price: number;
    stock: number;
    setTimeOfPurchase(d:Date):void;
    stockCount():void;
}

class Apples implements Product {
    name="Green Apples";
    price=5.5;
    stock=30;

    
    setTimeOfPurchase(d:Date){
        console.log("Apples purchased on", d);
    }

    stockCount(){
        console.log('Apples remaining', this.stock)
    }
}
let myApples: Apples = new Apples();

myApples.setTimeOfPurchase(new Date(Date.now()));
myApples.stockCount();

//Sharing Interface Types

type id= number;
interface UserObjInterface{
id:id;
username: string;
avatar: string;
}

interface CommentObjInterface {
    id: id;
    user: UserObjInterface;
    text: string;
}

interface PostObjInterface{
    id:id;
    poster: UserObjInterface;
    title: string;
    text: string;
    comments: CommentObjInterface[];
}

//Simulate a get all fetch for posts
//Posts -> Has many comments
//
const Posts:PostObjInterface[] = [
    {
      id: 1,
      poster: {
        id: 1,
        username: "user1",
        avatar: "user1.png",
      },
      title: "My first post",
      text: "Hello World",
      comments: [
        {
          id: 1,
          user: {
            id: 3,
            username: "user3",
            avatar: "user3.png",
          },
          text: "Some comment!",
        },
        {
          id: 2,
          user: {
            id: 2,
            username: "user2",
            avatar: "user2.png",
          },
          text: "Another comment!",
        },
      ],
    },
  ];

  //Interfaces + Classes
  type Year= number |string;

  interface Colors{
      interior: string;
      exterior: string;
  }
  interface CarInterface{
      year: Year;
      model: string;
      price: number;
      color: Colors;
      electric?: boolean;
      testDrive():void;
  }
  class Car implements CarInterface{
      constructor(
          public year: Year, 
          public model:string, 
          public price: number, 
          public color: Colors){}

          testDrive(){
              console.log(`Test drove th ${this.model}`);
          }
        }

  class Tesla extends Car {
      private _owner: string = 'Tesla Dealership';
    public electric: true=true;
    constructor(
        public year: Year, 
        public model:string, 
        public price: number, 
        public color: Colors
    ){
        super(year, model, price, color)
    }

    purchase(price:number, purchaser:string){
        if (price >= this.price) {
            this.changeOwner(purchaser);
            console.log(`Bought the ${this.model}. Enjoy your purchase!`);
            this.price=this.price-15000;
        }else{
            console.log(`You need ${this.price-price} more to purchase this car.`)
        }
    }
    private changeOwner(newOwner:string) {
        this._owner=newOwner;
    }
  }
  let TeslaForSale = new Tesla(
    2022,
    "Model S",
    94_900,
    {interior: "gray", exterior: "black"},
  );
  
  console.log({TeslaForSale})

  //! Error cannot access a private property
  //TeslaForSale.owner-"Me";

   //! Error cannot access a private property
   //TeslaForSale.changeOwner("Me");
  
  
  TeslaForSale.testDrive();
  TeslaForSale.purchase(10_000, "DS");
  TeslaForSale.purchase(100_000, "Darah");

  console.log({TeslaForSale});
  
  
  
  
  
  
  
  