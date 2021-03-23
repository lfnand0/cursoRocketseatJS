/*
    EXERCÍCIOS pt. 3

    Crie uma função que receba uma string em celsius ou fahrenheit e faça a transformação de uma unidade para outra

    C = (F - 32) * 5/9
    F = C * 9/5 + 32
*/

//utilizar throw, try e catch para gerar erro
//utilizar temp.slice e temp.indexOf

//transform('27c')
function transform(temp) {
    const tempInCelsius = temp.toUpperCase().includes('C')
    const tempInFahrenheit = temp.toUpperCase().includes('F')
    if (!tempInCelsius && !tempInFahrenheit) {
        throw new Error('Invalid temperature')
        
    } else if (tempInCelsius) {
        let index = temp.indexOf('C')
        let tempBefore = temp.slice(0, index)
        newTemp = tempBefore * 9/5 + 32
        console.log(`${newTemp}F`)

    } else if (tempInFahrenheit) {
        let index = temp.indexOf('F')
        let tempBefore = temp.slice(0, index)
        newTemp = (tempBefore - 32) * 5/9
        console.log(`${newTemp}C`)

    } else {
        console.log('Error')
    }
}

transform()