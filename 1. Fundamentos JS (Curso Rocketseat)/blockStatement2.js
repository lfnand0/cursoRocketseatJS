/*
aula 12 ROCKETSEAT

scope 2: comportamento de let e const
    diferente de var, let e const são LOCAIS,
    e funcionam APENAS no escopo onde foram criadas
*/


/*
console.log('x (let) existe antes do bloco? ', x)
{
    //let x = 0 //retorna Uncaught ReferenceError: x is not defined
    const x = 0 //também retorna Uncaught ReferenceError: x is not defined
}
*/


{
    let y = 0
    console.log('y existe? ', y) //retorna o valor correto
}
console.log('y existe depois do bloco? ', y) //mesmo erro de antes