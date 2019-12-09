// var vs let

var cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
var text = "";

for (var i = 0; i < cars.length; i++) {
  text += cars[i] + "<br>";
}

console.log(i);
// remembers i from the loop

for (let x = 0; x < cars.length; x++) {
  text += cars[x] + "<br>";
}

console.log(x);
// no response, because there is no x


// --------------------------------------------------------


if(true) {
    let x = "I exist - let"
}

if(true) {
    y = "I exist - var"
}

console.log(x); // error - x is not defined
console.log(y); // I exist - var
