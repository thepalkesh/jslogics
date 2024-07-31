/* ------------ Que-10 compare two arrays and check equal or not ------------ */



const comparearray=(arr,arr1)=>{

     if (arr.length!==arr1.length) {
          return false;
     } 
      return arr.every((curVal,index)=>curVal===arr1[index])

}


console.log(comparearray([1,2,3],[1,2,3])) //true

console.log(comparearray([1,2,3],[1,4,3])) //false