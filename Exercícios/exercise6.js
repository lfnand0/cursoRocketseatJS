//this function is needed for gcd_more_than_two_numbers() to work
function gcd_two_numbers(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        console.log("Error: pick numeric values to x and y")
    } else if (x === 0 && y === 0) {
        console.log("Error: pick a value that isn't 0")
    } else {
        if (y > x) {
            x = [y, y = x][0];
        }
        x = Math.abs(x)
        y = Math.abs(y)
        while (y) {
            let t = y
            y = x % y
            x = t
        }
        return x
    }
}
/* 
function gcd_more_than_two_numbers(array) {
    let length = array.length                   //try to do it without gcd_two_numbers()
    let x, y
    if (!length) {
        console.log('Error: use a valid array')
    } else {
        x = array[0]
        for (let i = 1; i < length; i++) {
            if (typeof array[i - 1] !== 'number' || typeof array[i] !== 'number') {
                console.log('Error: pick a valid array')
            } else {
                y = array[i]
                x = gcd_two_numbers(x, y)
            }
        } 
        return x
    }
}

console.log(gcd_more_than_two_numbers([9, 0, 0]))
console.log(gcd_more_than_two_numbers([5,10,15,25]))
console.log(gcd_more_than_two_numbers([15, 30, 39, 27]))

 */

function gcd_more_than_two_numbers(array) {
    if (!array.length) { // array's empty
        console.log('Error: use a valid array')
    } else {
        let x = array[0]
        for (let i = 1; i < array.length; i++) {
            y = array[i]
            x = gcd_two_numbers(x, y)
        }
        return x
    }
}
console.log(gcd_more_than_two_numbers([0, 0, 1]))
console.log(gcd_more_than_two_numbers([5,10,15,25]))
console.log(gcd_more_than_two_numbers([15, 30, 39, 27]))

/* 
ESTRATÉGIA:
[a, b, c, d, ...]
maxValue = array[x]
for (let i = 0; i < maxValue; i++) {
    for (let j = 0; j < maxValue; j++) {
        if array[j] % maxValue !== 0 {
nope
        }
    }
}

loop: 
    loop: 
        if elemento % maxValue !== 0
            maxValue -= 1
        else
            checar prox elemento
ineficiente ------------------------------------
------------------------------------------------
existe um jeito melhor:

[20, 15, 35, 49]
gcd(20, 15) = 5  <-- usar esse valor pro próximo
gcd(5, 35) = 5 
gcd(5, 49) = 1 <-- VALOR FINAL

[15, 30, 39, 27]
gcd(15, 30) = 15
gcd(15, 39) = 3
gcd(3, 27)
*/