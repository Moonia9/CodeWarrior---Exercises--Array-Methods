/*Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []
You can assume that all values are integers. Do not mutate the input array/list. */
const array = [1,2,3,4,5];
function invert(array){
    return array
                .map((num) => num * -1);
}
console.log(invert(array));

//OR

function invertNum(arr){
    let newArr = [];
    for(let i=0; i < arr.length; i++){
        if(arr[i] === 0){
        } else {
            newArr.push(arr[i] * -1)
        }
    }
    return newArr;
}
console.log(invertNum(array));