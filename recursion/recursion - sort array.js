// 0 1 5 2
function sortArr(arr) {
    
    if (arr.length == 1) {
        return;
    }

    let temp = arr.pop();
    sortArr(arr);
    insert(arr, temp);
    console.log(arr);
}

function insert(arr, num) {
    if (arr.length == 0 || arr[arr.length - 1] <= num) {
        arr.push(num);
        return;
    }

    const temp = arr.pop();
    insert(arr, num);
    arr.push(temp);
}

sortArr([2, 6, 3, 10, 9, 7, 1, 4])
