function isEqual(obj1, obj2) {
 const keys1 = Object.keys(obj1);
 const keys2 = Object.keys(obj2);

 if (keys1.length !== keys2.length) return false;

 for ( let i=0; i< keys1.length; i++){
   if ( obj1[key][i] !== obj2[keys][i]) return false;
 }
 return true;

  
  
  
  
  // write your function here
  // run your tests by running `jest isEqual`
  // you can also run tests on every save by running
  // `jest --watch isEqual`
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }
  for (const key in obj1) {
    if (!obj2[key] || obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
}

module.exports = { isEqual };
