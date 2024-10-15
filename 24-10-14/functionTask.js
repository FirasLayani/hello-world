//In your practice CodeSpace, could you write your own function that takes two arguments and returns their minimum?

function min (a,b) {
    if (a<b) {
        return a
    } else if (a>b) {
        return b
    } else {
        return a,b
    }
}

console.log(min(4,-1))