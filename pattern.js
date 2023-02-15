function pattern(n, c) { // n = niveaux hiérarchiques; c = caractère utilisé
    // Nb de colonnes =  Nb d'espaces + nb de caractères "*"
    // Chaque nouvelle ligne gagne 2 "*"
    let nbColonnes = 1 + 2 * (n - 1), nbSpaceChar = nbColonnes - 1, output = "";
    for (let lineNb = 0, nbTextChar = 1;
        lineNb < n;
        lineNb++, nbSpaceChar -= 2, nbTextChar += 2) {
            output = output.concat(" ".repeat(nbSpaceChar)).concat(c.repeat(nbTextChar));
            output = (lineNb < n - 1) ? output.concat("\n") : output;
    }
    return output;
}
console.log(pattern(4, "*"));

module.exports = pattern;

function pattern(){
    for(let i=1; i < 6; i++) {
        for(let j=1; j <= i; j++) {
            process.stdout.write(' *');
        }
        process.stdout.write('\n');
    }
}
module.exports = pattern();
