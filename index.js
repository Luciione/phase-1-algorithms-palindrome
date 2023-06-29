function isPalindrome(word) {
  
  let reversed = "";

  for (let i = word.length - 1; i >= 0; i--) {
    reversed += word[i];
  }

  return reversed === word;
  
}

/* 
  

  Algorithm isPalindrome:
  Input: word (a string)

  1. Initialize reversed as an empty string.
  2. Iterate over each character in word from last to first:
      a. Append the character to the reversed string.
  3. Compare reversed with the original word:
      a. If they are equal, return true.
      b. If they are not equal, return false.

*/

/*

  We define the function isPalindrome that takes a word parameter.
Inside the function, we use the split("") method to convert the string into an array of characters. This allows us to easily reverse the string.
We then use the reverse() method to reverse the array of characters.
Finally, we use the join("") method to convert the reversed array back into a string.
We store the reversed string in the variable reversed.
We compare the original word with the reversed string using the === equality operator.
If the original word and the reversed string are equal, it means the word reads the same forwards and backwards, so we return true.
If they are not equal, it means the word is not a palindrome, so we return false.

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
