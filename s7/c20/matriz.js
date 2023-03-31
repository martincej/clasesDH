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




let mice = [
    ['🐭 lucas', '🐭 camila', '🐭 pedro'],
    [ '🐭 juan', '🐭 luisa', null]
];

// console.table(mice);

// console.log(mice[1][1]); // Luisa

// mice[1][2] = '🐭 Jerry'

console.table(mice);

function saludar(mice) {
    for (let i = 0; i < mice.length; i++) {
        for (let j = 0; j < mice[i].length; j++) {
            console.log('Hola soy ' + mice[i][j]);
        }        
    }
}
// saludar(mice)


function replaceNullX(mice) {
    for (let i = 0; i < mice.length; i++) {
        for (let j = 0; j < mice[i].length; j++) {
            if (mice[i][j] === null) {
                mice[i][j]= '🐭 ???';
            }
        }        
    }
}
replaceNullX(mice)
console.table(mice);
