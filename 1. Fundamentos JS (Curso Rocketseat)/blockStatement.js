/*
aula 11 ROCKETSEAT

scope:
determina a visibilidade de uma var no JS

Block Statement:

    anterior ao bloco
    {
        dentro do bloco
    }
    fora do bloco

*/

console.log('x existe antes do bloco? ', x) //spoiler: sim, porém indefinido
{
    var x = 0
}
console.log('x existe depois do bloco? ', x) //retorna o valor

//moral da história: variáveis são globais, e funcionam fora de um escopo
//isso se chama HOISTING (elevação: JS eleva a var para o começo do código, mas sem valor)