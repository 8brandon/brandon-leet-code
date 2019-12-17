/**
 Given a word, you need to judge whether the usage of capitals in it is right or not.

We define the usage of capitals in a word to be right when one of the following cases holds:

    All letters in this word are capitals, like "USA".
    All letters in this word are not capitals, like "leetcode".
    Only the first letter in this word is capital, like "Google".

Otherwise, we define that this word doesn't use capitals in a right way.

 

Example 1:

Input: "USA"
Output: True

 

Example 2:

Input: "FlaG"
Output: False



Note: The input will be a non-empty word consisting of uppercase and lowercase latin letters.

* 
*/

/**Best solution */

var detectCapitalUse = function(word) {
  return (
    word === word.toLowerCase() ||
    word === word.toUpperCase() ||
    (word.slice(1) === word.slice(1).toLowerCase() &&
      word[0] === word[0].toUpperCase())
  );
};

/**
 * @param {string} word
 * @return {boolean}
 */

/**First Attempt, decent result, not as readable as above solution though */

var detectCapitalUse = function(word) {
  if (word[0] === word[0].toUpperCase()) {
    let firstLetterUpperCase = true;
    let allLettersUpperCase = true;
    for (let i = 1; i < word.length; i++) {
      const element = word[i];
      if (element === element.toUpperCase()) {
        firstLetterUpperCase = false;
      } else {
        allLettersUpperCase = false;
      }
    }
    if (firstLetterUpperCase || allLettersUpperCase) return true;
  }

  let allLettersLowerCase = true;
  for (let i = 0; i < word.length; i++) {
    const element2 = word[i];
    if (element2 !== element2.toLowerCase()) {
      allLettersLowerCase = false;
    }
  }
  if (allLettersLowerCase) {
    return true;
  } else {
    return false;
  }
};
