function towerOfHanoi(s, d, h, n) {

    if (n == 1) {
        console.log(`moved ${n} from ${s} to ${d}`);
        return;
    }

    towerOfHanoi(s, h, d, n-1);
    console.log(`moved ${n} from ${s} to ${d}`);
    towerOfHanoi(h, d, s, n-1);
    
}

towerOfHanoi('source', 'destination', 'helper', 3);