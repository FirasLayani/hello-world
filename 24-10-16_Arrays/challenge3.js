// Write a function that sums the total of an array of integers that is passed in as an argument. The total should be returned.

function sum(arr){
    let total = 0;
    arr.forEach(element => {
        total+= element
    });
    return total;
}

let nums = [1,2,3]

console.log(sum(nums))