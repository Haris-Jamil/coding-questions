// https://www.geeksforgeeks.org/problems/game-of-death-in-a-circle1840/1


function solveProblem(arr, k, currentIndex) {
    if (arr.length === 1) {
        return arr[0];
    }

    let killIndex = (currentIndex + k) % arr.length;
    arr.splice(killIndex, 1);
    return solveProblem(arr, k, killIndex);
    
}


function josephusProblem(n, k) {
    let arr = [];
    for(let i=1; i<=n; i++) {
        arr.push(i);
    }
    k = k-1;
    return solveProblem(arr, k, 0);
}

josephusProblem(5, 1);