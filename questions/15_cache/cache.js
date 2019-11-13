function cache(func) {
  let numOptions = [];
  let result;
  if (typeof func !== "function") throw Error("Input must be a function.");
  else {
    return num => {
      if (!numOptions.includes(num)) {
        numOptions.push(num);
        let result = func(num);
        return result;
      } else {
        return result;
      }
    };
  }
}

module.exports = { cache };
