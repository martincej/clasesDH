/* 
 C19
 * Bubble Sort  🗯️
*/

// 

//SWAP DE VARIABLES
let x = 15
let y = 25

let aux = x
x = y
y = aux

// console.log(x,y); // 25 15

// let numeros = [5, 3]

/* 
let aux1 = numeros[0]
numeros[0] = numeros[ 0 + 1]
numeros[1] = aux1 
*/

//console.log(numeros); // [3 ,5]


let numeros = [2, 3, 1, 10]

const bubbleSort = (numeros) => {
    for (let i = 0; i < numeros.length; i++) { // 4

        for (let j = 0; j < numeros.length - 1; j++) { // 3
            if (numeros[j] < numeros[j + 1]) {
                
                let aux1 = numeros[j]
                numeros[j] = numeros[j + 1]
                numeros[j + 1] = aux1
            }
        }
    }
}


bubbleSort(numeros)

// numeros.sort((a,b) => b - a)


console.log(numeros); // [1,2,3,4]
