// function isPalindrome(word) {
//     if (word === word.split('').reverse().join('')) {
//         return true
//     } else {
//         return false
//     }
// }

function isPalindrome(word) {
    return (word === word.split('').reverse().join(''))
}

console.log(isPalindrome('racecar'))
console.log(isPalindrome('hi'))

/* CONVERT function:
Turn string into array with each word, separating by a space ' '
Capitalise each word by making the first letter uppercase
Join together all words by a space
*/

const convert = string => {
    return string.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ')
}

console.log(convert('I came, I saw, I conquered'))