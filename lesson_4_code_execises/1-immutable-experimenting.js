// ----------------------------------------------------------

// IMMUTABLE JS EXAMPLES

// ----------------------------------------------------------

// run this in a browser
<script src="https://cdnjs.cloudflare.com/ajax/libs/immutable/3.8.2/immutable.min.js"></script>

// there is also a great Immutable.js sandbox found here: https://codesandbox.io/s/immutablejs-96qzv

// PART 1. Getting and Setting values

// this is how we declare an immutable Object
const map1 = Immutable.Map({ a: 20, b: 2, c: 100});

// this is how we read a value from an immutable object
map1.get('b'); // 2

// this is how we update a value in an immutable object
// remember that we have to use a new variable name for the new object that is returned
const map2 = map1.set('b', 50);

// The toObject() method converts the Immutable Map into a normal JS object so we can read it -- see the difference here:
console.log(map2)
console.log(map2.toObject())

// we can add new properties in the same way we edit existing ones:
const map3 = map1.set('d', 4);
console.log(map3.toObject())

// Now we can compare the two resulting objects and see that map1 is totally unchanged
map1.get('b'); // 2
map2.get('b'); // 50
console.log(map1.get('b'))
console.log(map2.get('b'))

// We can even compare the two to see that they are not the same
map1.equals(map2); // false
console.log(map1.equals(map2))

// YOUR TURN ----------------------------------
// Given the following object, make an update that turns name to 'Mal' and role to 'Captain'

const state1 = Immutable.Map(const map1 = Immutable.Map({ 
    name: 'Wash',
    ship: {
        name: 'Serenity',
        class: 'Firefly'
    },
    role: 'Pilot',
    favorite_thing: {
        item: "Toy",
        details: {
            type: 'Toy Tyrannosaurus Rex'
        }
    }
});

// SOLUTION
// You can do this:
const state2 = state1.set('name', 'Mal')
const state3 = state2.set('role', 'Captain')

// But Immutable also allows you to do this:
const state2 = state1.set('name', 'Mal').set('role', 'Captain')


// -----------------------------------------------------------------
// -----------------------------------------------------------------


// PART 2. More with objects

// This is a normal javascript object. It is very different from an Immutable Map
const obj = { d: 100, o: 200, g: 300 };

// But thankfully, normal javascript objects are still valid in Immutable
// Notice that here we can merge a normal object into an Immutable Map
const map3 = state1.merge(state2, obj);

// But also notice how different the two are when we console log map3 
console.log(map3)

// YOUR TURN --------------------------------------------------------------
// Can you locate the contents of our variable 'obj' inside the Immutable Map map3?
console.log(map3)

// SOLUTION --------------------------------------------------------------
// If you open the Immutable map3 in inspect element, you can see that it isn't an ordinary object
// you'll find all the properties under "entries"


// -----------------------------------------------------------------
// -----------------------------------------------------------------

// PART 3. Arrays and Immutable Lists

// An immutable array is called a LIST, and is declared like this:
const numbers = List([1, 2, 3]);

// We can turn normal JS arrays into Immutable Lists like this:
const plainArray = [ 1, 2, 3, 4 ]
const listFromPlainArray = List(plainArray)
console.log(listFromPlainArray)

// we can declare a new Immutable List
const myList = List([ 'stuffed t-rex' ]);
console.log(Array.from(myList));

// and we can use the set method again to add or update values. Just provide the index first and value second
const myList1 = myList.set(1, 'toy lightsaber');
console.log(Array.from(myList1)); // [ "stuffed t-rex", "toy lightsaber" ]

// but, in order to not need to supply the index, we can also add new values with push
const myList2 = myList1.push('Picard bobblehead')
console.log(Array.from(myList2));

// YOUR TURN --------------------------------------------------------------------------

// 1. Turn the following array into an Immutable array
// 2. Add a character

// STRETCH CHALLENGE ----------------------------------------------------------------------
// 3. Remove Jabba the Hut from the Immutable List
// look up in the documentation how you would remove a character from the Immutable list

const characters = [
  {
    name: 'Marvin the Paranoid Android',
    role: 'First Mate',
    universe: 'Hitchhikers Guide to the Galaxy',
    weapon: 'severe depression',
    powerLevel: 1000
  },
  {
    name: 'Jabba the Hut',
    role: 'villain',
    universe: 'Star Wars',
    weapon: 'henchmen',
    powerLevel:  200
  },
  {
    name: 'Zoë Alleyne Washburne',
    role: 'First Mate',
    universe: 'Firefly',
    weapon: 'Winchester Model 1892 rifle',
    powerLevel: 160
  },
  {
    name: 'Peter Venkman',
    role: 'Ghostbuster',
    universe: 'Ghostbusters',
    weapon: 'proton pack',
    powerLevel: 120
  },
  {
    name: 'Kathryn Janeway',
    role: 'Captain',
    universe: 'Star Trek',
    weapon: 'Wit',
    power_level: 140
  }
]

// SOLUTION ---------------------------------------------------------

const immutableCharacters = List(characters).push({
    name: 'Yoda',
    role: 'Jedi Master',
    universe: 'Star Wars',
    weapon: 'The Force',
    powerLevel: 900
})
console.log(Array.from(immutableCharacters))

// STRETCH SOLUTION
const withoutJabba = immutableCharacters.delete(1)
console.log(Array.from(withoutJabba))

// or, all in one line, you could do:
const allatonce = List(characters).push({
    name: 'Yoda',
    role: 'Jedi Master',
    universe: 'Star Wars',
    weapon: 'The Force',
    powerLevel: 900
}).delete(1)
console.log(Array.from(allatonce))


