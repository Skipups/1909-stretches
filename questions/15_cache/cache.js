// function cache(func) {
//   let numOptions = [];
//   let result;
//   if (typeof func !== "function") throw Error("Input must be a function.");
//   else {
//     return num => {
//       if (!numOptions.includes(num)) {
//         numOptions.push(num);
//         let result = func(num);
//         return result;
//       } else {
//         return result;
//       }
//     };
//   }
// }

module.exports = { cache };
//Russell's answer
function cache(cb) {
  if (typeof cb !== "function") throw Error("Input must be a function.");
  const memo = {};
  return function(...num) {
    //... gathers everthing that could be passed in and putting in array rest syntax
    console.log("memo", memo);

    if (num in memo) {
      //memo[num] !== undefined
      return memo[num];
    } else {
      console.log("num as array", num);
      console.log("num as args", ...num);
      /*key is stringified*/ memo[num] = cb(...num); //function invokation each argument passed in as separate num spread
      return memo[num];
    }
  };
}
