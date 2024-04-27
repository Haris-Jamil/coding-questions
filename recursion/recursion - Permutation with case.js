// we assume every character in string can be in any case
// string can also contain digits

function permutation(output, input) {
    if (input.length === 0) {
        console.log(output);
        return;
    }
    
    let ch = input.slice(0,1);
    let rest = input.slice(1);

    if ( isNaN(Number(ch))) {   
        permutation(output + ch.toLowerCase(), rest);
        permutation(output + ch.toUpperCase(), rest);
    } else {       
        permutation(output + ch, rest);
    }

 
}

permutation("","a1B2")