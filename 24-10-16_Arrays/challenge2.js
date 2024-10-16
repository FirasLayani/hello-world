// Ask the user to enter the names of three people they want
// to invite to a party and store them in a an array. After they
// have entered all three names, ask them if they want to add another.

// If they do, allow them to add more names until they
// answer ‘no’. When they answer ‘no’ , then display how
// many people they have invited to the party.

const readline = require('readline-sync')

const appendName = (names) => {
    let name = readline.question('Enter name: ')
    names.push(name)
    return names
}

let names = [];

// Run twice
for (let i=0; i<2; i++) {
    names = appendName(names)
}

//Run for the third time, then ask to continue
let continueAsking = true;
while (continueAsking == true) {
    names = appendName(names)
    let userInput = readline.question('Continue? (y or n): ')
    if (userInput !== 'y') {
        continueAsking = false;
    }
}
console.log(names,names.length)
