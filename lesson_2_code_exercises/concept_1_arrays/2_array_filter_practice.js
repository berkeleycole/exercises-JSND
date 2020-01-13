// FILTER PRACTICE

// Video examples
// ----------------------------------------------------------
const values = ['true', true, 'yes', 'no', 1, 0, 'false', false];
// expected output: Array [true, 1]

// solution:
const result = values.filter(v => v == true);
console.log(result);


// ----------------------------------------------------------

// BEGINNER EXERCISES

// ----------------------------------------------------------

// Find all the words with more than 7 characters
const words = ['tardis', 'grok', 'frak', 'blaster', 'klingon', 'shepherd']

// expected output: Array ['shepherd']

// solution: 

// ----------------------------------------------------------

// Find all even values

const words = [12, 13, 14, 15, 16, 17]
// expected output: Array [12, 14, 16]

// solution: 

// ----------------------------------------------------------

// REAL LIFE EXAMPLES

// We often use filter to quickly pull all the items that share a status or other characteristic. For instance, create a list of all the active bounty hunters from the array below:

const hunters = [
    {
        name: 'Greedo',
        universe: 'Star Wars',
        status: 'active',
    },
    {
        name: 'Boba Fett',
        universe: 'Star Wars',
        status: 'inactive',
    },
    {
        name: 'Asajj Ventress',
        universe: 'Star Wars',
        status: 'unknown',
    },
    {
        name: 'Zam Wesell',
        universe: 'Star Wars',
        status: 'inactive',
    },
    {
        name: 'Jango Fett',
        universe: 'Star Wars',
        status: 'active',
    },
]

// expected output: Array [
//     {
//         name: 'Greedo',
//         universe: 'Star Wars',
//         status: 'active',
//     },
//     {
//         name: 'Jango Fett',
//         universe: 'Star Wars',
//         status: 'active',
//     },
// ]


// solution:
