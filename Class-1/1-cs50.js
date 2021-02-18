// First Class Function = Object thats why high-order functions are possible which
// takes one or more function and returns another function.
// map(), filter(), reduce()
a = [1,2,3,4,5]
function add_one(x) { return x+1 }
function greater_than_3(x) { return x>3 }
function multiplier(x, y) { return x*y }

console.log(a.map(add_one))
console.log(a.filter(greater_than_3))
console.log(a.reduce(multiplier))
