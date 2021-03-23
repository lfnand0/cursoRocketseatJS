// function expression
// function parameters
const sum = function(number1, number2) {
    console.log(number1 + number2)
}

//sum(3, 3)
//sum (1 + 2)

let x = 1
let y = 2
sum (x, y)

console.log(`o número 1 é ${x}`)
console.log(`o número 2 é ${y}`)
console.log(`a soma é ${sum(x, y)}`)
/* retorna undefined porque a função printa no console a soma,
   mas não retorna o valor */

const sumReturnValue = function(number1, number2) {
    let total = number1 + number2
    return total
}

let z = 3
let w = 7

console.log(`o número 3 é ${z}`)
console.log(`o número 4 é ${w}`)
console.log(`a soma é ${sumReturnValue(z,w)}`)  