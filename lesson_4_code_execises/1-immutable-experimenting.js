// ----------------------------------------------------------

// IMMUTABLE JS EXAMPLES

// ----------------------------------------------------------

// run this in a browser
<script src="https://cdnjs.cloudflare.com/ajax/libs/immutable/3.8.2/immutable.min.js"></script>

// Getting and Setting values

// this is how we declare an immutable Object
const map1 = Immutable.Map({ 
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

const map2 = map1.set('b', 50);
map1.get('b'); // 2
map2.get('b'); // 50
console.log(map2.get('b'))

// equality check
map1.equals(map2); // false
console.log(map1.equals(map2))

// Use with ordinary objects
const state1 = Immutable.Map({ a: 1, b: 2, c: 3, d: 4 });
const state2 = Immutable.Map({ c: 10, a: 20, t: 30 });
const obj = { d: 100, o: 200, g: 300 };
const map3 = state1.merge(state2, obj);
console.log(map3)

// If you open the returned object, you can see that it isn't an ordinary object
// you'll find all the properties under "entries"

// Use with ordinary arrays
// An immutable array is declared like this:
const numbers = List([1, 2, 3]);

//But Immutable can also work with plain JS arrays
const otherNumbers = [4, 5, 6]

// ----------------------------------------------------------

// IMMUTABLE JS EXERCISE

// ----------------------------------------------------------

// Create some code that would allow you to do the merge below
// Use a mix of JS arrays and Immutable arrays, when you console log the answer, you will see a difference

const favorite_things = favorite_foods.concat(favorite_shows, favorite_colors);
console.log(favorite_things)
