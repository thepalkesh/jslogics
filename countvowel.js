/* ---------------------- count vowels in given string ---------------------- */


const countVowels=(str)=>{
     let vowels=['a','e','i','o','u']

     arr=str.toLowerCase().split("");
     console.log(arr)

     let count=0;
     for (let char of arr){
          if (vowels.includes(char)){
               count++;
          }
     }
     return count;

}



console.log(countVowels("aeio  udfghj"));










