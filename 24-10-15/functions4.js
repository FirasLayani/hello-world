const readline = require('readline-sync')

let sentence = readline.question('Enter sentence: ')
let newSentence = ''
for (let character of sentence) {
    if (character != ' ') {
        newSentence += character
    }
}
console.log(newSentence.length)