/*  4 - Funcion que reciba un array de edades y retorne 
?true si encuentra algun elemento repetido 
? false caso contrario */

let edades1 = [1,2,3,4]
let edades2 = [1,2,3,4,1]
let edades3 = [2,2,3,4]

const repetido = (array) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[i] === array[j]) {
                console.log(array[i]);
            }              
        }        
    }
}





const repetido2 = arrayEdades => {
    let edadRepetida = []
    
    for (let i = 0; i < arrayEdades.length; i++) {
        const edad = arrayEdades[i];
        
        if (edadRepetida.includes(edad)) { // true si encontraba
            return true
        }else{
            edadRepetida.push(edad)
        }
    }
    return false
}


console.log(repetido2(edades3));
// console.log(repetido(edades2));


/* let names = ['Nelson', 'gabrieL', 'marTin']

 let toUpper = arr => {
    for(let i = 0; i < arr.length; i++){
        arr[i] = arr[i].toUpperCase();
    }
    return arr;
}

console.log(toUpper(names))
console.log(names); */