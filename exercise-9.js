/* Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

"found the needle at position " plus the index it found the needle, so:*/

let findTheNeedle = ['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'];

//should return "found the needle at position 5"

function findNeedle(haystack){
    let findMyNeedle = haystack.find((element) => element.includes("needle"))
    for(let i=0; i< haystack.length; i++){
        if(haystack[i] === "needle")
        return `found the ${findMyNeedle} at the position` + " " + i;
    }  
}
console.log(findNeedle(findTheNeedle));


//OR using indexOf()
const findMyANeedle = haystack => `found the needle at position` + " " + haystack.indexOf("needle");
console.log(findMyANeedle(findTheNeedle));