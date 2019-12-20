// One important thing to note is that nested objects have to be declared as Immutable maps just like top level ones
// Otherwise, they will be stored as normal JS objects, which Immutable handles differently

// So this:
const current_show = Immutable.Map({
    title: 'Dr. Who',
    seasons: 11,
    current_season: 4,
    characters: {
        main: 'The Doctor',
        supporting: ['Dalek1']
    }
})

// Is not the same as this:
const current_show = Immutable.Map({
    title: 'Dr. Who',
    seasons: 11,
    current_season: 4,
    characters: Immutable.Map({
        main: 'The Doctor',
        supporting: List(['Dalek1'])
    })
})

// Lets think about how we could refactor our application state flow to use Immutable. 
// The original code is provided below, how might you re-write both the store object and updateStore function with Immutable?
// Rememberm if you need help, the docs should be the first place you look

let store = {
    user: {
        first_name: 'John',
        last_name: 'Doe'
    }
}

const updateStore = (store, newState) => {
    store = Object.assign(store, newState)
    render(root, store)
}


// Solution

let store = Immutable.Map({ 
    user: Immutable.Map({ 
        first_name: 'John', 
        last_name: 'Doe' 
    }), 
})

function updateStore(state, newState) {
    store = state.merge(newState)
    render(root, store)
}

updateStore(store, newState)
console.log(store.getIn(['user', 'name']))