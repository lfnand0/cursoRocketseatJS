function lcm_two_numbers (x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        return null
    }
    if (y > x) {
        x = [y, y=x][0]
    }
    let originalX = x;
    let originalY = y;
    let remainder = x % y
    if (remainder === 0) {          // this means y is the greatest common divisor 
        return x        // x * y / last used divisor = lcm   --------- since the divisor is y, just return x
    } else {
        while (remainder !== 0) {
            x = y
            y = remainder
            remainder = x % y
        }
        return originalX * originalY / y    
    }
}
console.log(lcm_two_numbers(1, 13))
console.log(lcm_two_numbers(3,15));
console.log(lcm_two_numbers(10,15));

function gcd_two_numbers(x, y) { // needed for the following function
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

function lcm_more_than_two_numbers(array) {
    if (!array.length) {
        return 'Error: use a valid array'
    } else {
        let x = array[0]
        for (let i = 1; i < array.length; i++) {
            y = array[i]
            x = x * y / gcd_two_numbers(x, y)
        }
        return x
    }
}

console.log(lcm_more_than_two_numbers([100,90,80,7]));
console.log(lcm_more_than_two_numbers([5,10,15,25]));

/*
ESTRATÉGIA:
array[0, 1, 2, 3, 4]
x = array[0]
y = array[1]
x = x * y / gcd_two_numbers(x, y)

*/

/*
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
*/