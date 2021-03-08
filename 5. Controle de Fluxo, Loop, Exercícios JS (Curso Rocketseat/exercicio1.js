/*
    EXERCÍCIOS pt. 1

    Crie um algoritmo que transforme as notas do sistema númerico para sistema de notas em caracteres tipo A B C

    de 90 para cima - A
    entre 80 - 89   - B   
    entre 70 - 79   - C
    entre 60 - 69   - D
    menor que 60    - F

*/

/*
let score = 
scoreA = score > 89
scoreB = score >= 80 && score < 90
scoreC = score >= 70 && score < 80
scoreD = score >= 60 && score < 70
scoreF = score < 60

if(scoreA) {
    console.log('A')
} else if(scoreB) {
    console.log('B')
} else if(scoreC) {
    console.log('C')
} else if(scoreD) {
    console.log('D')
} else if(scoreF) {
    console.log('F')
} else {
    console.log('Nota inválida')
}
*/

let getScore = function(score) {
    let scoreA = score >= 90
    let scoreB = score >= 80 && score < 90
    let scoreC = score >= 70 && score < 80
    let scoreD = score >= 60 && score < 70
    let scoreF = score < 60

    if (scoreA) {
        console.log('A')
    } else if (scoreB) {
        console.log('B')
    } else if (scoreC) {
        console.log('C')
    } else if (scoreD) {
        console.log('D')
    } else if (scoreF) {
        console.log('F')
    } else {
        console.log('Nota inválida  ')
    }
}


getScore(101)
getScore(-1)
getScore(0)
getScore(1)
getScore(45)
getScore(69.9999999999)
getScore(61)
getScore(75)
getScore(97)
getScore(89)
getScore(89.9999999999)
getScore(76.595959155)