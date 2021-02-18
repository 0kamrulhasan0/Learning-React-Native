/*
Javascript : 
    Interpreted
    Different Implementation of ECMAScript Standard
    Chrome    -     V8 and Nodejs 
    Firefox   -     Spider Monkey
*/

// Typecasting/Coersion 
// Explicit
const val = 43
const kal = '21'
console.log(String(val))      // converting number 42 to string '42'
console.log(Number(kal))      // converting string '21' to number 21

// Implicit
console.log(val + '')


// Falsey Value
// +0, -0, NaN, undefined, null, "", false ---coerced into---> false
// Truthy Value 
// [], {}, Everything else ---coerced into---> true


// executing the funtion 
const test_function = function() { console.log("Executing The Function") }
test_function()   


// array can hold multiple type of data including funtion and datatype
// array have *array.length* property which tells the number of element 
// in the array
const arr = [ 'sg', "s", val, function() { console.log('hi') }, () => {console.log('new')}]
for (let i=0; i<arr.length; i++) {
  console.log(arr[i] + ' ' + typeof arr[i]) }


// Comparing
console.log('43' == 43)   // True: Cocersion & Compare; different type same value True
console.log('43' === 43)  // False: Compare; same type and same value True
