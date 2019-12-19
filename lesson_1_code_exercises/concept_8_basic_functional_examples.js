
// -----------------------------------------------------------------
// Exercise 1

// Write a pure function that prints "good afternoon" if its afternoon and "good morning" any other time of the day

// hint - this will help with time of day: new Date().getHours()

// solution
function sayHello() {
    const time = new Date().getHours()
    if(time > 12 && time < 17) {
        return "Good Afternoon"
    } 

    return "Good Morning!"
}


// -----------------------------------------------------------------
// Exercise 2

// Write a pure function that takes in a number and returns an array of items counting down from that number to zero


// solution
// I'm including a for loop here because this course hasn't covered anything else, I know it isn't functional :P
// A student could use recursion for this as well

function countDown(startNum) {
    let countDownArray = []
    for(let i = startNum; i > 0; i-- ){
        countDownArray.push(i)
    }
    return countDownArray
}


