// ----------------------------------------------------------

// OBJECT KEYS EXAMPLES

// ----------------------------------------------------------

const character = {
    id: '12mn18udcbv9823',
    name: 'Chewbacca',
    race: 'Wookie',
    planet: 'Kashyyyk',
    job: 'First Mate'
};

console.log(Object.keys(character));
// expected output: Array ["id","name","race","planet","job"]



// OBJECT KEYS EXERCISES

// ----------------------------------------------------------

// Use Object.keys with the map method to print "This character has a(n) [property-name]" for each property


// Solution
const keys = Object.keys(character)

keys.map(key => {
    console.log(`This character has a(n) ${key}`)
    return `This character has a(n) ${key}`
})