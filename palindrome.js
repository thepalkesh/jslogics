/* ---------------------------- check palindrome with ignoring whitespace,punctuations,and capitalization---------------------------- */

const palindrome = (word) => {
  // Normalize the input by converting to lowercase and removing non-alphanumeric characters
  word = word.toLowerCase().replace(/[^a-z0-9]/g, "");
  // Reverse the normalized word
  const reverseWord = word.split("").reverse().join("");

  // Check if the normalized word is the same as the reversed version
  return word === reverseWord
    ? `This word is a palindrome:-- ${word}`
    : `This word is not a palindrome:-- ${word}`;
};

console.log(palindrome("A man, a plan, a canal, Panama"));
console.log(palindrome("Poop"));
