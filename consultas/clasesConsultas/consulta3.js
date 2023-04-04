/* 
? CLASE CONSULTA #3 MARTIN
* RESOLVEREMOS SUS DUDAS, 
* ENVÍE EL ENUNCIADO AL CANAL DE DUDAS

! DESMUTEAR PARA CONSULTAR UNICAMENTE POR FAVOR
*/


/* MATRIZ - ARRAY BIDIMENISIONAL*/

let matriz = [
    [14, 11, 15],   // indices --> 0
    [24, 34, 22],  // indices --> 1
    [32, 30, 22]  // indices --> 2
]

/* 
1 - Desarrollar una funcion que reciba una matriz por parametro
* debe retornar un array con los elementos pares 
*/
console.table(matriz);
function pares(matriz) {
    let arrayPares = []
    for (let i = 0; i < matriz.length; i++) {
        let fila = matriz[i]
        fila
        for (let j = 0; j < fila.length; j++) {
            if (fila[j] % 2 === 0) {
                arrayPares.push(fila[j])
                // console.log(matriz[i][j]);
            }
        }
    }
    return arrayPares
}

// console.log(pares(matriz));

let gastosEnero = [
    [10, 2500, 900, 1600, 2800, 3650, 1100], // 0
    [3, 2500, 333, 123, 123, 22, 444],       // 1
    [3, 2500, 455, 1600, 455, 1600, 455],
    [3, 1, 1, 1, 1, 1, 1]
];

let gastosFebrero = [
    [10, 2, 900, 1600, 2800, 3650, 1100], // 0
    [3, 2500, 333, 123, 123, 22, 444],       // 1
    [3, 2500, 455, 1600, 455, 1600, 455],
    [3, 100, 100, 100, 100, 100, 100]
];


console.log('**************');

function sumarSemana(gastos, semana) {
    let sumaSemana = 0;
    // console.log(gastos[semana - 1]);
    // const arraySemana = gastos[semana - 1]
    for (let i = 0; i < gastos[semana - 1].length; i++) {
        sumaSemana = sumaSemana + gastos[semana - 1][i]
    }

    return sumaSemana
}

// console.log(sumarSemana(gastosEnero, 1));
// console.log(sumarSemana(gastosFebrero, 4));


function generarMatriz(n, m) {
    let matriz = [];
    let cont = 1
    for (let i = 0; i < n; i++) {
        matriz.push([])  // cargamos las filas

        for (let j = 0; j < m; j++) {
            matriz[i].push(cont)    // cargamos los elementos de la fila       
            cont++
        }

    }
    return matriz
}

// console.table(generarMatriz(2,2)); //
// console.table(generarMatriz(10,5)); //

/* MATRIZ 3X3
[
    [1,1,1],
    [1,1,1],
    [1,1,1],
]

*/

/* 
4 - Desarrollar una funcion que reciba una matriz cuadrada por parametro
* debe retornar un array con los elementos de la primer diagonal
*/

/* 
console.log(matriz[0][0]); 
console.log(matriz[1][1]);
console.log(matriz[2][2]);
*/

function diagonal(matriz) {
    const arrayDiagonal = []
    for (let i = 0; i < matriz.length; i++) {
        arrayDiagonal.push(matriz[i][i])
    }
    return arrayDiagonal
}

// console.log(diagonal(matriz)) // [14,34,22]



/* 
console.log(matriz[0][matriz.length - 1 - 0]); // 15
console.log(matriz[1][matriz.length - 1 - 1]);
console.log(matriz[2][matriz.length - 1 - 2]);
 */

function diagonalInversa(matriz) {
    const arrayDiagonal = []
    for (let i = 0; i < matriz.length; i++) {
        arrayDiagonal.push(matriz[i][matriz.length - 1 - i])
    }
    return arrayDiagonal
}

// console.log(diagonalInversa(matriz)) // [15,34,32]


/* for (let i = 0; i < personas.length; i++) {
    for (let j = 0; j < personas.length - 1; j++) {

        if (personas[j].estatura < personas[j + 1].estatura) {
            let temp = personas[j];
            personas[j] = personas[j + 1];
            personas[j + 1] = temp;
        }
    }
}


console.log(personas);

 */

const arrayNumeros = [1,2,6,7,2]

function bubbleSort(numeros){
    for (let i = 0; i < numeros.length; i++) {
        for (let j = 0; j < numeros.length - 1; j++) {
    
            if (numeros[j] > numeros[j + 1]) {
                let temp = numeros[j];
                numeros[j] = numeros[j + 1];
                numeros[j + 1] = temp;
            }
        }
    }
}

bubbleSort(arrayNumeros)

// console.table(arrayNumeros)

// asignacion por referencia vs valores 
//! no va en examen

/* let persona = {
    nombre : 'Martin'
}

let persona2 = persona;

persona2.nombre = 'Juan'
persona2.edad = 11


console.log(persona);
console.log(persona2);
 */



















/* 
!NO USAR EN EXAMEN COSAS QUE NO SE VIERON EN LA MATERIA IMPERATIVA
FILTER
FIND
REDUCE
MAP
*/