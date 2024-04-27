function areThereDuplicates(...args) {
    const lookup = {};
    for (let arg of args) {
        if (lookup[arg]) return true;
        lookup[arg] = 1;
    }
    return false;
}