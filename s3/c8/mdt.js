/* 
 Escribir un programa que muestre la sumatoria de todos los números
 entre el 0 y el 100
*/

function sumatoria(a, b) {
    let suma = 0;
    for (let i = a; i <= b; i++) {
        // suma += i
        suma = suma + i
    }
    return suma
}


const fibbo = (num) => {
    let a = 0;
    let b = 1;
    let c;
    console.log(a);
    console.log(b);

    for (let i = 0; i < num - 2; i++) {
        c = a + b;
        a = b;
        b = c;
        console.log(c);
    }
}
fibbo(10)

/* con do while */

/* let fibonacci=nro=>{
    let actual=1
    let anterior=0
    let suma=0
    do{
        console.log(actual)
        suma=anterior+actual
        anterior=actual
        actual=suma
    }while(actual<=nro)
}
fibonacci(1000) */



function factorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    }
    for (let i = num - 1; i >= 1; i--) {
        num *= i;
    }
    return num;
}

console.log(factorial(5)); // Output: 120