function primesInRange(a,b){
    const s = Math.min(a,b), e = Math.max(a,b)
    const out = []
    for(let n=s;n<=e;n++){
        let p = n > 1
        if(p){
            if(n===2 || n===3){ out.push(n); continue }
            if(n%2===0 || n%3===0){ p=false }
            for(let i=5;i*i<=n && p;i+=6){
                if(n%i===0 || n%(i+2)===0) p=false
            }
        }
        if(p) out.push(n)
    }
    return out
}
