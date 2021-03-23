function pythagorean_theorem(x, y) {
    if (isNaN(x) || isNaN(y)) {
        return "Erro: escolha valores válidos para x e y"
    }
    return Math.sqrt((x ** 2) + (y ** 2))
}
/* 
console.log(pythagorean_theorem(2, 4))
console.log(pythagorean_theorem(3, 4)) */

function binomial(n, k) {
    let nFactorial = n
    let kFactorial = k
    let diff = 0
    if (typeof n !== 'number' || typeof k !== 'number' || n <= 0 || k < 0) {
        return "Erro: escolha valores válidos para n e k"
    }

    if (n < k) {
        return "Erro: n não pode ser menor que k"
    }

    if (n == k) {
        diff = 1
    } else {
        diff = n - k
    }
    let dFactorial = diff

    if (k === 0) {
        kFactorial = 1
    }
    
    for (let i = 1; i < n; i++) {
        nFactorial *= (n - i)
    }
    for (let i = 1; i < k; i++) {
        kFactorial *= (k - i)
    }
    for (let i = 1; i < diff; i++) {
        dFactorial *= (diff - i)
    }
    
    return nFactorial/(kFactorial * dFactorial)
}

console.log(binomial(8, 3))