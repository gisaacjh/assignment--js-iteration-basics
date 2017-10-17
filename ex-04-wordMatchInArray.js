
/**
 * wordMatchInArray()
 *
 * Write a function called `wordMatchInArray` that takes 2 inputs: a string, and an array.
 * The function should return a boolean value if that word is found in the array.
 *
*/



function wordMatchInArray(word, sampleWordsArray) {

  for(var i = 0; i < sampleWordsArray.length; i++) {
    if (string === sampleWordsArray[i]) {
      return true
    }
  }
  return false
}


  // console.log(wordMatchInArray('girls', sampleWordsArray) === true);
  // console.log(wordMatchInArray('fun', sampleWordsArray) === true);
  // console.log(wordMatchInArray('boys', sampleWordsArray) === false);
  //
  //
  // console.log(wordMatchInArray('boys', sampleWordsArray2) === true);
  // console.log(wordMatchInArray('girls', sampleWordsArray2) === false);







//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~
var sampleWordsArray = ["because", "girls", "just", "want", "to", "have", "fun"]

console.assert(wordMatchInArray('girls', sampleWordsArray) === true)
console.assert(wordMatchInArray('fun', sampleWordsArray) === true)
console.assert(wordMatchInArray('boys', sampleWordsArray) === false)

var sampleWordsArray2 = ["boys", "there", "is", "no", "way", "out", "of", "here"]
console.assert(wordMatchInArray('boys', sampleWordsArray2) === true)
console.assert(wordMatchInArray('girls', sampleWordsArray2) === false)
