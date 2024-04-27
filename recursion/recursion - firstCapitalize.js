function capitalizeWords(arr) {
    if (arr.length === 1) {
        return [arr[0].toUpperCase()];
    }

    let lastElement = arr.pop();
    return capitalizeWords(arr).concat([lastElement.toUpperCase()])
}

function firstCapitalize(arr) {
    if (arr.length === 1) {
        let str = arr[0];
        return [str.charAt(0).toUpperCase() + str.slice(1)];
    }

    let lastElement = arr.pop();
    return firstCapitalize(arr).concat([lastElement.charAt(0).toUpperCase() + lastElement.slice(1)])
}


firstCapitalize(['cat', 'rain', 'bed', 'book']);

