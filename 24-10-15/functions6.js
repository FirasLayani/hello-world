const readline = require('readline-sync')

let weekend = readline.question('Is it the weekend? (true or false): ')
let number = readline.questionInt('Enter number of nuts: ')

function nutsParty (weekend, number) {
    if (weekend == true) {
        if (number >= 40) {
            return true
        } else {
            return false
        }
    } else {
        if (number >= 40 && number <= 60) {
            return true
        } else {
            return false
        }
    }
}

console.log(nutsParty(weekend, number))