/* 
c21
*Cierre de semana
* BubbleSort 1/2
* Matrices   1/2
*/

let numerosDes = [100, 20, 3, 4]
let numerosOrdenadosAsc = [1, 2, 3, 4]

//*true si esta ASC
//false caso contrario

const isOrderAsc = (array) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] > array[i + 1]) { // si se cumple el array no es asc
            return false            
        }
    }
    // si se cumple el array no es asc
    return true
}



console.log(isOrderAsc(numerosDes)); // false
console.log(isOrderAsc(numerosOrdenadosAsc)); // true