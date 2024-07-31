/* -------------------------------------------------------------------------- */
/*                        Qus-Hash Tag generator                        */

const hashGenerate = (str) => {
  if (str.length > 280 || str.trim().length === 0) {
    return false;
  }
  str = str.split(" ");
  str = str.map((curElem) => 
      curElem.replace(curElem[0], curElem[0].toUpperCase())    //2nd method---- curElem.charAt(0).toUpperCase + currElem.slice(1)
     );
  hashtag=str.join("");
  console.log(`#${hashtag}`);
 
};

console.log(hashGenerate("My name is palkesh jain"));
 