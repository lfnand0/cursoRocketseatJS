function intToRoman(number) {
    if (typeof number !== 'number' || number <= 0) {
        return "Erro: escolha um valor válido"
    }
    let x = number
    let roman = ""
    let numbers = [1000,900,500,400,100,90,50,40,10,9,5,4,1]
    let letters = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I']
    for (let i = 0; i < numbers.length; i++) {
        while (x >= numbers[i]) {
            x -= numbers[i]
            roman += letters[i]
        }
    }
    return roman
}
console.log(intToRoman(8912))