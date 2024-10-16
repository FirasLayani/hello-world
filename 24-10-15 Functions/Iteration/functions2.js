const readline = require('readline-sync')

function averageValue(a,b,c,d) {
    let average = (a+b+c+d)/4
    return average
}

const numbers = []
for (let i=0;i<4;i++) {
    let n = readline.question('Enter number: ')
    n = parseInt(n)
    numbers.push(n)
}
console.log(`Average of ${numbers} is ${averageValue(numbers[0],numbers[1],numbers[2],numbers[3])}`)
