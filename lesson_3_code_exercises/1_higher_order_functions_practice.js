// ----------------------------------------------------------

// HIGHER ORDER FUNCTIONS EXAMPLE

// ----------------------------------------------------------


// Doubling
const nums = [1, 2, 3, 4, 5]
const doubles = nums.map(x => x * 2)

console.log(doubles)
// expected output: Array [2, 4, 6, 8, 10]

// Equivalent to:

const doubler = function (x) {
  return x * 2
}

const doubles2 = nums.map(doubler)

// inside map... 
// doubler(1, 0, [1,2,3,4,5])

console.log(doubles2)

// ----------------------------------------------------------

// HIGHER ORDER FUNCTIONS EXERCISES

// ----------------------------------------------------------

// Create a function that when passed as a callback to the Higher Order function provided, makes the final return the target number's square plus two

const addTwo = (target, callback) => {
  return callback(target) + 2
}

// Create a Higher Order Function that could take this callback to return a greeting

const createFullName = (first_name, last_name, title) => {
  return `${title} ${first_name} ${last_name}`
}


// you might notice that this function is less than ideal - that's great! We'll talk about why next




