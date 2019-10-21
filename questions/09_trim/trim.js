const trim = obj => {
  for (let keys in obj) {
    if (obj[keys] === undefined || obj[keys] === null) {
      delete obj[keys];
    }
  }
  return obj;
};

module.exports = { trim };
//russell's solution
// const trim = obj => {
//   const result = {};

//   for (const key in obj) {
//     if (obj[key] !== undefined && obj[keys] === null) {
//       result[key] = obj[key];
//     }
//   }
//   return result;
// };

// const trim = obj => {
//     //   const result = {};
// Object.keys(obj).forEach(key =>{
//     if (obj[key] !== undefined && obj[key] !==null) {
//         result[key] = obj[key];
//         }
// })
// return result;
