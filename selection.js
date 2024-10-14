const readline = require('readline-sync')
const num = readline.question('enter a number: ')

if(num > 0 ){
    console.log('positive')
} else if (num == 0) { 
   console.log('zero')
} else {
    console.log('negative')
}