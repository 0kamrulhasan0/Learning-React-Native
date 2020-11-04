/* 
Types:
      * boolean           |          Primitive Data Type  
      * number            |(No Method/Properties associate with them) 
      * string            |             (immutable) 
      * undefined         |           (pass by value)
      * object
              * null      |       +
              * object of class   +         mutable
              * array             +     pass by reference
              * everything else   +
*/
// Object in Javasript == Dictonary in Python 
//        assigning and accessing value
//        is same in both cases
const a = {
  1 : 'one',
  null : 'null',
  address : 'uk',
  obj : { 'hi' : 'Hola'}
  
}
console.log(a[1])
// console.log(a.1)   // Cause Error  
console.log(a.address)

// Pass by Reference
const b = a
// Create a empty object and assign the values of a to this new object
// Shallow Copy
const c = Object.assign({}, a}
// To Create a Deep Copy we have to write a funtion customly
