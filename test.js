var test =require('tape')
var powerSet = require('./index.js')

test('first test', function (t) {
  var elements = [1,2,3,4,5]
  var output = powerSet(elements)
  t.equal(output.length, Math.pow(2,elements.length))
  t.end()
})

test('second test', function (t) {
  var elements = ['rock', 'paper', 'scissors']
  var output = powerSet(elements)
  t.equal(output.length, Math.pow(2,elements.length))
  t.end()
})
