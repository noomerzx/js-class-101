function logDelay (callback) {
  setTimeout(function () {
    console.log(100)
    callback(100)
  }, 1000)
}

function log () {
  console.log(100)
}

log()
console.log('1111')
logDelay()
console.log('2222')