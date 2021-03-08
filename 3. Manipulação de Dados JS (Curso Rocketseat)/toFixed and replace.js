// manipulando strings e números pt. 3
// diminuir o número de casas decimais (arredondando) e trocar ponto por vírgula

let number = 6712.12515123
console.log(number.toFixed(2)) //2 significa o números de casa decimais
console.log(number.toFixed(2).replace(".", ","))
//aplica tanto toFixed quanto replace, e portanto printa 6712,13

//DETALHE: o valor retornado é uma string e não um número