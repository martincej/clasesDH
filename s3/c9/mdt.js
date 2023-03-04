const prompt = require("prompt-sync")({ sigint: true });


/* 
Escribí un programa que le pida al usuario ingresar una frase y
la imprima en la consola.
Recordá que para pedirle al usuario que escriba una frase
debés utilizar el método prompt() y para escribir en la consola
debés utilizar el método console.log().

*/

/* let frase = prompt('Ingrese una Frase: ')


function imprimirFrase(fraseParam) {
    console.log(fraseParam);
}

imprimirFrase(frase) */


let usuario = prompt('Ingrese una nombre de usuario: ')


function saludarUsuario(usuarioP) {
    console.log('Hola ' + usuarioP + ' !!!');
}

saludarUsuario(usuario)