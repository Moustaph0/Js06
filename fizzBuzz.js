
function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        else if (i % 3 == 0) {console.log("Fizz");}
        else if (i % 5 == 0) {console.log("Buzz");}
        if (i % 3 == 0 && i % 5== 0) {console.log("FizzBuzz");}
        else console.log(i);
    }
}
fizzBuzz();
module.exports = fizzBuzz;
