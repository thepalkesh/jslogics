//find the mode in an array

function findMode(arr){
 
     let counts={};
    let maxnum=0;
    let mode;
     for(let element of arr){
          counts[element]=(counts[element]||0)+1;
           
          if(counts[element]>maxnum){
               maxnum=counts[element];
               mode=element;
          }
           
     }
         console.log(counts);
         return mode;
}

console.log(findMode([1,2,2,3,3,4,4,1,2,2]));