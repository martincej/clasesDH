/* 
Dejo algunos ejercicios extras de array bidimensional
Cualquier consulta me etiquetan 🧉
*/

let matriz = [
    [5, 11, 15],   // indices --> 0
    [6, 34, 22],  // indices --> 1
    [3, 30, 21]  // indices --> 2
]

console.table(matriz);
/* 
1 - Desarrollar una funcion que reciba una matriz por parametro
* debe retornar un array con los elementos pares
*/

const pares = matriz => {
    let arrayPares = []
    for (let i = 0; i < matriz.length; i++) {
        
        for (let j = 0; j < matriz[i].length; j++) {
            if (matriz[i][j] % 2 === 0) {
                arrayPares.push(matriz[i][j])
            }
        }

    }
    return arrayPares
}
// console.log(pares(matriz))

/* 
2 - Desarrollar una funcion que reciba una matriz cuadrada por parametro
* debe retornar un array con los elementos impares
*/

const impares = matriz => {
    let arrayImpares = []
    for (let i = 0; i < matriz.length; i++) {
        
        for (let j = 0; j < matriz[i].length; j++) {
            if (matriz[i][j] % 2 !== 0) {
                arrayImpares.push(matriz[i][j])
            }
        }
    }
    return arrayImpares
}
// console.log(impares(matriz))

/* 
3 - Desarrollar una funcion que reciba una matriz cuadrada por parametro
* debe retornar un array con los elementos mayor a X, x parametro y pares
*/

const mayorAxPares = (matriz, minimo) => {
    let mayores = []
    for (let i = 0; i < matriz.length; i++) {
        
        for (let j = 0; j < matriz[i].length; j++) {
            if (matriz[i][j] > minimo && matriz[i][j] % 2 === 0 ) {
                mayores.push(matriz[i][j])
            }
        }
    }
    return mayores
}

// console.log(mayorAxPares(matriz,20))
// console.log(mayorAxPares(matriz,4))


/* 
4 - Desarrollar una funcion que reciba una matriz cuadrada por parametro
* debe retornar un array con los elementos de la primer diagonal
*/

function diagonalP(matriz){
   
    const arrayDiagonal = [];
    for (let i = 0; i < matriz.length; i++) {
        arrayDiagonal.push(matriz[i][i]);
    }
    return arrayDiagonal;
}
// console.log(diagonalP(matriz));


/* 

4 - Desarrollar una funcion que reciba una matriz cuadrada por parametro
* debe retornar la suma de la primer fila

*/

const sumarFila = (matriz,fila,saldoInicial) => {
    const arrayFila = matriz[fila - 1]
    let acc = saldoInicial
    for (let i = 0; i < arrayFila.length; i++) {
        acc += arrayFila[i]
    }
    return acc
}
// console.log(sumarFila(matriz,2, 1000)); // ##
/* console.log(sumarFila(matriz,2)); // ##
console.log(sumarFila(matriz,3)); // ## */

/* console.log(matriz[0][matriz.length - 1 - 0]);
console.log(matriz[1][matriz.length - 1 - 1]);
console.log(matriz[2][matriz.length - 1 - 2]);
 */
function diagonals(matriz){
   
    const arrayDiagonal = [];
    for (let i = 0; i < matriz.length; i++) {
        arrayDiagonal.push(matriz[i][matriz.length - 1 - i]);
    }
    return arrayDiagonal;
}
 console.log(diagonals(matriz));