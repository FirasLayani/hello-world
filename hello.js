const readline = require('readline-sync');

let age = readline.question('Enter your age: ')
age = Number(age)

const numberofyears = 5;
const futureage = age + numberofyears;
console.log(futureage)

if (futureage === 'NaN' ) {
    console.log('Error')
} else {
    console.log('asffsa')
}
console.log(`You will be ${age+10} years old in 10 years time`)
console.log(`in 20 years time you wil be ${age + 20} years old`)
console.log(`You will retire in ${67-age} years`)

