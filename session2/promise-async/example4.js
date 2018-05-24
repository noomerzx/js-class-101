function test1 () {
  return new Promise(resolve, reject) {
    setTimeout(function () {
      console.log(100)
      resolve(100)
    }, 1000)
  }
}

function test2 () {
  return new Promise(resolve, reject) {
    setTimeout(function () {
      console.log(200)
      resolve(200)
    }, 1000)
  }
}

function test3 () {
  return new Promise(resolve, reject) {
    setTimeout(function () {
      console.log(300)
      resolve(300)
    }, 1000)
  }
}

function test4 () {
  return new Promise(resolve, reject) {
    setTimeout(function () {
      console.log(400)
      resolve(400)
    }, 1000)
  }
}

async function main () {
  console.log(await test1())
  console.log(await test2())
  console.log(await test3())
  console.log(await test4())

  console.log(test1())
  console.log(test2())
  console.log(test3())
  console.log(test4())

  let result = await test1()
  result += await test2()
  result += await test3()
  result += await test4()
  console.log(result)
}