// Here is the code from the example text
// The workspace will not be able to show you the resulting HTML page, if you want to see it plug the code in here: https://jsfiddle.net/

const root = document.getElementById('root')

const Welcome = () => {
    return `Welcome to my Javascript Program!`
}

const App = () => {
    return `
        <h1>${Welcome()}<h1>
        <div> I EXIST! </div>
    `
}

const render = root => {
    root.innerHTML = App()
}

render(root)

// Add a new Menu component that takes in a show argument which is either true or false
// Show this content if show is true:
{/* <nav>
    <ul>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Login</li>
    </ul>
</nav> */}

// and this content if show is false:
{/* <nav>Menu</nav> */ }


// solution:
const Menu = (show) => {
    if(show) {
        return (`
                <nav>
                    <ul>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Login</li>
                    </ul>
                </nav>
            `)
   }
    return `<nav>Menu</nav>`
}
