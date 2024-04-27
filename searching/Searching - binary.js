function binarySearch(arr, val){
     let left = 0;
     let right = arr.length - 1;
     
     while (left <= right) {
         let mid = Math.floor((left + left) / 2);
         
         if (arr[mid] === val) {
             return mid;
         } else if (val > arr[mid]) {
             left = mid + 1;
         } else {
             right = mid - 1;
         }
     }
     return -1;
}

binarySearch([1,2,3,4,5], 5);
