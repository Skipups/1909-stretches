function groupBy(arr, attr) {
  return arr.reduce((accum, curr) => {
    if (typeof attr === "function") {
      return (accum += attr(curr));
    } else {
      return (accum += curr[attr]);
    }
  }, {});
}

module.exports = { groupBy };
