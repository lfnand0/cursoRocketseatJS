function romanToInteger(string) {
    const roman = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 }
    let num = 0
    
    if (string.includes('CM')) {num -= 200} // o programa irá interpretar CM como 100 + 1000, então para compensar, tiramos 100 duas vezes caso CM apareça na string, dessa forma CM vira 100 + 1000 - 200
    if (string.includes('CD')) {num -= 200}
    if (string.includes('XC')) {num -= 20}
    if (string.includes('XL')) {num -= 20}
    if (string.includes('IX')) {num -= 2}
    if (string.includes('IV')) {num -= 2}
    for (let i = 0; i < string.length; i++) {
        num += roman[string[i]]
    }
    return num
}

console.log(romanToInteger('MMMMMMMMMCXII'))