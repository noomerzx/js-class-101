let persons = [
  {
    name: 'Jack',
    age: 30,
    girlFriendsCount: 3,
    friends: [
      {
        name: 'Mark',
        age: 18
      }
    ]
  },
  {
    name: 'Peter',
    age: 27,
    girlFriendsCount: 1,
    friends: [
      {
        name: 'Paul',
        age: 22
      },
      {
        name: 'Bill',
        age: 15
      }
    ]
  },
  {
    name: 'Paul',
    age: 22,
    girlFriendsCount: 0,
    friends: [
      {
        name: 'Peter',
        age: 27
      },
      {
        name: 'Sarah',
        age: 24
      },
      {
        name: 'Jill',
        age: 31
      }
    ]
  }
]

console.log(persons.map(person => {
  return {
    name: person.name,
    age: person.age
  }
}))