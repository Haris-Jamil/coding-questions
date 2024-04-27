
const memo = new Map();

function targetSumRecursion(arr, target, sum) {

    let key = `${arr.length}-${sum}`;

    if (arr.length === 0) {
        if (sum === target) {
            return 1;
        }
        return 0;
    }

    if (memo.has(key)) return memo.get(key);

    const count = targetSumRecursion(arr.slice(1), target, sum + arr[0]) + targetSumRecursion(arr.slice(1), target, sum + ( -1 *arr[0]))

    memo.set(key, count);

    return count;
}


let arr = [1,1,2,3];
let target = 1;
let sum = 0;

targetSumRecursion(arr, target, sum);