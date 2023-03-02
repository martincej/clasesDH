/* 
    * FUNCIONES

    *1 - DECLARADAS
    2 - EXPRESADAS
    3 - ARROW
*/

// declarar una funcion que IMPRIMA por consola un mensaje
function saludar(){
    console.log('Hola soy una función sin retorno');
}
// saludar();


// declarar una funcion que RETORNE  un mensaje

function saludar2(){
    return 'Hola soy una función con retorno'
}

function saludar3(parametro){
    console.log(parametro);
    return 'Hola '+ parametro +', soy una función con retorno y parametro'
}

/* 
console.log(saludar3('Martin'));
console.log(saludar3('Damian'));
console.log(saludar3('Anmary')); */



const saludarExpresada = function(nombre, apellido){
    return 'Hola ' + nombre + ' ' + apellido
}

console.log(saludarExpresada('Ailin', 'Stanley'));

const saludarFlecha = (nombre, apellido) => {
    return 'Hola ' + nombre + ' ' + apellido
}

const saludarFlecha2 = (nombre, apellido) => 'Hola ' + nombre + ' ' + apellido


// console.log(saludarFlecha2('Ailin', 'Waterdog'));

