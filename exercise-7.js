/*Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9. */
let arr = [1, 2, 2];
function squareSum(numbers){
    let sum = 0;
    for(let i=0; i<numbers.length; i++){
        sum = sum + Math.pow(numbers[i], 2);
    }
    return sum;
}
console.log(squareSum(arr));

//OR
function squareSums(num){
    let result = 0;
    for(let i=0; i< num.length; i++){
        result = result + (num[i] * num[i]);
    }
    return result;
}
console.log(squareSum(arr));