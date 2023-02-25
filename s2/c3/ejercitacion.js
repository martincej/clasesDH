/* 
calculadora nivel 1

//2. Crear una función sumar, esta deberá recibir dos parámetros y retornar la suma de los mismos.

3. Crear una función restar, la cual deberá recibir dos parámetros y retornar la
resta del primero menos el segundo.
4. Crear una función multiplicar, la misma deberá recibir dos parámetros y
retornar el resultado de su multiplicación.
5. Crear una función dividir, la cual recibirá dos parámetros y retornar el resultado
de la división del primero sobre el segundo.
*/

/* DECLARACIONES */
function sumar(a ,b){
    let res = a + b 
    return res

}

function restar(a ,b){
    return a - b
}

function multiplicar(a ,b){
    return a * b
}

function dividir(a ,b){
    return a / b
}

/* arrow funtion */

const sumarF = (a, b) => a + b
const restarF = (a, b) => a - b
const dividirF = (a, b) => a / b
const multiplicarF = (a, b) => a * b

/* 
Crear una función que se llame cuadradoDeUnNumero, la cual recibe un
número como parámetro y deberá retornar ese número elevado al cuadrado.
Importante: cuadradoDeUnNumero() deberá utilizar la función multiplicar() para
calcular el cuadrado del parámetro ingresado a cuadradoDeUnNumero()
*/

const cuadradoDeUnNumero = nro => multiplicarF(nro,nro)

function cuadradoDeUnNumeroD(nro){
    return multiplicarF(nro,nro)
}


/* INVOCACIONES */
console.log('-------------- Testeo de Operaciones / Calculadora --------------')
/* console.log(sumarF(4,2))
console.log(restarF(4,2))
console.log(dividirF(4,2))
console.log(multiplicarF(4,2))
*/

/* console.log(cuadradoDeUnNumeroD(2))
console.log(cuadradoDeUnNumeroD(3)) */
