function factors(n){
    n = Math.abs(n)
    const out = []
    for(let i=1;i*i<=n;i++){
        if(n%i===0){
            out.push(i)
            if(i*i!==n) out.push(n/i)
        }
    }
    return out.sort((x,y)=>x-y)
}
