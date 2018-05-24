const Person = function(firstName, lastName) {
  this.firstName = firstName
  this.lastName = lastName
}

Person.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`
}

const person1 = new Person('Nuttavut', 'Thongjor')
console.log(person1.getFullName()) // Nuttavut Thongjor

const person2 = new Person('John', 'Smith')
console.log(person2.getFullName()) // John Smith