function test () {
  return new Promise(resolve, reject) {
    setTimeout(function () {
      resolve(100)
    }, 1000)
  }
}

async function main1 () {
  try {
    let result = await test()
    result += await test()
    result += await test()
    result += await test()
    console.log(result)
  } catch (err) {
    console.log('error = ', err)
  }
}

function main2 () {
  let results = 0
  test().then(result => {
    results += result
    return test()
  }).then(result => {
    throw 'this is error from step 2'
    return test()
  }).then(result => {
    results += result
    return test()
  }).then(result => {
    results += result
    console.log(result)
  }).catch(err => {
    console.log('error = ', err)
  })
}