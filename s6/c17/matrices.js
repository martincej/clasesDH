/* 
    *Clase 17
    *Matrices o array bidimensional
*/

let array = [1, 2, 3]
let array2 = [{}, {}, {}]
const matrix = [ //0,1,0 
    [1, 2, 3], // filas -> 0
    [2, 3, 4], // filas -> 1
    [5, 6, 7]  // filas -> 2
]
console.table(matrix);
// console.log(array[0]);
// matrix[0][0] = 'X'

// console.table(matrix.length); // 
// console.log(matrix[0].length); //

// console.log(matrix[1][1]);
// console.log(matrix[2][2]);

function iterar(matriz) {
    for (let i = 0; i < matriz.length; i++) {
        let fila = matriz[i]
        for (let j = 0; j < fila.length; j++) {
            const elementoFinal = fila[j];
            console.log(elementoFinal);
        }
    }
}


function iterar2(matriz) {
    for (let i = 0; i < matriz.length; i++) {
        console.log(matriz[i]);
        for (let j = 0; j < matriz[i].length; j++) {
            console.log(matriz[i][j]);
        }
    }
}


/* Desarrollar una función que reciba la matriz generada y 
retorne en un array los pares. */

function pares(matriz) {
    let pares = [];
    for (let i = 0; i < matriz.length; i++) {
        let fila = matriz[i]
        for (let j = 0; j < fila.length; j++) {
            const numeroFinal = fila[j];
            if (numeroFinal % 2 === 0) {
                pares.push(numeroFinal)
            }
        }
    }

    return pares
}
console.log('*********************');
// console.log(pares(matrix))



/* 

console.log(matrix[0][0]);
console.log(matrix[1][0]);
console.log(matrix[2][0]);
 
*/
const iterarColumna = (matrix, col) => {
    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i][col]);        
    }
}
iterarColumna(matrix,2)