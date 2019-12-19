// ----------------------------------------------------------

// OBJECT FREEZE EXAMPLES

// ----------------------------------------------------------

const current_show = {
    title: 'Dr. Who',
    seasons: 11,
    current_season: 4
}

// as a const, we can do this:
current_show.current_season = 5

// but if we freeze the object
Object.freeze(current_show);

obj.current_season = 5;
// Throws an error and current_season remains unchanged



// OBJECT FREEZE EXERCISE

// ----------------------------------------------------------

// Create your own object and freeze it!