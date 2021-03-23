// function scope
let subject = 'code something'
/*
function createThought(subject) {
    subject = 'eat something'
    return subject

}

console.log(createThought(subject)) //returns eat something
console.log(subject) //returns code something
*/
function createThought() {
    subject = 'eat something'
    return subject

}

console.log(createThought()) //returns eat something
console.log(subject) //returns eat something


//caso subject não seja adicionado como um parâmetro à função, o valor se mantém fora do escopo;
//caso subject seja adicionado, o valor adicionado dentro se mantém apenas dentro:
//o valor dado na linha 2, portanto, se torna o universal   