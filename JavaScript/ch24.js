function lcm(a,b){
    if(a===0 || b===0) return 0
    return Math.abs(a*b)/gcd(a,b)
}
function gcd(a,b){
    a = Math.abs(a); b = Math.abs(b)
    while(b){ [a,b] = [b, a%b] }
    return a
}
