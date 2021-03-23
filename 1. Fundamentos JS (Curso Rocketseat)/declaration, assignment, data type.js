/*
aula 14 ROCKETSEAT

declaration, assignment, data type
*/
var name
//declaration

name = "Luiz"
//assignment

console.log(typeof name) //returns string
//data type

let age, isHuman

age = 17
isHuman = true

console.log(typeof age) //returns number
console.log(typeof isHuman) //returns boolean
console.log(name, age, isHuman) //returns Luiz 17 true
console.log('O', name, 'tem', age, 'anos.') //returns O Luiz tem 17 anos.
console.log('O ' + name + ' tem ' + age + ' anos.') //same thing (remember to put spaces in between)
console.log(`O ${name} tem ${age} anos.`) //same thing as well (remember to use `` when using ${})