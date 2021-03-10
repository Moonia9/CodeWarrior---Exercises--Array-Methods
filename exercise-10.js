/*You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0. */
 let array = [1,-4,7,12]; 
function positiveSum(arr){
    let arraySum = 0;
    for(let i=0; i < arr.length; i++){
       if(arr[i] > 0){
           arraySum += arr[i];
    } 
}
    return arraySum;
}

//OR using Chaining
function positiveSum(arr){
    return arr
            .filter((element) => element > 0)
            .reduce((element1, element2) => element1 + element2)
}

console.log(positiveSum(array));