
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};
  
var { firstName, age } = person;
console.log(firstName);

var {firstName,...other} = person
console.log(other)

var{firstName:name , age:Age} = person
console.log(name)
 
var {name:firstName="Unknown" , eyeColor:Color} = person
console.log(Color)

