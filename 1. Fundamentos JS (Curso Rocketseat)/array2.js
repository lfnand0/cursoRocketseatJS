/*
aula 16 ROCKETSEAT

array pt. 2
*/

const animals = [
    'Lion',
    'Monkey',
    'Cat'
]

console.log(animals) //returns Array(3) [ "Lion", "Monkey", "Cat" ]
console.log(animals[0]) //returns Lion
console.log(animals[1]) //returns Monkey
console.log(animals[2]) //returns Cat
console.log(animals[3]) //returns undefined

const otherAnimals = [
    'Dog',
    { //reminder: arrays can have objects inside them.
        name: "Fish",
        age: 2
    },
    'Butterfly'
]

console.log(`The ${otherAnimals[1].name} is ${otherAnimals[1].age} years old.`)
//returns The Fish is 2 years old