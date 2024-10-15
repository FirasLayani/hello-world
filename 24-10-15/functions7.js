const readline = require('readline-sync')

const is_prime = x => {
    if (x>=1) {
        for (let i=2;i<x;i++) {
            if (x%i==0) {
                return false
                break
            }
        }
        return true

    } else {
        return false
    }
}

number = readline.questionInt('Enter number: ')
console.log(is_prime(number))