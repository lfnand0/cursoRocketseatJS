/*
    FALSY
    quando um valor é considerado false em contextos onde um booleano é obrigatório (condicionais e loops)

    false
    0
    -0
    ""
    null
    undefined
    NaN
*/
let x

x = 0 //falso
x = -0 //falso
x = "" //falso 
x = null //falso
x = undefined //falso
x = true //verdadeiro

console.log(x ? 'verdadeiro' : 'falso')

/*
    TRUTHY
    quando um valor é considerado true em contextos onde um booleano é obrigatório (condicionais e loops)

    true
    {}
    []
    1
    3.23
    "0"
    "false"
    -1
    Infinity
    -Infinity
*/
let y

y = 0 //falso
y = "false" //verdadeiro
y = Infinity //verdadeiro
y = -Infinity //verdadeiro
y = 1 //verdadeiro
y = -1 //verdadeiro
y = {} //verdadeiro
y = [] //verdadeiro
y = "teste" //verdadeiro
y = 123122.1251251 //verdadeiro

console.log(y ? 'verdadeiro' : 'falso')
