/* 
B  Nivel 2
- Declarar 3 arrays de edades por ejemplo -> [10, 9, 8, 22, 55, 80, 5, 63, 29, 9] , luego desarrollar las siguientes funciones:

1 - Funcion que reciba un array de edades y retorne el promedio 
2 - Funcion que reciba un array de edades y retorne el mayor elemento // 80
3 - Funcion que reciba un array de edades y retorne el menor elemento // 5
4 - Funcion que reciba un array de edades y retorne true si encuentra algun elemento repetido o false caso contrario
5 - Funcion que reciba un array de edades y una edada buscar, retorne el primer índice si encuentra coincidencia o null caso contrario
6 - Funcion que reciba un array de edades y retorne un objeto literal con dos propiedades que contengan un array
   {
      edadesMenor : "// edades menor a 18",  
      edadesMayor : "// edades menor a 18"
   }
   
*/

let edades = [10, 9, 8, 22, 55, 80, 5, 63, 29, 9]
let edades1 = [2, 2]


function promedio(arrayEdades) {

    let acum = 0
    for (let i = 0; i < arrayEdades.length; i++) {
        acum = acum + arrayEdades[i]
    }
    return acum / arrayEdades.length
}

/* console.log(promedio(edades))
console.log(promedio(edades1)) */


/* let numeros = [1, 2, 3, 4, 5, 6]
let pares = [];
let impares = [] */

/* function parImpar(n){
  for (let i = 0; i < numeros.length; i++) {
    numeros[i] % 2 === 0 ? pares.push(numeros[i]) : impares.push(numeros[i]);
  }
  n ==='par'? console.table(pares):console.table(impares)

}

parImpar('par');
parImpar('impar'); */



let numeros = [1, 2, 3, 4, 5, 6]

let numeros2 = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6]

function imparesPares(arrayNumeros) {
    let impares = [];
    let pares = [];
    for (let i = 0; i < arrayNumeros.length; i++) {
        if (arrayNumeros[i] % 2 === 0) {
            pares.push(arrayNumeros[i]);
        } else {
            impares.push(arrayNumeros[i]);
        }
    }

    return {
        impares: impares,
        pares: pares
    };
}


console.log(imparesPares(numeros));
console.log(imparesPares(numeros2));