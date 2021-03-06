// Translate from normal function to pure function
let greeting = 'Hello, '

const greet = (name) => {
    return greeting += name
}

// this code could be problematic because greeting is in the global scope. 
// We could not use the greeting a second time, because the greeting variable is changed to contain the name


// Solution

const greet = (name, base_greeting) => {
    return `${base_greeting} ${name}`
}

let greeting = "Hello, "

greet('Arthur', greeting)

// now we can re-use greeting, and the greet function is pure


