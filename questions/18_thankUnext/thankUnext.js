// create an array method called "next" that console.logs
// the next index in the array when called.

/*
 Example:
 someArr = ['shake', 'and', 'bake']
 someArr.next() // "shake"
 someArr.next() // "and" 
 someArr.next() // "bake"
*/

// hint: you are adding functionality directly to the
// javascripts global Array object

// ****no test writing required on this stretch

// YOUR CODE (intentionally blank):

// no export statement required
someArr = ['shake', 'and', 'bake'];
let i=0;
function next (arr){
  for ( i < someArr.length; i++) {
    return someArr[i];
  }
}
const next = {
  nextLetter: function() {
    for (let i = 0; i < someArr.length; i++) {
      return someArr[i];
    }
  },
};
let answer = someArr.next();
console.log(answer);
