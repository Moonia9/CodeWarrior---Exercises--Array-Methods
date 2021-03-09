/* Complete the solution so that it reverses the string passed into it.
'world'  =>  'dlrow'*/

//Solution 1
function reverseString(str){
let array = str.split(""); //converting the string into an array
array.reverse()
return array.join(""); //converting the array back to a string
}
console.log(reverseString("World"));

//OR
const myReversedString = (string) => string.split("").reverse().join("");
console.log(myReversedString("Hello"));

//Solution 2
/* create an empty string that will hold the reversed string,
 loop through each character in the string and append it to the beginning of the new string.*/
function reverse(str){
    let reversedString = "";
    for(let character of str){
        reversedString = character + reversedString;
    }
    return reversedString;
} 
console.log(reverse("hello"));

//Solution 3
//Using the array.reduce() method
function aReversedString(str){
    //convert the string into an array
    const array = str.split("");
    //use the reduce method to convert the array to a reversed string
    const reverseAString = array.reduce((reversed, character) =>{
        return character + reversed
    }, "")
    return reverseAString;
}
console.log(aReversedString("Frida"));



