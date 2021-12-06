function countLetters(letter, word) {
    let counter = 0;
    for (let each_letter of word) {
        if (each_letter === letter) {
            counter++;
        }
    }
    
    return counter;
}
 
let resultat = countLetters("o", "Bonjour tout le monde !");