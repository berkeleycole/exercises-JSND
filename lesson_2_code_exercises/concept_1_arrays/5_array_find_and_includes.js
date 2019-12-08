// ----------------------------------------------------------

// FIND AND INCLUDES EXERCISES

// ----------------------------------------------------------

// For the video

// ----------------------------------------------------------
// FIND
const best_bars = [
    'Mos Eisley Cantina',
    'Clark`s Bar',
    '10 Forward',
    'The Restaurant at the End of the Universe',
    'The Prancing Pony',
    '10 Forward',
]

const test1 = best_bars.find(x => x === 'Quark`s Bar')
const test2 = best_bars.find(x => x === '10 Forward')

console.log(test1)
console.log(test2)

// This shows that if no value in the array is found to meet the criteria, `undefined` will be the result. Also, if there are multiple items that match the criteria, it does not change the output.

// ----------------------------------------------------------
// INCLUDES

const best_bars = [
    'Mos Eisley Cantina',
    'Clark`s Bar',
    '10 Forward',
    'The Restaurant at the End of the Universe',
    'The Prancing Pony',
    '10 Forward',
]

const test1 = best_bars.includes('Quark`s Bar')
const test2 = best_bars.find('10 Forward')


console.log(test1)
console.log(test2)


// You can see that includes only returns a true or false value. Includes can also be used on strings

const test3 = best_bars.includes('The Prancing Ponies')
const test4 = best_bars.find('10 Forwards')

console.log(test3)
console.log(test4)


// ----------------------------------------------------------

// Exercises

// ----------------------------------------------------------

// Best use cases for FIND are when you want to cast a wider net, because you get to create your own criteria that can be either very specific or more generic.

// Determine whether any of the following have a value that contains the characters 'ABC'

const ids = [
    'ADHKE',
    'ANFKM',
    'QIMVU',
    'PQMFU',
    'ABCKO',
    'IUABC'
]
