const readline = require('readline-sync')

function carsNeeded(n) {
    if (n==0) {
        return 0
    } else if (n%5 == 0) {
        return Math.floor(n/5)
    } else {
        return Math.floor(n/5)+1
    }

}

n = readline.questionInt('Enter number: ')
console.log(carsNeeded(n))