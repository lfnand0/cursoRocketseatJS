// "for" loop
// break - para a execução do loop
// continue - pula a execução do loop

for(let i = 100; i > 0; i--) {
    if(i === 50) {
        break;
    }

    console.log(i)
}

for(let i = 10; i > 0; i--) {
    if(i === 5) {
        continue;
    }

    console.log(i)
} //prints every number but 5