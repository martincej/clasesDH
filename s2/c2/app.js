/* 
    * FUNCIONES
*/


/* function saludar(){
    console.log('Hola soy una funcion sin retorno');
} */

// saludar()


/* function sumar(a, b) {
    let resultado = a + b 
    return resultado   
} */


// * declarada

function sumarD(a, b) {
    return a + b    
}

// * expresada
let sumarE = function(a, b) {
    return a + b    
}


// * flecha
let sumarF = (a, b) => {
    return a + b    
}

let sumarF2 = (a, b) => a + b  

let sumarF3 = () => 2 + 4   

let sumarF4 = a => 2 + a    

console.log(sumarF2(2,3))  //



// invocaciones
/*  console.log(sumar(2,3))  // 5
console.log(sumar(21,3))  // 
console.log(sumar(2,31))  // 
console.log(sumar(23,32))  // 
console.log(sumar(24,4))  // 
console.log(sumar(1,0))  // 
console.log(sumar(-1,-2))  // 
console.log(sumar(-2,-3))  //   */