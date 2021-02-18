// ECMAScript vs Javascript
/* 
Transpiler : Makes ES6, ES7 etc code to ES5. 
e.g. Babel, TypeScript, CoffeScript
Feature Syntax is advisied to use.
*/

/* 
Closure:
Funtions that refer to variables declared by
parent funtion still have access to those variables
because of Javascripts scoping
*/

function parent_function() {
  let test_variable = 'Hello !';
  function child_function() {console.log(test_variable)}
  return child_function;
}

let returned_function = parent_function();
// console.log(returned_function.toString())
// The returned child funtion has access to test_variable
returned_function()       
// Even though test_variable doesn't exist outside
// console.log(test_variable)


function parent_func() {
  let arr = [];
  // because of var, the variable i gets overshawdoed by the
  // last value.
  // But, choosing let instead of var, solves the problem
  // and behaves just like normal closures
  for (var i=0; i<5; i++) {arr.push(function() {console.log(i)})}
  return arr
}

result = parent_func();
for (let i=0; i<5; i++) {result[i]()}




// Immediately Invoked Function Expression (IIFE):
// Creates closure and doesn't add/modify global object
const iife_result = (function parent_function() {
  let test_variable = 'Hello !';
  function child_function() {console.log(test_variable)}
  return child_function;
})()
iife_result()
// iffe doesn't create parent_function variable
// and gets invoked immediately after
// to restrict access of some variable inside closure
