/*
arr is an instance of array prototype(class) 
array prototype is an instance of object prototype(superclass)
and if a method available on both children class and superclass 
and it is invoked from children class object, the children class
method will be executed.
*/
arr = [1,2,3,4]
console.log(arr.__proto__)             // prototype of array
console.log(arr.__proto__.__proto__)   // prototype of object


/* 
Even though primitive data type do not have methods,
every primitive data type is wrapped in object which 
have some predefined methods
*/
// console.log(54.__proto__)           // error
// console.log(54.toString())          // error
const a = 54
console.log(a.__proto__)               // prototype of object wrapped around number
console.log(a.toString())

// false because a is the wrapper around number not
// the number itself
console.log(a instanceof Number)       
                                         
