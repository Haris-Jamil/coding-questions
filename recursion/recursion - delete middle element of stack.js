function deleteMiddle(stack, k) {
    if (stack.length == k) {
        stack.pop();
        return;
    }

    let temp = stack.pop();
    deleteMiddle(stack, k);
    stack.push(temp);
}

let stack = [9, 4, 7, 1, 2, 3, 5];
let k = Math.floor((stack.length/2) + 1);
console.log('middle', k)
console.log('stack before:', stack);
deleteMiddle(stack, k)
console.log('stack after:', stack);

