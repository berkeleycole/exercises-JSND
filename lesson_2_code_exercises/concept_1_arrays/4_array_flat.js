// ----------------------------------------------------------

// FLAT EXERCISES

// ----------------------------------------------------------

// For the video
var nested_arr = [1, 2, [3, 4, [5, 6]]];
arr.flat();
// [1, 2, 3, 4, [5, 6]]

var more_nested = [1, 2, [3, 4, [5, 6]]];
more_nested.flat(2);
// [1, 2, 3, 4, 5, 6]

// ----------------------------------------------------------

// Exercises

// This short list of some marvel characters is abitrarily nested. Experiment with the effect of flattening to various depths.

const characters = [
    ['Starlord', 'Gamora', 'Groot'],
    ['Dr. Strange', ['Captain America', 'Bucky Barnes'], ['Thor', 'Hulk', ['Loki']], 'Thanos']
    ['Iron Man', 'Ultron'],
    ['Spider Man', ['Venom']],
    ['Professor X', 'Wolverine', 'Quicksilver', ['Magneto']]
]
