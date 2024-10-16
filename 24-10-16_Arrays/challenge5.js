// Create a function called capitaliseArrayElements that takes an array of strings as an argument. 
// The function should capitalise each element of the array and return a new array with all elements capitalized.
// (You can use the toUpperCase() method to carry out the capitalisation!)

function capitaliseArrayElements(array){
    return array.map(item => item[0].toUpperCase() + item.slice(1)) // First letter capitalised + rest of string (index 1 to end, by not specifying end index)
}

const strings = ['hi', 'hello', 'Pizza']

console.log(capitaliseArrayElements(strings), strings)