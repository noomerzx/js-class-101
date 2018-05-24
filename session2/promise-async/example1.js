function test () {
  return new Promise(resolve, reject) {
    setTimeout(function () {
      resolve(100)
    }, 1000)
  }
}

async function main1 () {
  let result = await test()
  console.log(result)
}

function main2 () {
  test().then(result => {
    console.log(result)
  })
}