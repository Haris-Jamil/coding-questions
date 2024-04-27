function isPalindrome(str){
  if (str.length === 1) {
      return true;
  }
  if (str.length === 2) {
      return str[0] === str[1];
  }
  
  let ch1 = str.slice(0,1);
  let ch2 = str.slice(-1)
  if (ch1 === ch2) {
    return isPalindrome(str.slice(1, -1))
  } else {
      return false;
  }
  
  
}


isPalindrome('tacocat')