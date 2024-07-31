/* ---------------------------- calculate Average --------------------------- */

const calcAvrg=(arr)=>{
 total=arr.reduce((accum,curElem)=>accum+curElem,0)
 return(total/arr.length);


}

console.log(calcAvrg([98,75,87,95,98]))