function testFn (input) {
  test = 1234
  var testVar = 1234
  let testLet = 1234
  if (input === 99) {
    myNumber = 99
  } else if (input === 55) {
    var myNumber = 55
  } else {
    let myNumber = 0
  }
  console.log(myNumber)
}

testFn(0)
testFn(55)
testFn(99)
console.log(test)
console.log(testLet)
console.log(testVar)