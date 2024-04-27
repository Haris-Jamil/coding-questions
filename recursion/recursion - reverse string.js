function reverse(str){
  if (str.length === 0) {
      return "";
  };
  
  const ch = str.slice(-1);
  return ch + reverse(str.slice(0, -1));
  
}
reverse('awesome')