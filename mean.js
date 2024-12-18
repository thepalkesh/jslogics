/* ----------------------- find mean of given numbers ----------------------- */

 

const calulateMean=(arr)=>{
     if(arr.length===0)
     {
          return 0;
     }
     let sum= arr.reduce((accum,curElem)=>accum+curElem,0);
//console.log(sum);
return sum/arr.length;


}




console.log(calulateMean([1,2,3,4,5]));