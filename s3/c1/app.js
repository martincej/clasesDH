/* 
 CLASE 7
 * OPERADORES LOGICOS
 * CONDICIONALES
 
*/

// truthy and falsy   

//AND

let resultadoAnd = 3 > 2 && 6 === 7

// let resultadoAndString = null && 'música' && 'aire'

// console.log(resultadoAndString);


//OR
let resultadoOr = 3 < 2 || 6 === 7

// let resultadoOrString = 'mate' || 'música' || 'aire'

// console.log(resultadoOrString);
// console.log(resultadoOr);


/* 
* NO SE EVALUA
let res = 'mclau' > 'martin'
console.log(res); 

false | 3 == 4  

let resultadoOrString = 'mate' || 'música' || 'aire'
*/

// condicionales


/* let edad = 17


    if (edad >= 18) {
        console.log('hola entraste al if');
    }else{
        console.log('hola NO entraste al if');
    
    }  */
/* 
let dudas = false

if (dudas) {
    console.log('Martin esta :)');
}else{
    console.log('Martin esta :(');

} */


/* 
Debemos completar la función puedePasar para que, analizando el nombre que recibe por parámetro, determine si la persona puede pasar o no. Si la persona se llama "Cosme Fulanito"", no lo dejará pasar y lo indicará retornando false; si la persona se llama de otra forma, lo dejará pasar y lo indicará retornando true.

*/

function puedePasar(nombre) {
    //return nombre !== 'Cosme Fulanito'

     if (nombre === 'Cosme Fulanito') {
         return false
     }else{
         return true
     }
}

/* console.log(puedePasar('Martin'))
console.log(puedePasar('Cosme Fulanito')) */

let nombre = 'Kevin'

/* switch (nombre) {
    case 'Martin':
        console.log('Hola Martin');
        break;
    case 'Kevin':
        console.log('Hola Kevin!!!!!!!');
        break;
    case 'Natalia':
        console.log('Hola Nati');
        break;
    default:
        console.log('USUARIO DESCONOCIDO');
} */

let exp = 5 < 8

if (exp) console.log('es verdader');


let ternario = exp ? 'es verdader' : ''

console.log(ternario);

