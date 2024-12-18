<<<<<<< HEAD
/* ---- write function to convert a string into camelcase and snake_case ---- */

/* -------------------------------- method 1 -------------------------------- */
const toCamelCase = (arr) => {
  arr = arr.trim().split(" ");

  arr = arr.map((curElem, index) => {
    if (index === 0) {
      return curElem.toLowerCase();
    } else {
      return curElem.charAt(0).toUpperCase() + curElem.slice(1).toLowerCase();
    }
  });
  console.log(arr);
  return arr.join("")  //heyPalkeshHere
};

console.log(toCamelCase("hey palkesh here"));

/* -------------------------- method 2 by chaining -------------------------- */
const toCamel = (arr) => {
     return arr
        .trim()
        .split(" ")
       .map((curElem, index) => {
       if (index === 0) {
         return curElem.toLowerCase();
       } else {
         return curElem.charAt(0).toUpperCase() + curElem.slice(1).toLowerCase();
       }
     }).join("")  //heyPalkeshHere
   };
   
   console.log(toCamel("hey second method"));
=======
/* ---- write function to convert a string into camelcase and snake_case ---- */

/* -------------------------------- method 1 -------------------------------- */
const toCamelCase = (arr) => {
  arr = arr.trim().split(" ");

  arr = arr.map((curElem, index) => {
    if (index === 0) {
      return curElem.toLowerCase();
    } else {
      return curElem.charAt(0).toUpperCase() + curElem.slice(1).toLowerCase();
    }
  });
  console.log(arr);
  return arr.join("")  //heyPalkeshHere
};

console.log(toCamelCase("hey palkesh here"));

/* -------------------------- method 2 by chaining -------------------------- */
const toCamel = (arr) => {
     return arr
        .trim()
        .split(" ")
       .map((curElem, index) => {
       if (index === 0) {
         return curElem.toLowerCase();
       } else {
         return curElem.charAt(0).toUpperCase() + curElem.slice(1).toLowerCase();
       }
     }).join("")  //heyPalkeshHere
   };
   
   console.log(toCamel("hey second method"));
>>>>>>> 8baf524 (commit)
