/* 
 CLASE 7
 * OPERADORES | CONDICIONALES
 * funcion de pg con condicionales -> operador de desigualdad estricta
*/

// falsy  and truthy

// AND
//let resultadoAnd = 3 < 2 && 5 === 5 && 4 < 5

// let resultadoAnd = 'gato' && 'perro' && 'condicionales'

// console.log(resultadoAnd);



// OR
// let resultadoOr =  3 > 3 || 5 === 8 || 4 === 4

// let resultadoOr = 'gato' || 'perro' || 'condicionales'

// console.log(resultadoOr);
// console.log(resultadoAnd);


let edad = 18

/* if (edad < 18) {
    console.log("Puede pasar")
} else {
    console.log("No puede pasar")
}
 */

if (edad >= 18) console.log('Puede Pasar');

let resTernario = edad > 18 ? "Puede pasar" : "No puede pasar"
console.log(resTernario);


// RETORNAR BOOLEANO

function puedePasar(nombre) {

    return nombre !== 'Cosme Fulanito'

    // if(nombre === 'Cosme Fulanito') {//true
    //     return false
    // }else{
    //     return true
    // }
}

/* console.log(puedePasar('Martin'))
console.log(puedePasar('Cosme Fulanito')) */

/* let nombre = 'Erick'

if (nombre === 'Martin') {
    console.log('Hola profe');

} else if (nombre === 'Cleydi') {
    console.log('Hola Cley');
}
else if (nombre === 'Erick') {
    console.log('Hola Erick');
}
else {
    console.log('USUARIO DESCONOCIDO');
}
 */


/* switch (nombre) {
    case 'Martin':
        console.log('Hola profe');
        break;

    case 'Cleydi':
        console.log('Hola Cley');
        break;
    case 'Erick':
        console.log('Hola Erick');
        break;

    default:
        console.log('USUARIO DESCONOCIDO');
} */


