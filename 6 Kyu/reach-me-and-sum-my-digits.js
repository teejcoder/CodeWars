/* DESCRIPTION
Make a function sumDig_nthTerm(), that receives three arguments in this order

sumDig_nthTerm(initVal, patternL, nthTerm(ordinal number of the term in the sequence)) 

This function will output the sum of the digits of the n-th term of the sequence.
*/

/* MY CODE
function sumDigNthTerm(initval, patternl, nthterm) {
  var sum = initval;
  for (var i = 0; i < nthterm-1; i++) {
    sum += patternl[i%patternl.length]   
  }
  return (sum.toString().split("")).reduce((a,b) => Number(a)+Number(b))
}
*/