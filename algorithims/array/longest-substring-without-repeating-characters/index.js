/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let max = 0;
  let map = new Map();
  let leftPtr = 0;
  let rightPtr = 1;

  if (s.length === 1) return 1;

  map.set(s[leftPtr], leftPtr);

  while (rightPtr < s.length) {
    if (map.has(s[rightPtr]) && map.get(s[rightPtr]) >= leftPtr) {
      leftPtr = map.get(s[rightPtr]) + 1;
    }

    map.set(s[rightPtr], rightPtr);
    let windowLength = rightPtr - leftPtr + 1;
    max = Math.max(max, windowLength);
    rightPtr += 1;
  }
  return max;
};
