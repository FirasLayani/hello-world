// Create an initial array of two foods, stored as strings.
// Ask the user to input their favourite. Add this to the end of the list and output it.

const readline = require('readline-sync')

const foods = ['pasta', 'pizza'];

const favourite = readline.question('Enter favourite food: ')
foods.push(favourite)
console.log(foods)