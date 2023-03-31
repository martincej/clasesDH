/* 
Dejo algunos ejercicios extras de array bidimensional
Cualquier consulta me etiquetan 🧉
*/

let matriz = [
    [14, 11, 15],   // indices --> 0
    [24, 34, 22],  // indices --> 1
    [33, 30, 21]  // indices --> 2
]


/* 
1 - Desarrollar una funcion que reciba una matriz cuadrada por parametro
* debe retornar un array con los elementos pares
*/

const pares = matriz => {
    let arrayPares = []
    let arrayImpares = []

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if (matriz[i][j] % 2 === 0) {
                arrayPares.push(matriz[i][j]);
            } else {
                arrayImpares.push(matriz[i][j]);
            }
        }
    }


    return {
        arrayPares,
        arrayImpares
    }
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
                arrayImpares.push(matriz[i][j]);
            }
        }
    }
    return arrayImpares
}

// console.log(impares(matriz))



/* 
3 - Desarrollar una funcion que reciba una matriz cuadrada por parametro
* debe retornar un array con los elementos mayor a 20
*/

const mayorA = (matriz, minimo) => {
    let arrayMayores = []

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if (matriz[i][j] > minimo) {
                arrayMayores.push(matriz[i][j]);
            }
        }
    }

    return arrayMayores
}

/* 
    console.log(mayorA(matriz, 20))
    console.log(mayorA(matriz, 10))
*/

/* 
4 - Desarrollar una funcion que reciba una matriz cuadrada por parametro
* debe retornar un array con los elementos de la primer diagonal
*/

console.table(matriz);

let indice = 0

/*
    console.log(matriz[0][0]);
    console.log(matriz[1][1]);
    console.log(matriz[2][2]);
*/

const diagonal = matriz => {
    let arrayDiagonal = []
    let vueltas = 0
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            vueltas++
            if (i === j) {
                // console.log(i +' - '+ j + ' => ' + matriz[i][j]);
                arrayDiagonal.push(matriz[i][j])
            }
        }
    }
    console.log(vueltas);
    return arrayDiagonal
}



const diagonalFor = matriz => {
    let arrayDiagonal = []
    let vueltas = 0
    
    for (let i = 0; i < matriz.length; i++) {
        vueltas++
        arrayDiagonal.push(matriz[i][i])

    }
    console.log(vueltas);
    return arrayDiagonal
}
// console.log(diagonalFor(matriz))

/* 
4 - Desarrollar una funcion que reciba una matriz cuadrada por parametro
* debe retornar la suma de la primer fila
* debe retornar la suma de la segunda fila
* debe retornar la suma de la tercera fila
*/

const primerFila = (matriz, fila) => {
    let sumatoria = 0
    for (let i = 0; i < matriz.length; i++) {
        sumatoria = sumatoria + matriz[fila - 1 ][i]        
    }
    return sumatoria
}

/* 

console.log(primerFila(matriz, 1))
console.log(primerFila(matriz, 2))
console.log(primerFila(matriz, 3)) 

*/