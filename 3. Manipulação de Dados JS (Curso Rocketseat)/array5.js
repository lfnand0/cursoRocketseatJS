// manipulando arrays pt.5

let techs = ["html", "css", "js"]

// 1. adicionar um item no fim
techs.push("nodejs")
// 2. adicionar no começo
techs.unshift("sql")
// 3. remover do fim
//techs.pop()
// 4. remover do começo
//techs.shift()
// 5. pegar somente alguns elementos do array
//console.log(techs.slice(1, 3))
// 6. remover 1 ou mais itens em qualquer posição do array
//techs.splice(0, 2)
// 7. encontrar a posição de um elemento no array
let index = techs.indexOf('html')
console.log(index)

console.log(techs)