/* 
CLASE CONSULTA
*RESOLVEREMOS SUS DUDAS, 
*ENVÍE EL ENUNCIADO AL CANAL DE DUDAS
*/

/* 
CREAR UNA FUNCION QUE RECIBA UN ARRAY POR PARAMETRO
RETORNE TRUE SI EL ARRAY ESTA ORDENADO ASC, FALSE CASO CONTRARIO :)
*/

function noParesDeContarImparesHasta(numero){
    // Escribe aqui tu código
    let cantImpares = 0
    for (let i = 0; i <= numero; i++) {
      if (i % 2 !== 0) { // i es impar ?
        // console.log(i);
        cantImpares++
      }      
    }

    return cantImpares
}

// console.log(noParesDeContarImparesHasta(4)) // imprime por pantalla el valor 2, que se obtiene de contar 1 y 3. Los valores 0, 2 y 4 no los contabiliza por ser números pares. !==

/* 
Loop de impares con palabra

Deberás crear una función llamada loopDeImpares que reciba como parámetros un
número y una palabra, y haga un loop de 0 a 100 mostrando en la consola cada número
del loop. 
?Luego, modificar el código para que, en caso de que ese número sumado con el
número pasado por parámetro sea impar, muestre en la consola la palabra pasada por
parámetro.
*/

function loopDeImpares(numero, palabra){
    for (let i = 0; i <= 100; i++) {
        if ((numero + i) % 2 !== 0) {
            console.log(palabra);
        }else{
            console.log(i);
        }
    }
}

// loopDeImpares(2,'hola la suma es impar')

/* 
3 - Funcion que reciba un array de edades  [10, 9, 8, 22, 55, 80, 5, 63, 29, 9] 
 y retorne el menor elemento // 5
*/

const edades = [10, 9, 8, 22, 55, 80, 5, 63, 1, 9];

const menor =  arrayEdades => {
    let menor = arrayEdades[0]
   
    for (let i = 0; i < arrayEdades.length; i++) {
        if (menor > arrayEdades[i]) {
            menor = arrayEdades[i]
        }
    }

    return menor
}

// console.log(menor(edades));

/* 
6 - Funcion que reciba un array de edades y retorne un objeto literal con dos propiedades que contengan un array
   {
      edadesMenor : "// edades menor a 18",  
      edadesMayor : "// edades mayor a 18"
   }
*/

function mayorMenor (arrayEdades){
    let edadesMenor = []
    let edadesMayor = []
   
    for (let i = 0; i < arrayEdades.length; i++) {
        if (arrayEdades[i] < 18) {
            edadesMenor.push(arrayEdades[i])
        }else{
            edadesMayor.push(arrayEdades[i])
        }
    }

    return {
        edadesMenor : edadesMenor,  
        edadesMayor : edadesMayor
     }
}

console.table(mayorMenor(edades))