/* function gcd_two_numbers(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        console.log("Error: pick numeric values to x and y")
    } else {
        x = Math.abs(x)
        y = Math.abs(y)
        if (x === 0 && y === 0) {
            console.log("Error: both values can't be 0")
        } else if (y == x) {
            return x
        } else {
            if (y > x) {
                x = [y, y = x][0];
            }
            let gcd = x
            for (let i = 0; i < x; i++) {
                if (x % gcd === 0 && y % gcd === 0) {
                    return gcd
                } else {
                    gcd -= 1
                }
            }
        }
    }
} */

function gcd_two_numbers(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        console.log("Error: pick numeric values to x and y")
    } else if (x === 0 && y === 0) {
        console.log("Error: both values can't be 0")
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

console.log(gcd_two_numbers(0, 0));
console.log(gcd_two_numbers(9, 3))