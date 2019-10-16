function groupBy(arr, attr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    let elm = arr[i];
    //console.log(attr(elm));
    obj[elm] += elm.attr;
  }
  console.log(obj);
  return obj;
}

module.exports = { groupBy };

// function groupBy(arr, attr) {
//     let obj = {};
//     for (let i = 0; i < arr.length; i++) {
//       let elm = arr[i];
//       console.log(elm, attr);
//       obj[elm] += elm.attr;
//     }
//     console.log(obj);
//     return obj;
//   }
