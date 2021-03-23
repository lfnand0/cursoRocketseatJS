/*
    EXERCÍCIOS pt. 3

    Crie uma função que receba uma string em celsius ou fahrenheit e faça a transformação de uma unidade para outra

    C = (F - 32) * 5/9
    F = C * 9/5 + 32
*/


//ideia: utilizar temp.includes('C') e temp.includes('F')
//utilizar temp.indexOf('C') e temp.indexOf('F')

function transform(temp) {
    const tempInCelsius = temp.includes('C')
    const tempInFahrenheit = temp.includes('F')
    if (tempInCelsius) {
        let index = temp.indexOf('C')
        let tempBefore = Number(temp.slice(0, index))
        let newTemp = tempBefore * 9/5 + 32
        console.log(newTemp)
        return newTemp

    } else if (tempInFahrenheit) {
        let index = temp.indexOf('F')
        let tempBefore = Number(temp.slice(0, index))
        let newTemp = (tempBefore - 32) * 5/9
        console.log(newTemp)
        return newTemp

    } else {
        console.log('Error')
    }
}
transform('37.777777777777777777777777777777777777777777C')