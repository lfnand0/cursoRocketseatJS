// throw

function sayMyName(name = '') {
    if (name === ''){
        throw new Error("Nome é obrigatório")
    }

    console.log('depois do erro')
}
console.log('antes da função de erro')

//try...catch

try{
    sayMyName('')
} catch(e){
    console.log(e)
} //prints Error: Nome é obrigatório

console.log('após trycatch 1')

try{
    sayMyName('Luiz')
} catch(e){
    console.log(e)
} //doesn't print error

console.log('após trycatch 2')