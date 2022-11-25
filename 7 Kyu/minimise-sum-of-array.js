/* DESCRIPTION
Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .
*/

/* MY CODE
function minSum(arr) {
  return arr.sort( (a,b) => a - b )
            .slice(0, arr.length/2)
            .reduce( (acc,curr,index) => acc += curr * arr[ arr.length - index - 1 ], 0 )
}

console.log(minSum([5,4,2,3])) //22
console.log(minSum([12,6,10,26,3,24])) //342
console.log(minSum([9,2,8,7,5,4,0,6])) //74   
*/