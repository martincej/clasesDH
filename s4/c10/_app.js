/* 
c10
    *Array
    *String
*/


let pelisFavoritas = ['Star Wars', 'Kill Bill', 'Alien', 'Toy story'];
        //?INDICES         0            1          2         3

/* let nombre = 'Ariel Ibarbalz' 

console.log(nombre.length); */
/* console.log(nombre[0]);
console.log(nombre[1]);
console.log(nombre[2]); */

/* for (let i = 0; i < nombre.length; i++) {
    console.log(nombre[i]);    
}
 */
/* console.table('LISTANDO: ' + pelisFavoritas.length + ' Pelis');
console.table(pelisFavoritas); */

/* 
console.log(pelisFavoritas[0])
console.log(pelisFavoritas[1])
console.log(pelisFavoritas[2])

console.log(pelisFavoritas[3])  */// indice que no Existe tenemos 


// console.log(pelisFavoritas.length); // long de un array


/* for (let i = 0; i < pelisFavoritas.length; i++) {
   console.log(pelisFavoritas[i])
} */

/* 
B  Nivel 2
- Declarar 3 arrays de edades por ejemplo -> [10, 9, 8, 22, 55, 80, 5, 63, 29, 9] , luego desarrollar las siguientes funciones:

1 - Funcion que reciba un array de edades y retorne el promedio 
*/

let edades = [10, 9, 8, 22, 55, 80, 5, 63, 29, 9];

let edades2 = [10, 5, 63, 29, 9];

function promedioEdades(arrayEdades) {
    // sumar todas las arrayEdades y luego dividir en la longitud
    let acumulador = 0;
 
    for (let i = 0; i < arrayEdades.length; i++) {
        // const edad = arrayEdades[i];
        acc = acumulador + arrayEdades[i];

    }
    
    return acumulador / arrayEdades.length 
   
}

console.log(promedioEdades(edades));
console.log(promedioEdades(edades2));