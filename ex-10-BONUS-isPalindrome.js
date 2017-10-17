
/**
 * isPalindrome()
 *
 * Write a function called `isPalindrome` that sees if the word
 * is equal when spelled same backward as it is forward
 *
 * Hint: you may want to invoke the `reverseString` function you wrote earlier
 * from the previous queestion
*/

function isPalindrome(word) {
  var spelled = word.split("")
  var reverse = spelled.reverse()

  for (var i = 0; i < word.lenght; i++) {
    if (word[i] === reverse) {
     reverse.join("")
     return true
  } else {
    return false
  }

}

// console.log( isPalindrome('wow'));
// console.log( isPalindrome('milk'));
// console.log( isPalindrome('howdy'));
// console.log( isPalindrome('kayak'));
// console.log( isPalindrome('tacocat'));
// console.log( isPalindrome('1201411'));
// console.log( isPalindrome('13100131'));


//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~
console.assert( isPalindrome('wow') === true)
console.assert( isPalindrome('milk') === false)
console.assert( isPalindrome('howdy') === false)
console.assert( isPalindrome('kayak') === true)
console.assert( isPalindrome('tacocat') === true)
console.assert( isPalindrome('1201411') === false)
console.assert( isPalindrome('13100131') === true)
