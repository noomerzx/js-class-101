function testFn (num1, num2, type) {
  switch (type) {
    case '+' : return num1 + num2; break
    case '-' : return num1 - num2; break
    case '*' : return num1 * num2; break
    case '/' : return num1 / num2; break
  }
}

let result = testFn(5, 5, '-')

console.log(result)