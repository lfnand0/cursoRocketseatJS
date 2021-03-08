// callback function

function sayMyName(name) {
    console.log('antes de executar a callback')
    name()
    console.log('depois de executar a callback')
}

//sayMyName('Luiz') //prints string Luiz
//sayMyAName(2) //prints integer 2


sayMyName(
    () => { //função name() especificada na função sayMyName dentro da própria === callback
        console.log('callback') 
    }
)

//É A MESMA COISA QUE FAZER ISSO:
/*
function sayMyName() {
    console.log('antes de executar a callback')
    function name() {
        console.log('callback')
    }
    name()
    console.log('depois de executar a callback')
}

sayMyName()
*/