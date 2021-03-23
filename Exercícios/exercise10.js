// PASSO 1: pegar o número e dividir na forma a*1000 + b*500 + c*100 + d*50 + f*10 + g*5 + h
// possível algoritmo: 

function romanNumeral(number) {
    if (number < 0 || number === 0 || typeof number !== 'number') {
        return "Erro: escolha um valor válido"
    }
    let x = number
    let romano = ""
    while (x >= 1000) {
        romano += "M"
        x -= 1000
    }
    while (x >= 900) {
        romano += "MC"
        x -= 900
    }
    while (x >= 500) {
        romano += "D"
        x -= 500
    }
    while (x >= 400) {
        romano += "CD"
        x -= 400
    }
    while (x >= 100) {
        romano += "C"
        x -= 100
    }
    while (x >= 90) {
        romano += "XC"
        x -= 90
    }
    while (x >= 50) {
        romano += "L"
        x -= 50
    }
    while (x >= 40) {
        romano += "XL"
        x -= 40
    }
    while (x >= 10) {
        romano += "X"
        x -= 10
    }
    while (x >= 9) {
        romano += "IX"
        x -= 9
    }
    while (x >= 5) {
        romano += "V"
        x -= 5
    }
    while (x >= 4) {
        romano += "IV"
        x -= 4
    }
    while (x >= 1) {
        romano += "I"
        x -= 1
    }
    return romano
}
console.log(romanNumeral(293))



//PASSO 2: transformar a quantidade de a, b, ..., h para strings (M, D, C, L, X, V, I)


//PASSO 3: somar essas strings
//PASSO 4: retornar o valor como string