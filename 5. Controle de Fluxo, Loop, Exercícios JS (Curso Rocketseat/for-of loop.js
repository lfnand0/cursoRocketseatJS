// for...of loop

let name = 'Luiz'
let names = ['Suely', 'Carlos', 'Lucas']

for(let char of name) {
    console.log(char)
} //prints L; u; i; z

// other example:

for(nameOnArray of names) {
    console.log(nameOnArray)
} //prints Suely; Carlos; Lucas