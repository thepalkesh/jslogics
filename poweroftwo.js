/* --------------- check power of two and return true or false -------------- */

/* -------------------------------- method 1 -------------------------------- */
const powerOfTwo=(num)=>{
     let op=false;
     for(let i=1; i<num;i++){
     if(2**i==num){
        op=true;
     }}
     return op;
}


console.log(powerOfTwo(8));
console.log(powerOfTwo(21));
/* -------------------------------- method 2 -------------------------------- */

function isPowerOfTwo(num){
     return num > 0 && (num & (num - 1))===0;
 }
 const result1 = isPowerOfTwo(8);
 //console.log(result1);


console.log(`method 2 ${isPowerOfTwo(16)}`);



