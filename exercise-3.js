/* You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.*/

function positiveSum(arr){
    let total = 0;
    for(let i=0; i< arr.length; i++){
        if(arr[i] > 0){
            total = total + arr[i];
        }
    }
    return total;
}
console.log(positiveSum([1,-4,7,12])); //20

//OR
function posSum(array){
    return array
                .filter((num => num >= 0))
                .reduce((accumulator, currentValue) => accumulator + currentValue);
}
console.log(posSum([1,-4,7,12]));