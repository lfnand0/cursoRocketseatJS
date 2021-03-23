/* function rand(x, y) {
    if (x > y) {
        let value = Math.random() * (x - y) + y
        value = Math.round(value)
        return value
    } else if (x < y) {
        let value = Math.random() * (y - x) + x
        value = Math.round(value)
        return value
    } else if (isNaN(x) || isNaN(y)) {
        return 0
    } else {
        throw new Error('Pick a numerical value for x and y')
    }
} */

function rand(x, y) {
    if (x < y) {
        const w = x
        x = y
        y = w
    } 
    if (isNaN(x) || isNaN(y)) {
        return 0
    } else {
        let value = Math.random() * (x - y) + y
        value = Math.round(value)
        return value
    }
}

console.log(rand(20, 1))
console.log(rand(1, 2))
console.log(rand(6))
console.log(rand(0))