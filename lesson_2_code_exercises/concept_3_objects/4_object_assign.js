// ----------------------------------------------------------

// OBJECT ASSIGN EXAMPLES

// ----------------------------------------------------------

let state = {
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

const incoming_state = {
    name: 'Mal',
    role: 'Captain',
    favorite_thing: {
        item: "Not complicated"
    },
    history: ["Browncoat sergeant"]
}

state = Object.assign(state, new_state);
// target, source

// Resulting object
// state = { 
//     name: "Mal", 
//     ship: { 
//         name: "Serenity", 
//         class: "Firefly" 
//     }, 
//     role: "Captain", 
//     favorite_thing: { 
//         item: "Not complicated" 
//     }, 
//     history: ["Browncoat sergeant"] 
// } 


// ----------------------------------------------------------

// OBJECT ASSIGN EXERCISES

// ----------------------------------------------------------

// Merge another character into this state. Keep at least one value and change at least one value
