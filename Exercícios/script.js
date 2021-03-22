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
/* 
function create_UUID() {
    let eight, four1, four2, four3, twelve
    eight = random(268435456, 4294967295).toString(16)
    four1 = random(4096, 65535).toString(16)
    four2 = random(4096, 65535).toString(16)
    four3 = random(4096, 65535).toString(16)
    twelve = random(17592186044416, 281474976710655).toString(16)
    return eight + '-' + four1 + '-' + four2 + '-' + four3 + '-' + twelve
}
console.log(create_UUID())  

INVÁLIDO, O FORMATO TEM QUE SER:
xxxxxxxx-xxxx-Mxxx-Nxxx-xxxxxxxxxxxx
onde x = [0-9, a-f], M = [1-5] e N = [8, 9, a, ou b]
*/

function create_UUID() {
    var characters = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'd', 'e', 'f']
    let UUID = ""
    for (let i = 0; i < 8; i++) {
        UUID += characters[random(0, 15)]
    }
    UUID += '-'
    for (let i = 0; i < 4 ; i++) {
        UUID += characters[random(0, 15)]
    }
    UUID += '-4'
    for (let i = 0; i < 3; i++) {
        UUID += characters[random(0, 15)]
    }
    UUID += '-' + characters[random(7, 10)]
    for (let i = 0; i < 3; i++) {
        UUID += characters[random(0, 15)]
    }
    UUID += '-'
    for (let i = 0; i < 12; i++) {
        UUID += characters[random(0, 15)]
    }
    return UUID
}

console.log(create_UUID())
console.log(create_UUID())
console.log(create_UUID())
console.log(create_UUID())
console.log(create_UUID())
console.log(create_UUID())
console.log(create_UUID())
console.log(create_UUID())
console.log(create_UUID())
console.log(create_UUID())
console.log(create_UUID())
console.log(create_UUID())
console.log(create_UUID())
console.log(create_UUID())
console.log(create_UUID())
console.log(create_UUID())