/* 
 CLASE 8
 * Bucles ➰
 `` While
 do while
*/

// FOR




/* for(let i = 0; i < 4; i++){
    console.log('iteración: ' + i);
    // console.log(`iteración: ${i}`);
}
 */

/* 
En este ejercicio nuestra tarea es completar la función noParesDeContarImparesHasta. Esta función recibe un número X por parámetro y cuenta la cantidad de números impares que hay desde el número 0 hasta el número X (inclusive) y luego retorna ese valor. Para resolver la ejercitación debemos utilizar el for .

*/

function noParesDeContarImparesHasta(numero){
    let cantidadImpares = 0
    for(let i = 0; i <= numero; i++){
       if (i % 2 !== 0) {
        cantidadImpares++
       }
    }
    return cantidadImpares
}

// console.log(noParesDeContarImparesHasta(4)) 
// imprime por pantalla el valor 2, que se obtiene de contar 1 y 3. 
//Los valores 0, 2 y 4 no los contabiliza por ser números pares.

let contador = 0

/* while (false) {
    console.log('itaracion: ' + contador);
    contador++
} */

/* let dudas = false

do {
    console.log('Dudas ???');   
}while (dudas);
 */


/* 

*/