// function countUniqueValues(arr){
//   let left = 0;
//   let right = 1;

//   if (arr.length == 0){
//     return 0;
//   }
  
//   while (right < arr.length) {
//       if (arr[left] == arr[right]) {
//           right++;
//       } else if (arr[left] < arr[right]) {                    
//           left++;
//           arr[left] = arr[right];   
//           right++;
//       }
//   }
//   return left + 1;
// }

function countUniqueValues(arr) {
  if (arr.length === 0) return 0; 
  let left = 0;
  for (let right = 0; right < arr.length; right++) {
    if (arr[left] != arr[right]) {
      left++;
      arr[left] = arr[right]
    }
  }
  return left+1;
}
