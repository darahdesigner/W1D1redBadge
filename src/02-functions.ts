//In Javascript
// function demoFunction(someNum) {
//     return someNum;
// }
// demoFunction(1);
// demoFunction("string");
// demoFunction(2, "hop", true);

//We can call the function with a number as an argument
//We can call the function with a string as an argument
//We can add arguments that weren't originally declared
//The third example didn't work (line 7) because it had 3 arguments when one was expected

function addNumbers(num1:number, num2:number):number{
    return num1+num2;
}

addNumbers(1, 2);
console.log(addNumbers);
//! Errors
//addNumbers (1, ''),
//addNumbers ('test', "");
//addNumbers ();

function hello(greetingString:string) {
    return greetingString;
}
hello("hello")


//*Functional with optional parameters
function showNameOrAge(firstName:string, lastName: string,age?:number){ // ? after age makes that parameter optional
  console.log(firstName+" "+ lastName);
  return age;
}
showNameOrAge("Jane", "Doe", 25)