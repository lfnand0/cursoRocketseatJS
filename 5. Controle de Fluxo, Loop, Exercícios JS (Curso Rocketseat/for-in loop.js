// for...in loop

let person = {
    name: 'Luiz',
    age: 17,
    weight: 70
}

/*
for (property in person) {
    console.log(property)
} //prints name; age; weight
*/

for (property in person) {
    console.log(property)
    console.log(person[property])
} //prints name; Luiz; age; 17; weight; 70    