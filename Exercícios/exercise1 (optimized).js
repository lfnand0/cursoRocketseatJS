/* function baseConvertTemp(x, base) { // converts from base ('base') to decimal
    let parsed = parseInt(x, base)
    if (isNaN(parsed)) {
        return 0;
    }
    return parsed;
}

console.log(baseConvertTemp('618', 16))


function base_convert(x, base1, base2) { // converts from base1 to base2
    if (base1 < 2 || base1 > 36 || base2 < 2 || base2 > 36) {
        throw new Error('Choose bases between 2 and 36')
    } else if (base2 === 10) {
        return baseConvertTemp(x, base1);
    } else if (base1 === 10) {
        return x.toString(base2);
    } else {
        let converted = baseConvertTemp(x, base1)
        return converted.toString(base2);
    }
}

console.log(base_convert('E164', 16, 8))
console.log(base_convert('1000', 2, 8))

function bin_to_dec(x) {
    return baseConvertTemp(x, 2)
}

console.log(bin_to_dec('110011'))
console.log(bin_to_dec('100'))


 */
function base_convert(x, base1, base2) {
    if (base1 < 2 || base1 > 36 || base2 < 2 || base2 > 36) {
        throw new Error('Choose bases between 2 and 36')
    } else {
        let parsed = parseInt(x, base1) // converts x from base1 to base 10
        if (isNaN(parsed)) {
            return 0;
        } else {
            return parsed.toString(base2)
        }
    }
}

console.log(base_convert('20', 10, 2))
console.log(base_convert('1000', 2, 10))

function bin_to_dec(x) {
    let parsed = parseInt(x, 2)
    if (isNaN(parsed)) {
        return 0;
    } else{
        return parsed
    }
}

console.log(bin_to_dec('110011'))
console.log(bin_to_dec('100'))
console.log(bin_to_dec('asifuhquifh'))

function dec_to_bho(x, base) {
    if (base === 'B' || base === 'H' || base === 'O') {
        if (base === 'B') {
            return x.toString(2)
        } else if (base === 'H') {
            return x.toString(16)
        } else if (base === 'O') {
            return x.toString(8)
        }
    } else {
        throw new Error("Write the base as 'B', 'H' or 'O'")
    }
}


console.log(dec_to_bho(120, 'B'))
console.log(dec_to_bho(120, 'H'))
console.log(dec_to_bho(120, 'O'))
console.log(dec_to_bho(120, 'A'))