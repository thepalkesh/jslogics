/* --------------------------------- median --------------------------------- */

const median=(arr)=>{
     arr=arr.sort((a,b)=>a-b);
     //console.log(arr)
     let length=arr.length;
     let mid=Math.floor(length/2);
   //  console.log(mid)

   if(length%2==0){
     return(arr[mid]+arr[mid-1]/2)
   }else{
     return arr[mid]
   }

 
}


console.log(median([5,3,9,1,7]));
