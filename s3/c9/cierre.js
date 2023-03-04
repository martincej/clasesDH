/* 
 CIERRE SEMANA 3
 *Operadores lógicos
 *Condicionales: If/else - If Ternario / Switch
 *For loop / while / do while
*/

/* 
En este ejercicio nuestra tarea es completar la función noParesDeContarImparesHasta. 
?Esta función recibe un número X por parámetro y cuenta la cantidad de números impares que hay desde el número 0 hasta el número X (inclusive) y luego RETORNA ese valor. Para 
resolver la ejercitación debemos utilizar el for .

*/

const noParesDeContarImparesHasta = n => {
    let cantImpares = 0;
    for (let i = 0; i <= n; i++) {   
        if (i % 2 !== 0) { // si i es impar
            cantImpares = cantImpares + 1
        }
    }

    return cantImpares
}

/* console.log(noParesDeContarImparesHasta(5));
console.log(noParesDeContarImparesHasta(1)); */

const noParesDeContarParesHasta = n => {
    let cantPares = 0;
    for (let i = 0; i <= n; i++) {   
        if (i % 2 === 0) { // si i es par
           // console.log(i); // para verificar que pasa por el if
            cantPares = cantPares + 1
        }
    }

    return cantPares
}

console.log(noParesDeContarParesHasta(4))