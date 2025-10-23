//funktion för första delen av uppgiften, 3a
function charRemove(character, text) {
    let newWord = "";
    for (let i = 0; i < text.length; i++) {
        if (text[i] !== character) {
            newWord += text[i];
        }
    }   
    return newWord;
}
//funktion för andra delen av uppgiften, 3b
function deadOrAlive(cat) {
    let status = "";
    cat.alive = Math.random() < 0.5;
    if(cat.alive) {
        status = "alive";
}
    else {
        status = "dead";
    }
    return status;
}