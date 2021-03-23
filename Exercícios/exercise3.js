function decimals(num, decimalPlaces) {
    if (typeof(num) !== 'number' && typeof(num) !== 'float' || typeof(decimalPlaces) !== 'number') {
        throw new Error('Pick valid values')
    } else {
        num = parseFloat(num)
        return num.toFixed(decimalPlaces)
    }
}

console.log(decimals(2.100212, 2))
console.log(decimals(2.100212, 3))
console.log(decimals(2100, 2))
console.log(decimals('a', 'b'))