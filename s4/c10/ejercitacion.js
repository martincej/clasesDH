/* 
Desarrollar una función que realice la verificación de cada elemento del
array de correos pendientes. En caso de validar, agregar al
arrayCorreoAdmitidos. 
?Caso contrario, agregar al arrayCorreoDescartados
*/


let arrayCorreosPendientes = [
    'iroman@digitalhouse.com', 
    'loki%digitalhouse.com', 
    'loki@digitalhouse.com',
    'thanosdigitalhouse.com', 
    'thanos@digitalhouse.com'];
/* array de correos admitidos */

let arrayCorreosAdmitidos = [
    'thor@digitalhouse.com',
    'tucuMan@digitalhouse.com',
    'wanda@digitalhouse.com'
];


let arrayCorreosDescartados = [];


function verificarCorreos(correos) {
    //tu código ....
    for (let i = 0; i < correos.length; i++) {
        // console.log(correos[i]);
        // miTexto.indexOf(textoABuscar): 
        if (correos[i].indexOf('@') !== -1) { // correo ok
            arrayCorreosAdmitidos.push(correos[i])
        }else{
            arrayCorreosDescartados.push(correos[i])
        }
    }
}
console.log('verificando....');
console.log(); 
verificarCorreos(arrayCorreosPendientes)


 console.log("*Correos admitidos: cantidad: " + arrayCorreosAdmitidos.length )
console.table(arrayCorreosAdmitidos);
console.log();
console.log("*Correos Descartados: cantidad: " + arrayCorreosDescartados.length)
console.table(arrayCorreosDescartados); 