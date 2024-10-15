const readline = require('readline-sync')

function cube_square_difference (a) {
    return(a**3 - a**2)
}

let n = readline.question('Enter number: ')
n = parseInt(n)
console.log(`${n**3} - ${n**2} = ${cube_square_difference(n)}`)