
function randomNumber() {
    let min = 1;
    let max = 10;
    console.log(Math.floor(Math.random() * (max - min + 1)) + min);
}
module.exports = randomNumber();
