/* -------------------------------------------------------------------------- */
/*     write a function to check if a character is uppercase or losercase     */
/* -------------------------------------------------------------------------- */


const isupperCase=(char)=>{
// if(char.charCodeAt(0)>65 && char.charCodeAt(0)<90){
//      return true;
// }
// return false;

/* ---------------------------------- type2 --------------------------------- */

return char===char.toUpperCase();

}



console.log(isupperCase("S"));  //true
//console.log(islowerCase("b"));  //false 