function armstrongInRange(a,b){
    const s = Math.min(a,b), e = Math.max(a,b)
    const out = []
    for(let n=s;n<=e;n++) if(isArmstrong(n)) out.push(n)
    return out
}
function isArmstrong(n){
    const s = String(Math.abs(n))
    const k = s.length
    let sum = 0
    for(const ch of s) sum += Math.pow(+ch, k)
    return sum === Math.abs(n)
}
