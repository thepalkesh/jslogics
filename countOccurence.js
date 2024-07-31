/* -------------------------------------------------------------------------- */
/*                        Qus-Count Occurence of Character                        */
/* -------------------------------------------------------------------------- */


const countChar =(word,char)=>{
  
    word=word.toLowerCase();
    char=char.toLowerCase();

    count=word.split("").reduce((accum,curChar)=>{
     if (curChar===char){
          accum++
     }
     return accum;
    },0);
    //console.log(count);
    return count;
};



console.log(countChar("Palkeshwillbebhhhhhhhhrson","h"));