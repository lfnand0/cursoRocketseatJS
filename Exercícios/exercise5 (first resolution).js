function gcd_two_numbers(x, y) {
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
}

console.log(gcd_two_numbers(-12, 13));
console.log(gcd_two_numbers(9, 3))

/* 
ESTRATÉGIA:
if y < x
    let w = x
    x = y
    y = w
else if x > y
    loop:  (for(i = 0; i < x; i++))
        gcd = x
        if x%gcd e x%gcd == 0 
            return gcd
        else 
            gcd -= 1
else 
    return x



4,3 (=1)

*/
