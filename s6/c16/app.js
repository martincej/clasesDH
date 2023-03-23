/* 
 Clase 16
 * Algoritmos
 * Matrices :)
*/

const array = [1, 2, 3]
array[0] = 10
const array2 = [{}, {}, {}]


const matriz = [ //   0,1,2 
    [1, 2, 3], // fila -> 0
    [2, 9, 4], // fila -> 1
    [6, 7, 8]  // fila -> 2
]

// console.log(array[1]);

console.table(matriz);

/*
 console.log(matriz[0][2]);

 matriz[1][1] = 9
 
console.table(matriz);

console.log(matriz[1][1]); */

function iterar(matriz) {
    for (let i = 0; i < matriz.length; i++) {
        // console.log(matriz[i]);
        for (let j = 0; j < matriz[i].length; j++) {
            console.log(matriz[i][j]);
        }
    }
}



function iterar2(matriz) {

    for (let i = 0; i < matriz.length; i++) {
        let arrayFila = matriz[i]  // se que arrayFila es un array [#,#,#]

        for (let j = 0; j < arrayFila.length; j++) {
            let numeroFinal = arrayFila[j]

        }
    }

}


function mayor5(matriz) {
    let mayores = []
    for (let i = 0; i < matriz.length; i++) {
        let arrayFila = matriz[i]  // se que arrayFila es un array [#,#,#]

        for (let j = 0; j < arrayFila.length; j++) {
            let numeroFinal = arrayFila[j]
            if (numeroFinal > 5) {
                mayores.push(numeroFinal)
            }
        }
    }

    return mayores

}
console.log('***********');
console.log(mayor5(matriz))

for (let columna = 0; columna < matriz[0].length; columna++) {
    for (let fila = 0; fila < matriz[fila].length; fila++) {
        console.log(matriz[fila][columna]);
    }
}