/*
aula 17 ROCKETSEAT

exercícios

1- Declare uma variável de nome weight
2- Que tipo de dado é a variável acima?
3- Declare uma variável e atribua valores para cada um dos dados:
    *name: String
    *age: Number (integer)
    *stars: Number (float)
    *isSubscribed: Boolean
4- A variável student abaixo é de que tipo de dado?
*/
let student = {}
/*
4.1- Atribua a ela as mesmas propriedades e valores do exercício 3.
4.2- Mostre no console a seguinte mensagem:

    <name> de idade <age> pesa <weight> kg.

    Atenção, substitua <name> <age> e <weight> pelos
    valoes de cada propriedade do objeto

5- Declare uma variável do tipo Array, de nome
   students e atribua a ela nenhum valor, ou seja,
   somente o Array vazio

6- Reatribua valor para a variável acima, colocando
   dentro dela o objeto student da questão 4. (Não
   copiar e colar o objeto, mas usar o objeto criado e
   inserir ele no Array)

7- Coloque no console o valor da posição zero do
   Array acima

8- Crie um novo student e coloque na posição 1 do 
   Array students

9- Sem rodar o código responda qual é a resposta do
   código abaixo e por que? Após sua resposta, rode o
   codigo e veja se vc acertou.

   console.log(a)
   var a = 1
*/
//1
let weight

//2 
console.log(typeof weight) //returns undefined

//3
let name = "Luiz"
let age = 17
let stars = 4.9
let isSubscribed = false

//4
console.log(typeof student) //returns object

//4.1
student = {
    name: name,
    age: age,
    weight: 70
}

//4.2
console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg.`)

//5
let students = []

//6
students =[student]

//7
console.log(students[0])

//8
const student2 = {
    name: "Lucas",
    age: 22,
    weight: undefined
}
students = [
    student, 
    student2
]
console.log(students)

//9
//undefined    

console.log(a)
var a = 1