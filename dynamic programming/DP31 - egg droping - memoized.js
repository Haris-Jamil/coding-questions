let map = new Map();

var superEggDrop = function(e, n) {

    let key = `${e}-${n}`;

    if (n === 0 || n === 1) {
        return n;
    }
    if (e === 1) {
        return n;
    }

    if (map.has(key)) {
        return map.get(key);
    }

    let min = Infinity;
    let l = 1;
    let h = n;

    for (let k=1; k<=n; k++) {

        let temp = 1 + Math.max(superEggDrop(e-1, k-1), superEggDrop(e, n-k) );
        min = Math.min(temp, min);
    }

    map.set(key, min);
    return min;
};

superEggDrop(1,2);