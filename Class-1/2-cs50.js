/*
Synchronous - Async - Single-Threaded
Javascript - single-threaded, synchronous language
*/

// Async:
function print_one() { console.log('One') }
function print_two() { console.log('Two') }
function print_three() { console.log('Three') }

setTimeout(print_one, 1000)
setTimeout(print_two, 0)
print_three()

/*
Some Async Function: setTimeout, fetch, jQuery.ajax, Database call etc.

Asynchronous JS:
# Execution Stack
    Function Callback
# Browser API: 
    Async Functions built into browser but not in JS.
    Its waits or works to make the function 
    synchronously and sends it to function queue
# Function Queue:
    Queues async functions sent from APIS 
    to execution chronologically 
# Event Loop:
    Checks if Stack is empty. If empty, it moves 
    the first item of function queue to Stack and 
    execute before moving another. Or Wait for stack 
    being empty.
*/


/*
Callbacks:  Control flow with async call
            Execute function once call returns value 
            and doesn't halt to wait for value

*/
