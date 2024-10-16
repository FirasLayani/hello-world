const readline = require('readline-sync')

const highest = (a,b,c) => {
    if (a>b && a>c) {
        return a
    } else if (b>a && b>c) {
        return b
    } else if (c>a && c>b) {
        return c
    } else {
        return null
    }
}
let n1 = readline.questionInt('Enter number: ')
let n2 = readline.questionInt('Enter number: ')
let n3 = readline.questionInt('Enter number: ')
console.log(highest(n1,n2,n3))