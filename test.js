// Using .split()
let words = 'A few random words';

words = words.split(' ').reverse().join(' ')

console.log(words)

// Using .reverse() and .join()
let days = 'Monday, Tuesday, Wednesday, Thursday, Friday'
days = days.split(', ')
console.log(days)
console.log(days.reverse().join(', '))