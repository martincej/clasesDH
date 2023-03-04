/* 
    Crear una función esMayor() que reciba 2 numeros por parametro, la misma deberá evaluar 
    ?- si el primer es mayor o igual retornar el booleano true 
    ?- caso contrario retornar el booleano false

    Pistas: puedes resolver sin utilizar condicionales

    *desarrollar la solución con las 3 funciones explicadas en clase (declarada, expresada y flecha)

*/

function esMayor(n1, n2) {

    /* if (n1 >= n2) {
        return true
    }else{
        return false
    } */
    //return n1 >= n2 ? true : false
    return n1 >= n2
}
/* console.log(esMayor(5,6)) */
/* console.log(esMayor(10,6)) */


/* 

Dejo Desafío para quien quiera practicar,                                                                          

A - Nivel 1

?1 - Desarrollar una función que reciba 2 numeros y retorne la suma de ambos
*2 - Desarrollar una función que reciba 2 numeros y 
     retorne la suma de ambos, si el primer parametro es mayor, 
     caso contrario retornar la resta.

     *3 - Desarrollar una función que reciba 4 numeros y calcular la suma de total
     si el el resultado es mayor o igual a 7, retornar 'Aprobado', 
     caso contrario retornar 'otra chance '.

4 - Desarrollar una función que reciba 4 numeros y calcular la suma de total
     si el el resultado es par, retornar la mitad del total,  
     caso contrario retornar el doble del total.
*/

const sumar = (a, b) => a + b;

const sumarSi = (a, b) => {
    if (a > b) {
        return a + b
    } else {
        return a - b
    }
}

const mayorQue = (a, b) => a > b ? a + b : a - b;

/* console.log(mayorQue(2, 2)); // 0
console.log(mayorQue(6, 2)); // 8 */

function promedio(a,b,c,d) {
    let prom = (a + b + c + d) / 4
    console.log('Su promedio es: ' + prom);
   /*  if (prom >= 7) {
        return 'Aprobadisimooo!! :)'
    }else{
        return 'Otra chance :('
    } */

    return prom >= 7 ? 'Aprobadisimooo!! :)' : 'Otra chance :('
}

console.log(promedio(4,4,8,4))
console.log(promedio(8,8,8,9))