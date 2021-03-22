function max(array) {
    if (typeof(array) == 'object') {
        let largest = array[0]
        for(let i = 1; i <= array.length; i++) {
            if (largest < array[i]) {
                largest = array[i]
            }
        }
        return largest
    } else {
        console.log('Use an array as the argument')
    } 
}

console.log(max([10, 20, 50, 24, 100, 412, 1, '1000']))

function min(array) {
    if (typeof(array) == 'object') {
        let lowest = array[0]
        for(let i = 1; i <= array.length; i++) {
            if (lowest > array[i]) {
                lowest = array[i]
            }
        }
        return lowest
    } else {
        console.log('Use an array as the argument')
    } 
}


console.log(min([10, 20, 50, 24, 100, 412, 1, '-12']))


/* 
ESTRATÉGIAS:

length = array.length
    if (typeof(array) == 'object') {
        let largest = array[0]
        for(let i = 0; i < length; i++) {
            let j = i + 1
            if (array[i] < array[j]) {
                largest = array[j]
            } else if (array[i] === array[j]) {
                largest = array[j]
            } else {
                largest = array[i]
            }
        }
        return largest
    } else {
        console.log('Use an array as the argument')
    } 







for (let i = 1; i <= length; i++) {
            for (let j = 0; j < i; j++) {

            }
        }



[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
length = 10

número de comparações máxima = 9 = length - 1


*/