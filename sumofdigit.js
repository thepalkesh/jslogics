/* -------------------------------------------------------------------------- */
/*     write a function that takes a number as input and returns the sum of its digit                                                       */
/* -------------------------------------------------------------------------- */

/* --------------------------------- method1 -------------------------------- */

const sumDigit=(num)=>{
//console.log(typeof(num))
let arr=Array.from(String(num),Number)
//console.log(arr)

return arr.reduce((accum,curElem)=>accum += curElem,0)

}




/* -------------------------------- method 2 -------------------------------- */
//Without converting into string use while and % 

const sumDigit1 = (num) =>{
    let sum = 0; 
    while(num > 0){
        let temp = num % 10;
        sum += temp;
        num = Math.floor(num / 10);
    }
    return sum;
}







console.log(sumDigit(1234)) //output 10
console.log(sumDigit1(5512)) //output 13