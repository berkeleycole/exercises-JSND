// ----------------------------------------------------------

// OBJECT DESTRUCTURING EXAMPLES

// ----------------------------------------------------------

const movie = {
    title: 'Superman and the Mole Men',
    year: 1951,
    producer: 'Barney A. Sarecky',
    desc: 'This adventure was the pilot for the original Adventures of Superman television series. The film follows Clark Kent and Lois Lane as they travel to a small town to write a story on the world`s deepest oil well. When they stumble across the titular creatures, Superman must save the day.',
    cast: {
        main: {role: 'Superman', actor: 'George Reeves'},
        supporting: [
            {role: 'Lois Lane', actor: 'Phyllis Coates'},
            {role: 'Mole-Man', actor: 'Billy Curtis'}
        ]
    }
}

// Simple Destructuring

// you could do this:
const title = movie.title
const year = movie.year

// but with destructuring this can be shortened to:
const { title, year } = movie

// Then we can go more nested
const main_character = movie.cast.main.role
const main_actor = movie.cast.main.actor

// With destructuring, this can be shortened to:
const { role, actor } = movie.cast.main

// But what if we wanted to the keep the new names of the variables?
const { role: main_character, actor: main_actor  } = movie.cast.main

// ----------------------------------------------------------

// OBJECT DESTRUCTURING EXERCISES

// ----------------------------------------------------------

const state = {
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
}

// Given the state object above, find the following:

// Person's name and role
const { name, role } = state

// Ship's name
const { name } = state.ship.name


// favorite thing item and all details
const { item } = state.favorite_thing.item
const { type } = state.favorite_thing.details.type
