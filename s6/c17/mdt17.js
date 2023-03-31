/* 
    c17
*/

/**
 * Declara una variable que contenga una matriz
 * de 5x5 llena de puros numeros enteros y positivos
 */

/**
 * Luego, escribe un algoritmo para sumar todos
 * los numeros en la matriz.
 */

const matriz = [
    [1, 2, 3],
    [1, 5, 3],
    [1, 2, 9],
];

// console.table(matriz);

const sumarMatriz = matriz => {
    let acc = 0
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            acc = acc + matriz[i][j];// elemento final
        }
    }
    return acc
}
// console.log(sumarMatriz(matriz))

/* 
Crear una función que genere una matriz de 3x3. 
Cada fila debe tener solo 3 números. 
La matriz debe verse así:
    [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ]
*/
/*
 [
    [1,1,1],
    [1,1,1],
    [1,1,1]
 ]
*/

function generarMatriz(filas, columnas) {
    let matriz = []
    let cont = 1
    for (let i = 0; i < filas; i++) {
        matriz.push([])
        for (let j = 0; j < columnas; j++) {
            matriz[i].push(cont)
            cont++
        }
    }
    return matriz;
}

let matrizGenerada = generarMatriz(10, 10)
console.table(matrizGenerada)
console.log('************');

// DIAGONAL 1

/* 
console.log(matrizGenerada[0][0])
console.log(matrizGenerada[1][1])
console.log(matrizGenerada[2][2])
console.log(matrizGenerada[3][3])
 */
const sumarDiagonal1 = (matriz) => {
    let acc = 0;
    for (let i = 0; i < matriz.length; i++) {
        acc = acc + matrizGenerada[i][i]
        // console.log(matrizGenerada[i][i])
    }
    return acc
}




const sumarDiagonal1DobleFor = (matriz) => {
    let acc = 0;
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if (i === j) {
                acc = acc + matrizGenerada[i][j]
            }
        }
    }
    return acc
}

// console.log(sumarDiagonal1DobleFor(matrizGenerada))



// DIAGONAL 2

/* 

console.log(matrizGenerada[0][matrizGenerada.length - 1 - 0])
console.log(matrizGenerada[1][matrizGenerada.length - 1 - 1])
console.log(matrizGenerada[2][matrizGenerada.length - 1 - 2])
console.log(matrizGenerada[3][matrizGenerada.length - 1 - 3])

*/
const sumarDiagonal2 = (matriz) => {
    let acc = 0;
    for (let i = 0; i < matriz.length; i++) {
        // console.log(matrizGenerada[i][matrizGenerada.length - 1 - i])
        acc += matrizGenerada[i][matrizGenerada.length - 1 - i]   
    }

    return acc
}
// console.log(sumarDiagonal2(matrizGenerada))