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