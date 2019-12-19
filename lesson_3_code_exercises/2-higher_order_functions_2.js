// ----------------------------------------------------------

// ADVANCED HIGHER ORDER FUNCTIONS EXAMPLE

// ----------------------------------------------------------

function greaterThan(n) {
    return m => m > n;
}

let greaterThanEight = greaterThan(8);
console.log(greaterThanEight(11));
// → true

// The syntax abobve can be tricky, but it is all ES6

// Equivalent to:
function greaterThan(n) {
    return function (m) {
        return m > n;
    }
}


// ----------------------------------------------------------

// ADVANCED HIGHER ORDER FUNCTIONS EXERCISE

// ----------------------------------------------------------

weapons_with_noises = [
    { weapon: 'Phaser', noise: 'Pew Pew' },
    { weapon: 'Blaster', noise: 'Pew Pew' },
    { weapon: 'Sonic Screwdriver', noise: 'shhhhh' },
    { weapon: 'Lightsaber', noise: 'zhoom zhoom' },
    { weapon: 'Noisy Cricket', noise: 'chirp' }
]

function fire(weapon, sound) {
    return
}

// let silencer = 

// -------------------------------------------------------






const weapons_cache = ['Phasers', 'Blasters', 'Sonic Screwdrivers', 'Lightsabers', 'Noisy Crickets', 'Photon Torpedos']
const ship_weapons_manifest = ['Phasers', 'Photon Torpedos', 'Pulse Cannons']
// have to use let because this value will change
let ship_arsenal = []

function add_to_arsenal(weapon, manifest) {
    // update arsenal
    arsenal = arsenal.concat(weapon) // functional equivalent of push
}

function check_manifest()

// ALTERNATE SYNTAX
// weapons.map(w => add_to_arsenal(w))

console.log(arsenal)
