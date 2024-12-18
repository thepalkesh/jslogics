<<<<<<< HEAD
/* ----------------------- find min value in an array ----------------------- */


/* -------------------------------- method 1 -------------------------------- */
const findMin=(arr)=>{
     arr= arr.sort((a,b)=>{
          if(b>a) return-1;
     });

     return arr[0]
}
console.log(findMin([8,12,7,56,78]));
console.log(findMin([8,12,-7,56,78]));


/* -------------------------------- method 2 -------------------------------- */

const findMin1=(arr)=>{
     return Math.min(...arr);
}


console.log(findMin1([8,12,7,56,78]));
=======
/* ----------------------- find min value in an array ----------------------- */


/* -------------------------------- method 1 -------------------------------- */
const findMin=(arr)=>{
     arr= arr.sort((a,b)=>{
          if(b>a) return-1;
     });

     return arr[0]
}
console.log(findMin([8,12,7,56,78]));
console.log(findMin([8,12,-7,56,78]));


/* -------------------------------- method 2 -------------------------------- */

const findMin1=(arr)=>{
     return Math.min(...arr);
}


console.log(findMin1([8,12,7,56,78]));
>>>>>>> 8baf524 (commit)
console.log(findMin1([8,12,-7,56,78]));