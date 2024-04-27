function reverseStack(stack) {
    if (stack.length === 1) {
        return;
    }

    let temp = stack.pop();
    reverseStack(stack);
    insert(stack, temp)
}

function insert(stack, num) {
    if (stack.length === 0) {
        stack.push(num);
        return;
    }

    const temp = stack.pop();
    insert(stack, num);
    stack.push(temp);
}

let arr = [1, 2, 3, 4, 5];
console.log('before:', arr);
reverseStack(arr);
console.log('after:', arr);