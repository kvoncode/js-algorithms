// SCM - Smallest Common Multiple
// GCD - Greatest Common Divisor
// Task:
// - passing [a, b] to <smallestCommons>
// - calculate SCM of a range [a, b] if a < b or [b, a] if b < a
'use strict'

function compare(a, b) {
    return a - b;
}

function gcd(a, b) {

    if(a < b) {
        [a, b] = [b, a] //swap
    }

    while(b) {
        a %= b;
        [a, b] = [b, a];
    }

    return a;
}

function lcm(a, b) {
    return a * b / gcd(a, b);
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

    // -----------------------------------------------------

    let lcmArray = [...range];
	console.log('TCL: smallestCommons -> lcmArray', lcmArray)

    for (let i = 0; i < lcmArray.length - 1; i++) {
        lcmArray[i + 1] = lcm(lcmArray[i], lcmArray[i + 1]);
    }
    console.log('TCL: smallestCommons -> lcmArray', lcmArray)


    let answer = lcmArray[lcmArray.length - 1];


    console.log('TCL: smallestCommons -> answer', answer)

    console.groupEnd("smallestCommons()");
    return answer;
}


smallestCommons(
    [5, 1]);