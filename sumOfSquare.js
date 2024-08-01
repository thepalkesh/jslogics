/* --------- sum of all square of all elements from the given array --------- */


/* -------------------------------- method 1 -------------------------------- */

const sumOfSquares=(arr)=>{
return arr.reduce((accum,curElem)=>accum =accum+(curElem*curElem),0)

}

console.log(sumOfSquares([1,2,3]));

/* -------------------------------- method 2 -------------------------------- */

const sum=(arr)=>{
       let sum=0;
     for (let elem of arr){
          sum=sum+elem*elem;
     }

     return sum;
}
console.log((sum([1,2,3])))