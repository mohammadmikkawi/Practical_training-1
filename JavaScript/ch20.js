function calc(a,b,op){
    if(op === "+") return a+b
    if(op === "-") return a-b
    if(op === "*") return a*b
    if(op === "/") return b===0 ? Infinity : a/b
    return NaN
}
