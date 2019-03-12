'use strict'

function compare(a, b) {
    return a - b;
}

function gcd(a, b) {
    return 1;
}

// gcd(a, b, c) = gcd(gcd(a, b), c)
function gcdArray(arr) {
    return 1;
}   

function smallestCommons(arr) {

    console.group("smallestCommons()");
    // sort array
    let sortedArray = [...arr];
    sortedArray.sort(compare);
    console.log('TCL: smallestCommons -> sortedArray', sortedArray)

    let range = [];
    
    for (let i = sortedArray[0]; i <= sortedArray[1]; i++) {
        range.push(i);        
    }
    console.log('TCL: smallestCommons -> range', range)

    // calculate gcd of the range
    let arrayGCD = gcdArray(range);
    console.log('TCL: smallestCommons -> arrayGCD', arrayGCD)
    
    let divided = [...range];
	console.log('TCL: smallestCommons -> divided', divided)
    let answer = 1;
    
    for (let i = 0; i < range.length; i++) {
        divided[i] /= arrayGCD;
        answer *= divided[i];
    }
    console.log('TCL: smallestCommons -> divided', divided)

    console.log('TCL: smallestCommons -> answer', answer)
    
   
    console.groupEnd("smallestCommons()");
}


smallestCommons(
    [23, 18]);