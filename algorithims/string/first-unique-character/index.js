/**
 * Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode",
return 2.
Note: You may assume the string contain only lowercase letters.
 */

/**
 * @param {string} s
 * @return {number}
 */

/**
 * My first solution:
 * Here I used a Map, and in my first for loop,  check if the current element is in the Map.
 * If it is, I increment it's value by 1. If not, then I initialize it to a value of 0 in the map.
 *
 * In the second for loop I simply check each element has a value of 0, since only one element should still have a value of 0, and return it.
 */
var firstUniqChar = function(s) {
  const myMap = new Map();
  for (let i = 0; i < s.length; i++) {
    if (myMap.has(s[i])) {
      myMap.set(s[i], myMap.get(s[i]) + 1);
    } else {
      myMap.set(s[i], 0);
    }
  }

  for (let i = 0; i < s.length; i++) {
    if (myMap.get(s[i]) === 0) {
      return i;
    }
  }

  return -1;
};

/**
 *
 * Better performing solution.
 * Check if the last inde of the current element is the same as the current index.
 * The first time this returns true, it can be guaranteed that this is the first unique character in the string.
 */

var firstUniqChar = function(s) {
  for (let i = 0; i < s.length; i++) {
    if (s.lastIndexOf(s[i]) === s.indexOf(s[i])) {
      return i;
    }
  }

  return -1;
};
