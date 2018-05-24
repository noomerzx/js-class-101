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

let result = [{
    name: 'Mark',
    age: 18,
    friends: [{
      name: 'Jack',
      age: 30
    }]
  },
  {
    name: 'Paul',
    age: 22,
    friends: [{
      name: 'Peter',
      age: 27
    }]
  },
  {
    name: 'Bill',
    age: 15,
    friends: [{
      name: 'Peter',
      age: 27
    }]
  }{
    name: 'Peter',
    age: 27,
    friends: [{
      name: 'Paul',
      age: 22
    }]
  },
  {
    name: 'Sarah',
    age: 24,
    friends: [{
      name: 'Paul',
      age: 22
    }]
  },
  {
    name: 'Jill',
    age: 31,
    friends: [{
      name: 'Paul',
      age: 22
    }]
}]