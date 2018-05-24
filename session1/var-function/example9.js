let numbers = [2, 5, 11, 8 , 1]

function sumDelay (list, callback) {
  let result = 0
  for (let index = 0; index < list.length; index++) {
    result += list[index]
  }
  setTimeout(function () {
    callback(result)
  }, 1000)
}

function callbackFn (result) {
  // do something with result
  console.log(result)
}

sumDelay(numbers, callbackFn)

// sumDelay(numbers, function (result) {
//   console.log(result)
// })