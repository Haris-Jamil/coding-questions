function reverseArr(arr) {
    if (arr.length === 1) {
        return;
    }
    const temp = arr.pop();    
    reverseArr(arr);     
    arr.unshift(temp);
}

// 1 2 3 4 5

let arr = [1, 2, 3, 4, 5];
console.log('before:', arr);
reverseArr(arr);
console.log('after:', arr);



// 1 2 3 4 5
// 5 4 3 2 1

// 1 2 3 4
// 4 3 2 1