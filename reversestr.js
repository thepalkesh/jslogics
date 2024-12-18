/* -------- reverse str without using any built in method or library -------- */

const reverseStr=(str)=>{
     let r_str= "";
     for (let i=str.length -1; i>=0; i--){
          r_str= r_str +str[i];
     }
     return r_str;
}




console.log(reverseStr("palkesh"))