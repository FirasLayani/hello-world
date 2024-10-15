const readline = require('readline-sync')

const doubleChar = string => {
    let newString = ''
    for (let character of string) {
        for (let i=0;i<2;i++) {
            newString += character
        }
    }
    return newString
}

let input = readline.question('Enter string: ')
console.log(doubleChar(input))
