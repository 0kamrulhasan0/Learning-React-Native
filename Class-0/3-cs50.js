/*
Hoisting:
  Definiation/Declaration is hoisted/placed at the top of the file at the 
  time of execution regardless of wherever may it be assigned. 
  * Empty var is hoisted to the top
  * Function is hoisted : function hoisting
*/
// console.log(a)     // error : let is not hoisted
console.log(b)        // var is declared here even though assignment happen much later
func()                // even though func() is not defined until much later but it is 
                      // hoisted to the top. so it works



/*
Scope:
  Global scope  : 
  Lexical scope : var
  Block scope   : let, const  
                  Variable is created when it is declared (not when value is assigned)
*/


// global scope
g = 4 


// const scope
const t = 45
// t++        // constant can't be changed.
const s = {} 
s['a'] = 4    // constant address is same but the data in the address is changed 
console.log(s)


// let scope 
let a = 34
a++
// let a = 45    // a is already declared thus Error 
console.log(a)


// var scope
// even though it seems like it is declared and assigned here, it is actually 
// declared at the top of the file and assigned here. (Hoisted)
var b = 3
b++
var b = 422      // replaces the old value of b (Shawdowing : Feature/Bug)
console.log(b)


// function hoisting
function func() {
  console.log("This is Bottom")
}
func()
