var personObj1 = {
  name: 'Alex',
  age: 30
};

var person = personObj1;
person.age = 25;

person = {
name: 'john',
age: 50
};

var personObj2 = person;

console.log(personObj1); // -> ?
console.log(personObj2); // -> ?