// Given two strings check if they are anagrams of each other
// Return a boolean

const _checkAnagrams = (str1, str2) => {
  // sorting strategy
  if (str1.length !== str2.length) return false;
  //  for ( let i=str1; i< str1.length; i++){
  //    let str1Current= str1[i]
  //    if (str2.)
  //  }
  const sortedArr1 = [...str1].sort().join("");
  const sortedArr2 = [...str2].sort().join("");

  if (sortedArr1 !== sortedArr2) return false;
  return true;
};

function checkAnagrams(str1, str2) {
  if (str1.length !== str2.length) return false;
  //russ
  //rusd
  const visitedChars1 = {
    r: 1,
    u: 1,
    s: 2
  };

  const visitedChars2 = {
    r: 1,
    u: 1,
    s: 1,
    d: 1
  };
  for (let i = 0; i < str1.length; i++) {
    // go throiugh letter by letter
    // if we haven't seen the letter, assing the number 1 to a value with the key letter
  }
  for (let i = 0; i < str2.length; i++) {}

  const keys = Object.keys(visitedChars1);
  for (let i = 0; i < keys.length; i++) {
    const currentChar = keys[i];
    if (visitedChars1[currentChar] !== visitedChars2[currentChar]) return false;
  }
  return true;
}
module.exports = { checkAnagrams };
