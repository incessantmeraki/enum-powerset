module.exports = function (arr) {
  var output = []
  for (let i = 0; i < (1<<arr.length); i++) {
    let result = []
    for (let j = 0; j < arr.length; j++) {
      if (i & (1 << j)) 
        result.push(arr[j]) 
    }
    output.push(result.join())
  }
  return output
}
