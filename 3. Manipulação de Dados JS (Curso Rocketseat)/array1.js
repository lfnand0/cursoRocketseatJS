/* manipulando arrays pt.1 

   Separar um texto que contém espaços, em um novo array onde
   cada texto é uma posição do array. Depois disso, transformar
   o array em um texto e onde estavam os espaços, colocar _
*/

let phrase = "Estou realizando um teste."
let myArray = phrase.split(" ")
console.log(myArray) //prints Array(4) [ "Estou", "realizando", "um", "teste." ]

let phraseWithUnderscore = myArray.join ("_")
console.log(phraseWithUnderscore) //prints Estou_realizando_um_teste.