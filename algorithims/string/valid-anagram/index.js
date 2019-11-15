/**
 * Given two strings s and t , write a function to determine if t is an anagram of s.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
Note:
You may assume the string contains only lowercase alphabets.

Follow up:
What if the inputs contain unicode characters? How would you adapt your solution to such case?
 */

/**
  *  Solution 1: 
    exceeds time limit
  */
var isAnagram = function(s, t) {
  if (s.length !== t.length) {
    return false;
  }
  for (let i = 0; i < s.length; i++) {
    const element = s[i];

    if (
      s.split("").filter(x => x === element).length !==
      t.split("").filter(x => x === element).length
    ) {
      return false;
    }
  }
  return true;
};

/**
 *  Solution # 2: Accepted
 *
 * 1)
 * Put each string into a map with the amount of occurences of each character.
 *
 * Compare the two maps with compareMaps() function to see if every character has the same amount of occurences.
 */
function compareMaps(sMap, tMap) {
  if (sMap.size !== tMap.size) return false;

  for (const [key, val] of sMap) {
    const element = tMap.get(key);
    if (element !== val || (element === undefined && !tMap.has(key))) {
      return false;
    }
  }
  return true;
}

function mapConverter(string) {
  const map = new Map();

  for (let i = 0; i < s.length; i++) {
    const element = s[i];

    if (map.has(element)) {
      map.set(element, map.get(element) + 1);
    } else {
      map.set(element, 1);
    }
  }

  return map;
}

var isAnagram = function(s, t) {
  const sMap = new Map();
  const tMap = new Map();

  if (s.length !== t.length) return false;

  for (let i = 0; i < s.length; i++) {
    const sElement = s[i];
    const tElement = t[i];

    if (sMap.has(sElement)) {
      sMap.set(sElement, sMap.get(sElement) + 1);
    } else {
      sMap.set(sElement, 1);
    }

    if (tMap.has(tElement)) {
      tMap.set(tElement, tMap.get(tElement) + 1);
    } else {
      tMap.set(tElement, 1);
    }
  }

  return compareMaps(sMap, tMap);
};

/**
 * Solution 3:
 * Almost same as solution 2 except I extracted away the map conversion into it's own function.
 */

function compareMaps(sMap, tMap) {
  if (sMap.size !== tMap.size) return false;

  for (const [key, val] of sMap) {
    const element = tMap.get(key);
    if (element !== val || (element === undefined && !tMap.has(key))) {
      return false;
    }
  }
  return true;
}

function mapConverter(s) {
  const map = new Map();

  for (let i = 0; i < s.length; i++) {
    const element = s[i];

    if (map.has(element)) {
      map.set(element, map.get(element) + 1);
    } else {
      map.set(element, 1);
    }
  }
  return map;
}

var isAnagram = function(s, t) {
  if (s.length !== t.length) return false;

  const sMap = mapConverter(s);
  const tMap = mapConverter(t);

  return compareMaps(sMap, tMap);
};
