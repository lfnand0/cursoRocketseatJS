// switch

let expression = 'b' //prints b
switch (expression){
    case 'a':
        // código a
        console.log('a')
        break
    case 'b':
        // código b
        console.log('b')
        break
    default:
        console.log('default')
        break
}

function calculate(number1, operator, number2) {
    let result

    switch (operator) {
        case '+':
            result = number1 + number2
            break
        case '-':
            result = number1 - number2
            break
        case '*':
            result = number1 * number2
            break
        case '/':
            result = number1 / number2
            break
        default:
            console.log('não implementado')
            break
    }
    return result
}

console.log(calculate(1, '+', 2)) //prints 3
console.log(calculate(4, '/', 2)) //prints 2
console.log(calculate(5, 'a', 3)) //prints não implementado