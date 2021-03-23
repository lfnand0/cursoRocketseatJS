// function constructor

/*
function Person() {}
const luiz = new Person()
console.log(luiz) //returns Object {} - função CONSTRUTORA, pois cria um novo objeto
*/

function Person(name) {
    this.name = name //this = novo objeto criado com "new" (linhas 16 e 17)
    this.walk = function() {
        return this.name + " está andando."
    }
}

const luiz = new Person("Luiz") //new cria um objeto de mesmo nome da const
const lucas = new Person("Lucas")
console.log(luiz)
console.log(lucas)
console.log(`${luiz.name} e ${lucas.name} são irmãos`) //returns Luiz e Lucas são irmãos
console.log(luiz.walk())


//Pra quê colocar Person em maiúsculo? - o JS já possui algumas funções construtoras,
//que estão na mesma formatação. Exemplo:

let name = new String("Luiz")
console.log(name)

/* prints the following:
String
​
0: "L"
​
1: "u"
​
2: "i"
​
3: "z"
​
length: 4
*/

let date = new Date("2021-05-03")
console.log(date)
//prints the following:
//Date Sun May 02 2021 21:00:00 GMT-0300 (Brasilia Standard Time)









