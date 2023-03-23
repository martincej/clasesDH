/* 
 *C18
 *MATRICES
*/


/* 
 Lo que nos solicitan es dar el total de gastos en una semana. Recordemos que cada fila representa una semana, es decir, si nos indican semana 2 tenemos que sumar la fila 1 de la matriz. Recordar que las matrices comienzan siempre en posición 0.
*/

let gastos = [
    [1135, 2500, 900, 1600, 2800, 3650, 1100], // 0
    [333, 2500, 333, 123, 123, 22, 444],       // 1
    [44, 2500, 455, 1600, 455, 1600, 455],
    [1, 1, 1, 1 , 1 ] // 3
];


console.table(gastos);

console.log('**************');

const sumarGastosSemana = (matriz, semana) => {
    // console.log(matriz[semana]);
    let arraySemana = matriz[semana - 1]
    let acc = 0
    for (let i = 0; i < arraySemana.length; i++) {
        acc += arraySemana[i];
    }
    return acc;
}

console.log(sumarGastosSemana(gastos,4))











/* 
¿Cuánto gastamos los días viernes de este mes ?
gastos = 3650 + 1750 + 4500 + 1270

*/