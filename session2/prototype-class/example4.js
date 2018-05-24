class Person {
  constructor (firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`
  }
}

let person1 = new Person('Wisarut', 'Noomerzx')
console.log(person1.getFullName())

let person2 = new Person('Vittaya', 'Fuck Duck')
console.log(person2.getFullName())