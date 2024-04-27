// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

// Examples:

// isSubsequence('hello', 'hello world'); // true
// isSubsequence('sing', 'sting'); // true
// isSubsequence('abc', 'abracadabra'); // true
// isSubsequence('abc', 'acb'); // false (order matters)

// function isSubsequence(str1, str2) {
//      let p1 = 0;
//      let p2 = 0;
//      while (p1 < str1.length) {
//          if (str1[p1] === str2[p2]) p1++;         
//          if (p2 === str2.length && p1 === str1.length - 1) return false;
//          p2++;
//      }
//     return true;
// }

var isSubsequence = function(s, t) {
    let i=0;
    let j=0;

    while ( i < s.length ) {
        if (j === t.length) break; 
        if (s[i] === t[j]) {
            i++;
        }
        j++;
    }
    return s.length === i;
};
