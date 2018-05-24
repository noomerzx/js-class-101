function test () {
  return new Promise(resolve, reject) {
    setTimeout(function () {
      resolve(100)
    }, 1000)
  }
}

async function main1 () {
  let result = await test()
  result += await test()
  result += await test()
  result += await test()
  console.log(result)
}

function main2 () {
  let results = 0
  test().then(result => {
    results += result
    test().then(result => {
      results += result
      test().then(result => {
        results += result
        test().then(result => {
          results += result
          console.log(result)
        })
      })
    })
  })
}

function main3 () {
  let results = 0
  test().then(result => {
    results += result
    return test()
  }).then(result => {
    results += result
    return test()
  }).then(result => {
    results += result
    return test()
  }).then(result => {
    results += result
    console.log(result)
  })
}