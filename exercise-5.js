/*Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined */

let array = [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true];


function countSheeps(arrayOfSheeps){
    let num = 0;
    for(i=0; i < arrayOfSheeps.length; i++){
        if(arrayOfSheeps[i]){
            num = num + 1;
        }
    }
    return num;
}
console.log(countSheeps(array)); 

//OR
function countTheSheeps(arr){
   return arr.filter(Boolean).length

}
console.log(countTheSheeps(array));

/*The filter(Boolean) step does the following:

1. Passes each item in the array to the Boolean() object
2. The Boolean() object coerces each item to true or false depending on whether it's truthy or falsy
3. If the item is truthy, we keep it */

//Rewriting the .filter(Boolean)

function countSheep(array){
    return array
                .filter(Boolean)
                .length
}
console.log(countSheep(array));


function countShh(arr){

    return arr.reduce((total, sheep) => {
        if(!sheep) return total;
        /*if(sheep)*/ return total + sheep;

    },0);
             
}
console.log(countShh(array));

function countShh1(arr){

    return arr.reduce((total, sheep) => total + sheep,0);
             
}
console.log(countShh1(array));