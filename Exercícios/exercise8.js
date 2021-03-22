function is_Natural(x) {
    return typeof x === 'number' && x >= 0 && Math.floor(x) === x && x !== Infinity
}
    
function power_of_2(x) {
    if (typeof x === 'number' && x > 0 && Math.floor(x) === x && x !== Infinity) {
        for (let i = 0; 2**i <= x; i++) {
            if (2**i == x) {
                return true
            }
        }
        return false
    } else {
        return false
    }
}

/*  
console.log(power_of_2(16));
console.log(power_of_2(18));
console.log(power_of_2(256));
console.log(power_of_2(1));
console.log(power_of_2(0));
console.log(power_of_2(100))
*/

function precise_round(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        return null;
    }
    return x.toFixed(y)
}

/*
console.log(precise_round(12.375,2));
console.log(precise_round(12.37499,2));
console.log(precise_round(-10.3079499, 3));
console.log(precise_round(1212411.21481591244125512512515812, 6))
*/

function is_Int(x) {
    return typeof x === 'number' && Math.floor(x) === x
}

/*
console.log(is_Int(23));
console.log(is_Int(4e2));
console.log(is_Int(NaN));
console.log(is_Int(23.75));
console.log(is_Int(-23));
*/

function is_Numeric(x) {
    return !isNaN(parseFloat(x)) && x !== Infinity
}

/*
console.log(is_Numeric(12));
console.log(is_Numeric('abcd'));
console.log(is_Numeric('12'));
console.log(is_Numeric(' '));
console.log(is_Numeric(1.20));
console.log(is_Numeric(-200));
*/

function sum(array) {
    if (typeof array !== 'object') {
        return "Erro: escolha uma array válida";
    }
    let sum = 0
    for (i = 0; i < array.length; i++) {
        if(isNaN(array[i])) {
        continue; 
        }
        sum += Number(array[i])
    }
    return sum
}

/*
console.log(sum([1,2,3]));
console.log(sum([100,-200,3]));
console.log(sum([1,2,'a',3]));
*/

function product(array) {
    if (typeof array !== 'object') {
        return "Erro: escolha uma array válida";
    }
    let product = 1
    for (i = 0; i < array.length; i++) {
        if(isNaN(array[i])) {
        continue; 
        }
        product *= Number(array[i])
    }
    return product
}

/*
console.log(product([1,2,3]));
console.log(product([100,-200,3]));
console.log(product([1,2,'a',3]));
*/