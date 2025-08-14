function factorial(n){
    if(n < 0) return NaN
    let r = 1
    for(let i=2;i<=n;i++) r *= i
    return r
}
