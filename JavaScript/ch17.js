function fibonacci(n){
    const a = []
    let x = 0, y = 1
    for(let i=0;i<n;i++){
        a.push(x)
        ;[x,y] = [y, x+y]
    }
    return a
}
