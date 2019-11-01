// Given a string S, return the "reversed" string where all characters that are not a letter stay in the same place, and all letters reverse their positions.

// Example 1:

// Input: "ab-cd"
// Output: "dc-ba"
// Example 2:

// Input: "a-bC-dEf-ghIj"
// Output: "j-Ih-gfE-dCba"
// Example 3:

// Input: "Test1ng-Leet=code-Q!"
// Output: "Qedo1ct-eeLg=ntse-T!"

// Note:

// S.length <= 100
// 33 <= S[i].ASCIIcode <= 122
// S doesn't contain \ or "

/**
 * @param {string} S
 * @return {string}
 */

function isLetter(params) {
  return /^[a-zA-Z]+$/.test(params);
}

var reverseOnlyLetters = function(S) {
  let start = 0;
  let end = S.length - 1;
  let strArr = S.split("");

  while (end > start) {
    const charA = strArr[start];
    const charB = strArr[end];
    const charALetterCheck = isLetter(charA);
    const charBLetterCheck = isLetter(charB);
    if (charALetterCheck && charBLetterCheck) {
      strArr[start] = charB;
      strArr[end] = charA;
      start++;
      end--;
    }
    if (!isLetter(charA)) {
      start++;
    }
    if (!isLetter(charB)) {
      end--;
    }
  }
  return strArr.join("");
};
