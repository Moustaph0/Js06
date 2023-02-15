
function pattern(){
    for(let i=1; i < 6; i++) {
        for(let j=1; j <= i; j++) {
            console.log(' *');
        }
            console.log('\n');
    }
}
pattern();
module.exports = pattern;
