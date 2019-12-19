// ----------------------------------------------------------

// HIGHER ORDER FUNCTIONS

// ----------------------------------------------------------

const weapons = ['Phaser', 'Blaster', 'Sonic Screwdriver', 'Lightsaber', 'Noisy Cricket']
let arsenal = []
// have to use let because this value will change

function add_to_arsenal(weapon) {
    arsenal = arsenal.concat(weapon)
    // update arsenal
}

weapons.map(add_to_arsenal)

// ALTERNATE SYNTAX
// weapons.map(w => add_to_arsenal(w))

console.log(arsenal)

function greaterThan(n) {
  return m => m > n;
}
let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));
// → true


weapons_with_noises = [
    {weapon: 'Phaser', noise: 'Pew Pew'},
    {weapon: 'Blaster', noise: 'Pew Pew'},
    {weapon: 'Sonic Screwdriver', noise: 'Pew Pew'},
    {weapon: 'Lightsaber', noise: 'Pew Pew'},
    {weapon: 'Noisy Cricket', noise: 'Pew Pew'}
]
