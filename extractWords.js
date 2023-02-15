str = "Voici l'exemple de la chaines";
function extractWords(chaine) {
    const container = (chaine.split(" "));
    console.log(container);
}
extractWords(str);
module.exports = extractWords;
