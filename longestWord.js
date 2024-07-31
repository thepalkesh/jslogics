/* -------------------------------------------------------------------------- */
/*                        Qus-Longest word in a String                        */
/* -------------------------------------------------------------------------- */

function findLongestWord(str) {
    if (str.trim().length === 0) {
      return false;
    }

  words = str.split(" ");

// short method are in comment
/* -------------------------------------------------------------------------- */
/*          return words.reduce((accum,curWord)=>(curWord.length>accum.length?curWord:accum),
                           ""
                                       );                                                                                                 */
/* -------------------------------------------------------------------------- */

  words = words.sort((a, b) => b.length - a.length);
  console.log(words);
  return words[0];
}

console.log(findLongestWord("Hello i am Self Taubbjbjght Software Developer"));
