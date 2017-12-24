# enum-powerset
generates all possible subsets (powerset) of elements in a given array

[![Build Status](https://travis-ci.org/incessantmeraki/enum-powerset.svg?branch=master)](https://travis-ci.org/incessantmeraki/enum-powerset)

## Usage

### Example

```js
  //generate all possible ways in which alice bob and eve can be selected

  var powerSet = require('enum-powerset')
  
  var arr = ['alice', 'bob', 'eve']

  var result = powerSet(arr) 
  console.log(result)
```

### API

#### ` require('enum-powerset')(arr)`
returns an array containing all possible selections of elements in given array arr

## License

MIT
