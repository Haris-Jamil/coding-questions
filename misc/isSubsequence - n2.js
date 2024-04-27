// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

// Examples:

// isSubsequence('hello', 'hello world'); // true
// isSubsequence('sing', 'sting'); // true
// isSubsequence('abc', 'abracadabra'); // true
// isSubsequence('abc', 'acb'); // false (order matters)

function isSubsequence(str1, str2) {
  let j=0;
  for (let i=0; i<str1.length; i++) {
    for (; j<str2.length; j++) {
        if(str1[i] === str2[j]) {
            j++;   
            if (j==str2.length && i < str1.length-1) {
                return false;
            }
            break;
        }
        
    }
  }
  return true;
}