// ----------------------------------------------------------

// OBJECT FREEZE EXAMPLES

// ----------------------------------------------------------

// Note here that we must run Javascript in strict mode in order to see the error correctly
// Node runs in strict mode automatically, as do many online code editors, so if you are running these examples in the terminal or online you probably won't need this
// If you want to learn more about strict mode, here is a good article: https://www.geeksforgeeks.org/strict-mode-javascript/

"use strict";

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
// Note here that in some environments, no error was thrown and it just failed silently - so watch out!
// We will explore another (and more reliable) way to get immutable values in Javascript in the next lesson



// OBJECT FREEZE EXERCISE

// ----------------------------------------------------------

// Create your own object and freeze it!
