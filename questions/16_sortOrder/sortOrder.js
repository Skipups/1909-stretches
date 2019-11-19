/*
SortOrder takes an array of objects, a key to be sorted on 
and a key for the return value. 
*/
//comparsion functions
function sortOrder(arr, sorted, key) {
  return arr
    .sort((a, b) => {
      if (a[sorted] < b[sorted]) {
        return -1;
      }
      if (a[sorted] > b[sorted]) {
        return1;
      }
      return 0;
    })
    .map(element => element[key]);
}

//array.prototype.sort()

module.exports = { sortOrder };
