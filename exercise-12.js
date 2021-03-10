/* Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

If the input array is empty or null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].*/
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];

function countPositivesSumNegatives(input) {
    if(input === null || input.length === 0)
    return [];
    let arrPositiveSum = 0;
    let arrNegativeSum = 0;
    for(let i=0; i<input.length; i++){
        if(input[i] > 0){
            arrPositiveSum ++; //arrPositiveSum = arrPositiveSum + 1;
        } else if(input[i] < 0){
            arrNegativeSum += input[i]
            }   
    }  
    return [arrPositiveSum, arrNegativeSum];
    
}
console.log(countPositivesSumNegatives(array));