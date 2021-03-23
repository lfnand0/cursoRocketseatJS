// operadores lógicos (logical operators)

let pao = true
let queijo = true
let suco = false

// AND && (t+t=t; t+f=f; f+f=f)
console.log(pao && queijo) //true

// OR || (t+t=t; t+f=t; f+f=f)
console.log(pao || suco) //true

// NOT ! (inverte o valor)
console.log(!pao) //prints false
console.log(!suco) //prints true