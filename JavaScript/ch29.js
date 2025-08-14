function fibSequence(n){
    const a = []
    for(let i=0;i<n;i++) a.push(fib(i))
    return a
}
function fib(k){ return k<2 ? k : fib(k-1) + fib(k-2) }
