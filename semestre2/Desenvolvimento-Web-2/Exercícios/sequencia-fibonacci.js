function fibonacci(n){
    let seq = [0, 1]
    let a = seq[0]
    let b = seq[1]
    
    for (let i = 2; i <= n ; i++ ){
        let c = a + b
        a = b
        b = c
        seq.push(c)
    }
    return seq[n]
}

console.log(fibonacci(7))