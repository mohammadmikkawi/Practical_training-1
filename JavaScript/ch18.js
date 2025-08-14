function isArmstrong(n){
    const s = String(Math.abs(n))
    const k = s.length
    let sum = 0
    for(const ch of s) sum += Math.pow(+ch, k)
    return sum === Math.abs(n)
}
