/**
 * shortiesOnly()
 *
 * Write a function called `shortiesOnly`.
 * It should as input an array of strings,
 * and it should return a new array containing
 * only those strings with 4 or fewer characters.
 *
*/

function shortiesOnly(allNames) {
  var shortList = []

  for ( var i = 0; i < allNames.length; i ++) {
    if (allNames[i].length <= 4) {
      shortList.push(allNames[i])
    }

  }
  // console.log();
  return shortList
}

// console.log( shortList.length === 4);
//
// // checks to see that 'Sam' is INCUDED in the output array.
// console.log( shortList.indexOf('Sam') >= 0);
//
// // checks to see that 'Fred' is INCUDED in the output array.
// console.log( shortList.indexOf('Fred') >= 0);
//
// // checks to see that WAYNE is NOT in the output array.
// console.log( shortList.indexOf('Wayne') === -1);




//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~

var allNames = [
    "Ed",
    "Tom",
    "Elfrid",
    "Sam",
    "Bartholomeu",
    "Wayne",
    "Theodore",
    "Ingrid",
    "Fred",
    "Yvette"
]

var shortList = shortiesOnly(allNames)

console.assert( shortList.length === 4 )


// checks to see that 'Sam' is INCUDED in the output array.
console.assert( shortList.indexOf('Sam') >= 0 )

// checks to see that 'Fred' is INCUDED in the output array.
console.assert( shortList.indexOf('Fred') >= 0 )

// checks to see that WAYNE is NOT in the output array.
console.assert( shortList.indexOf('Wayne') === -1 )
