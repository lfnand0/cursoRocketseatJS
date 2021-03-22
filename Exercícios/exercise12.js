// UUID: xxxxxxxx-xxxx-xxxx-xxxxxxxxxxxx
//x.toString(16)
function random(x, y) {
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

function create_UUID() {
    let eight, four1, four2, twelve
    eight = random(268435456, 4294967295).toString(16)
    four1 = random(4096, 65535).toString(16)
    four2 = random(4096, 65535).toString(16)
    twelve = random(17592186044416, 281474976710655).toString(16)
    return eight + '-' + four1 + '-' + four2 + '-' + twelve
}
console.log(create_UUID())