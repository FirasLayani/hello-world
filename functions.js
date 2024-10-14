const readline = require('readline-sync')
//const num = readline.question('Enter number: ')

function multiply_nums(a,b,num) {
    console.log(`${a}*${b}*${num} = ${a*b*num}`)
}

//multiply_nums(1,2,num)

const triple = n => n*3

console.log(triple(6))