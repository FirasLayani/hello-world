const readline = require('readline-sync')

const number = 7;
const name = readline.question('Enter your name: ')
let guess = readline.question('Enter a number: ')
guess = parseInt(guess)

console.log(`Hello, ${name}`)

if (number == guess) {
    console.log("That's my favourite number as well")
} else {
    console.log('We have different favourite numbers :(')
}

for (let i = 0; i < 5; i++) {
    console.log(`Hi! ${i}`)

}