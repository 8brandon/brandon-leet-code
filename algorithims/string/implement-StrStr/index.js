/**
 * Implement strStr().

Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Example 1:

Input: haystack = "hello", needle = "ll"
Output: 2
Example 2:

Input: haystack = "aaaaa", needle = "bba"
Output: -1
Clarification:

What should we return when needle is an empty string? This is a great question to ask during an interview.

For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf
 */

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if (needle.length === 0) return 0;
  if (haystack.length < needle.length) return -1;

  for (let i = 0; i < haystack.length; i++) {
    const element = haystack[i];
    console.log("TCL: strStr ->  === needle[0]", element === needle[0]);

    if (element === needle[0]) {
      let tempi = i + 1;
      for (let i = 1; i < needle.length + 1; i++) {
        const element2 = needle[i];
        // console.log("TCL: strStr -> element2", element2);
        // console.log("TCL: strStr -> haystack[tempi]", haystack[tempi]);

        if (haystack[tempi] !== element2) {
          // console.log("in the negation");

          break;
        }
        // console.log("i got to the increment of tempi");

        tempi += 1;
      }
      console.log("i got to the return 1");
      console.log("TCL: strStr -> tempi", tempi);
      console.log(
        "TCL: strStr -> tempi === i + 1 + needle.length + 1",
        tempi === i + 1 + needle.length + 1
      );
      console.log(
        "TCL: strStr -> tempi === i + 1 + needle.length + 1",
        i + 1 + needle.length + 1
      );
      if (tempi === i + 1 + needle.length + 1) {
        return i;
      }
    }
  }
  return -1;
};

strStr("mississippi", "issip");
