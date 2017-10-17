
/**
 * getFirstLetters()
 *
 * Write a function called `getFirstLetters` that takes an array of strings
 * and returns another array of strings with only the first letter
 *
 * Hint: you may want to invoke the `reverseString` function you wrote earlier
 * from the previous queestion
*/
function getFirstLetters(list) {
  var newList = []

  for (var i = 0; i < list.length; i ++) {
    newList.push(list[i].charAt(0))
  }
  console.log("returning wat: ", newList);
  return newList
}





//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~
let outputArray1 = getFirstLetters(['wow', 'milk', 'howdy'])
console.assert(outputArray1[0] === 'w')
console.assert(outputArray1[1] === 'm')
console.assert(outputArray1[2] === 'h')


let outputArray2 = getFirstLetters(['kayak', 'chair', 'jacket', 'nice!'])
console.assert(outputArray2[0] === 'k')
console.assert(outputArray2[1] === 'c')
console.assert(outputArray2[2] === 'j')
console.assert(outputArray2[3] === 'n')
