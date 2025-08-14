function createGuessGame(){
    const secret = Math.floor(Math.random()*100) + 1
    return function guess(x){
        if(x === secret) return "correct"
        return x < secret ? "higher" : "lower"
    }
}
