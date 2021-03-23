// operador condicial (ternário)

// dependendo da condição, nós receberemos valores diferentes

// condição entre valor 1 se não valor 2
// condition ? value1 : value2

// exemplo 1
let pao = true
let queijo = true

const niceBreakfast = pao && queijo ? 'Good breakfast' : 'Bad breakfast'
console.log(niceBreakfast) // prints Good breakfast when BOTH (&&) are true

// exemplo 2
let age = 17
const canDrive = age >= 18 ? 'Can drive' : "Can't drive"
console.log(canDrive) // prints Can't drive