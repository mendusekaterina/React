function strip(x:string|number) {
    if (typeof x==='number'){
        return x.toFixed(2)
    }
    return x.trim()
}

console.log(strip(3.145678));
console.log(strip('     rtyufggjjhiiu  '));

