function solvequadratic(a,b,c){
    const d = b*b - 4*a*c
    if(a === 0){ return b !== 0 ? [-c/b] : [] }
    if(d < 0){ return [] }
    if(d === 0){ return [(-b)/(2*a)] }
    const s = Math.sqrt(d)
    return [(-b - s)/(2*a), (-b + s)/(2*a)]
}
