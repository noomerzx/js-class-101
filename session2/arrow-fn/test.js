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

console.log(persons.reduce((result, curr) => {
  result.push(curr.friends.map(man => {
    man.friends = [{
      name: curr.name,
      age: curr.age
    }]
    return man
  }))
  return result
}, []))