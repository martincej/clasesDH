let numeros = [21, 2, 1, -9, 3];

const bubbleSortDesc = arrayNumeros => {
    let vueltas = 0
    for (let i = 0; i < arrayNumeros.length; i++) { // 3
        for (let j = 0; j < arrayNumeros.length - 1; j++) { // 3
            // console.log(`${arrayNumeros[j]} - ${arrayNumeros[j + 1]} `);
            vueltas++
            //swap
            if (arrayNumeros[j] < arrayNumeros[j + 1]) {
                let auxiliar = arrayNumeros[j]
                arrayNumeros[j] = arrayNumeros[j + 1]
                arrayNumeros[j + 1] = auxiliar

            }
        }
    }
    console.log('vueltas: ' + vueltas);
}
// bubbleSortDesc(numeros)



const bubbleSort = arrayNumeros => {
    for (let i = 0; i < arrayNumeros.length; i++) { // 5
        
        for (let j = 0; j < arrayNumeros.length - 1; j++) { // 4
            
            if (arrayNumeros[j] > arrayNumeros[j + 1]) {
                let auxiliar = arrayNumeros[j]
                arrayNumeros[j] = arrayNumeros[j + 1]
                arrayNumeros[j + 1] = auxiliar
            }
        }
    }
}

// bubbleSort(numeros)

numeros.sort((a,b) => b - a);
/*
NO VA EN EXAMEN
numeros.sort
numeros.filter
numeros.reduce
numeros.forEach
numeros.find 

*/

// 10 - 5 = 5
// 1 - 5 =  -4
console.table(numeros);