let numbers = [2, 5, 11, 8 , 1]

function sumDelay (list, callback) {
  let result = 0
  for (let index = 0; index < list.length; index++) {
    result += list[index]
  }
  setTimeout(function () {
    // callback(result)
    return result
  }, 1000)
}

function sum (list) {
  let result = 0
  for (let index = 0; index < list.length; index++) {
    result += list[index]
  }
  return result
}

let result1 = sum(numbers)
let result2 = sumDelay(numbers)

console.log('1111 ', result1)
console.log('2222 ', result2)