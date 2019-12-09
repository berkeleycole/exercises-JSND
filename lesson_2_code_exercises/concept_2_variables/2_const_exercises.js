// ----------------------------------------------------------

// VIDEO EXAMPLES

// ----------------------------------------------------------

const current_book = 'The Time Machine'

const book_details = {
    title: 'The Time Machine',
    author: 'H. G. Wells',
    total_pages: 84,
    current_page: 42
}

const library = ['Dune', 'Nineteen Eighty-Four', 'Ender`s Game', 'Hyperion', 'Fahrenheit 451']

current_book = 'Stranger in a Strange Land'
// results in error, can't edit const value

book_details = {
    title: 'I, Robot',
    author: 'Isaac Asimov',
    total_pages: 253,
    current_page: 21
}
// results in error, book_details is read-only

book_details.current_page = 75
// this works! We can update values within a cost object

library = ['Dune', 'Nineteen Eighty-Four']
// results in error, can't redeclare library

library.concat('The Hitchiker`s Guide to the Galaxy')
// this works! We can update items in the array or add to it
