// function hoisting

sayMyName();
/*
function sayMyName() {
    console.log('Luiz')
} //prints Luiz
*/

/*
const sayMyName = function() {
    console.log('Luiz')
} //prints error: can't access lexical declaration 'sayMyName' before initialization
  //O erro ocorre pois sayMyName já foi definido como uma função e, portanto, não é uma constante
*/

var sayMyName = function() {
    console.log('Luiz')
} //prints error: sayMyName is not a function
  //O erro ocorro pois, ao definir sayMyName como var, esse valor é elevado antes de ser definido
  //como função na linha 3 (hoisting), e, portanto, não é uma função