let jack = {
  name: 'vittaya',
  girlFriends: [
    {
      name: 'Ying'
    },
    {
      name: 'Nan'
    }
  ]
}

let harlem = jack.girlFriends

harlem.push({
  name: 'Oilly'
})

console.log(jack.girlFriends)