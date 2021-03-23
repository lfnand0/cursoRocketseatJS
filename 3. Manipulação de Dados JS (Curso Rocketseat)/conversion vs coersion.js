/*
    type conversion vs type coersion

    alteração de um tipo de dado para outro tipo

*/

//EXEMPLO DE COERÇÃO (alteração implícita de tipo)
let value = '9' + 5
console.log(value) //returns 95
console.log(typeof value) //returns string

//EXEMPLO DE CONVERSÃO (alteração explícita de tipo)
let soma = Number('9') + 5 //conversão da string "9" para um integer
console.log(soma) //returns 14  
console.log(typeof soma) //returns number