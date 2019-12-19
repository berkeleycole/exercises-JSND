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


// ----------------------------------------------------------

// It best to use INCLUDES when what the value is does not matter, simply its presence. Imagine the scenario that you are need to check a user's id against a list of admin id's.

const currentUserId = '29nv283bfc0szn16723'

const admins = [
    '02398cn7syap0dmbnv0',
    '2389sakvjhw8e7f09fv',
    '09mxvb82kzjd6v1sfdg',
    '9a76zxmsdnv1u622345',
    '29nv283bfc0szn16723',
    '029834zmnv9jhgfu2ab',
    '12mnz09v87bas78fb12',
    '098Xc8x76m3nb4aposi'
]

// ----------------------------------------------------------

// Checking between lists. Another thing that you might need to do in real life is check items between two arrays. Check if array B has any values that are also in array A. This becomes especially helpful when the values are hard to distinguish visually

const A = [
    '02398cn7syap0dmbnv0',
    '2389sakvjhw8e7f09fv',
    '09mxvb82kzjd6v1sfdg',
    '9a76zxmsdnv1u622345',
    '29nv283bfc0szn16723',
    '029834zmnv9jhgfu2ab',
    '12mnz09v87bas78fb12',
    '098Xc8x76m3nb4aposi'
]

const B = [
    '13xnse8aanv87Hdnfv8',
    '2389sakvjhw8e7f09fv',
    '12mn0vnZkadfh237LPd',
    '1209MNBd8723nvkwejs',
    '298374naskdj273ubsl',
    '098LKJnsvijevkwejf6'
]
