const readline = require('readline-sync')

mapping = {'true': 'false',
    'false':'true'
}

function flip(bool) {
    if (bool != 'true' && bool != 'false') {
        return 'Boolean expected'
    } else {
        return mapping[userInput]
    }
} 

userInput = readline.question('Enter boolean value: ')
console.log(flip(userInput))