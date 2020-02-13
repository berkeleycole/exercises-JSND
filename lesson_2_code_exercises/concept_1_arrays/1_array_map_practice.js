// MAP PRACTICE

// Video examples

// ----------------------------------------------------------
// Most Basic
const captains = ['Picard', 'Adama', 'Reynolds', 'Beeblebrox']

// create new array
const titles = captains.map(cap => `Captain ${cap}`)

// equivalent to:
//const titles = captains.map(cap => {
    //return `Captain ${cap}`
//})

console.log(titles)
// expected output: Array ['Captain Picard', 'Captain Adama', 'Captain Reynolds', 'Captain Beeblebrox']
console.log(captains)
// is unchanged

// ----------------------------------------------------------
// Doubling
const nums = [1, 2, 3, 4, 5]

const doubles = nums.map(x => x * 2)

console.log(doubles)
// expected output: Array [2, 4, 6, 8, 10]

// Equivalent to:
const doubler = function(x) {
    return x * 2
}

const doubles2 = nums.map(doubler)
console.log(doubles2)

// ----------------------------------------------------------

// BEGINNER EXERCISES

// ----------------------------------------------------------
// Write a map function to reverse this array:
const start = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// your code

// expected output: Array [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

// solution
const end = start.map(x => abs(x - 11))
console.log(end)


// ----------------------------------------------------------
// Write a map function to print the Job: Name:
const shipMates = [["Mal", "Captain"], ["Wash", "Pilot"], ["Zoey", "1st Mate"], ["Jayne", "Public Relations"]]

// your code

// expected output: Array ["Captain: Mal", etc...]

// solution
const result = shipMates.map(arr => arr.reverse().join(': '))
console.log(result)

// ----------------------------------------------------------
// Write a map function that prints the name: even|odd
const awayTeam = ["Picard", "Riker", "Troy", "Data"]

// your code

// expected output: Array: ["Picard: even", "Riker: odd", etc...]

// solution:
const result = awayTeam.map((name, i) => `${name}: ${i % 2 === 0 ? 'even' : 'odd'}`)
console.log(result)

// ----------------------------------------------------------

// INTERMEDIATE EXERCISES

// ----------------------------------------------------------
// VIDEO EXAMPLES
// More we can do
const nums = [1, 2, 3, 4, 5]

const nums2 = nums.map(int, index, array => {
    console.log(int)
    console.log(index)
    console.log(array)
    return int
})

// ----------------------------------------------------------
// Create a multidimensional array of each item and its index in the original Array

const sci_fi_shows = ['Mandalorian', 'Enterprise', 'Firefly', 'Battlestar Galactica']

// expected output: Array [['Manedlorian', 0], ['Enterprise', 1], ['Firefly', 2], ['Battlestar Galactica', 3]]

// ----------------------------------------------------------
// for each item in this array, create a multidimensional array containing the entire original array

const numbers = [1, 2, 3, 4]

// expected output: Array [[1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4]]


// ----------------------------------------------------------

// REAL LIFE EXERCISES

// ----------------------------------------------------------

// One common thing we use map for in real life is to reformat objects to have a shape that is better for our purposes. For instance, we only care about the name and first three characters of the id for the races below. Use map to grab those values and create a new array with them.

var index = [
    {key: 1, sector: 10, t_score: 18, id: '1236n7e8', value: 'Klingon'},
    {key: 4, sector: 145, t_score: 12, id: '293847hs8', value: 'Minbari'},
    {key: 8, sector: 214, t_score: 5, id: '283hy8347', value: 'Cylon'},
    {key: 3, sector: 8346, t_score: 10, id: 'n9837ks857', value: 'Jawa'},
]
