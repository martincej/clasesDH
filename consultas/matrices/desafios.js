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

    for (let i = 0; i < matriz.length; i++) {

        for (let j = 0; j < matriz[i].length; j++) {
            console.log(matriz[i][j]);            
        }        
    }
}
pares(matriz)

/* 
2 - Desarrollar una funcion que reciba una matriz cuadrada por parametro
* debe retornar un array con los elementos impares
*/



/* 
3 - Desarrollar una funcion que reciba una matriz cuadrada por parametro
* debe retornar un array con los elementos mayor a 20
*/


/* 
4 - Desarrollar una funcion que reciba una matriz cuadrada por parametro
* debe retornar un array con los elementos de la primer diagonal
*/


