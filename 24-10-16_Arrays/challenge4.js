// Create a function that takes an array of numbers as an argument and prints out each number in the array multiplied by 2.

function multiply2(array){
    let newArray = array.map(number => number*2)
    return newArray
}

let numbers = [1,2,3,10,20]

console.log(multiply2(numbers))
