/*
    EXERCÍCIOS pt. 2

    Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
        receitas: []
        despesas: []

    Agora, crie um função que irá calcular o total de receitas e despesas e irá mostrar uma mensagem se a família está com saldo positivo ou negativo, seguido do valor do saldo

*/

let family = {
    incomes: [1.1251251251251215515125, 0, 1, 12125],
    expenses: [0, 9123, 1587, 1, 1125, 151, -124.981259816589165195]
}

function sum(array) {
    let i = 0
    let sum = 0
    while (i < array.length) {
        sum += array[i]
        i++
    }
    return sum
}

function calculateBalance() {
    let sumIncomes = sum(family.incomes)
    let sumExpenses = sum(family.expenses)
    
    let sumTotal = sumIncomes - sumExpenses
    sumTotal = sumTotal.toFixed(2)
    if (sumTotal > 0) {
        console.log(`Your balance is positive: ${sumTotal}`)
    } else if (sumTotal < 0) {
        console.log(`Your balance is negative: ${sumTotal}`)
    } else if (sumTotal = 0) {
        console.log(`Your balance is 0`)
    } else {
        console.log(`Invalid values`)
    }
}
calculateBalance()

/*
let family = {
    incomes: [75, 150, 225, 15],
    expenses: [300, 13.7, 13.7]
}
let sumTotal = 0
let i = 0
let sumIncomes = 0
let sumExpenses = 0

while (i < family.incomes.length) {
    sumIncomes += family.incomes[i]
    i++
}

i = 0
while (i < family.expenses.length) {
    sumExpenses += family.expenses[i]
    i++
}
console.log(sumExpenses, sumIncomes)

let calculateBalance = () => {
    sumTotal = sumIncomes - sumExpenses
    if (sumTotal == 0) {
        console.log(`The balance is 0`)
    } else if (sumTotal < 0) {
        console.log(`The balance is negative: ${sumTotal}`)
    } else if (sumTotal > 0) {
        console.log(`The balance is positive: ${sumTotal}`)
    } else {
        console.log("Invalid values")
    }
}

calculateBalance()
*/