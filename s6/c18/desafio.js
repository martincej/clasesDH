/* 
 *C18
 *MATRICES
*/

/* 
 Lo que nos solicitan es dar el total de gastos en una semana. Recordemos que cada fila representa una semana, es decir, si nos indican semana 2 tenemos que sumar la fila 1 de la matriz. Recordar que las matrices comienzan siempre en posición 0.
*/

let gastos = [
    [10, 2500, 900, 1600, 2800, 3650, 1100], // 0
    [3, 2500, 333, 123, 123, 22, 444],       // 1
    [3, 2500, 455, 1600, 455, 1600, 455],
    [3, 1, 1, 1, 1, 1, 1]
];


console.table(gastos);

console.log('**************');


// SUMATORIA DE UNA SEMANA EN PARTICULAS

const sumarGastosSemana = (matriz, semana) => {
    //    console.log(matriz[semana - 1]);
    let arraySemana = matriz[semana - 1]
    let acc = 0;
    for (let j = 0; j < arraySemana.length; j++) {
        acc += arraySemana[j]
    }
    return acc
}


/* 
    console.log(sumarGastosSemana(gastos, 1))
    console.log(sumarGastosSemana(gastos, 4))
*/

// TODOS LOS DOMINGOS POR EJEMPLO
const sumarGastosDia = (matriz, dia) => {
    let acc = 0;
    for (let i = 0; i < matriz.length; i++) {
        acc += matriz[i][dia - 1]
    }
    return acc
}

/* 
    console.log(sumarGastosDia(gastos, 1));
    console.log(sumarGastosDia(gastos, 7)); 
*/








/* 
¿Cuánto gastamos los días viernes de este mes ?
gastos = 3650 + 1750 + 4500 + 1270

*/