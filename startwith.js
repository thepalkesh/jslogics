/* --------------------------------- Que-19 Write a function to check if a given string start with a specific substring--------------------------------- */



const startWith=(str,substr)=>{

     return str.toLowerCase().startsWith(substr.toLowerCase());

     //2nd solution
     //return str.slice(0,substr.length)===substr;
}


console.log(startWith("hey palkesh","hey"))
console.log(startWith("hey bro","Hey"))