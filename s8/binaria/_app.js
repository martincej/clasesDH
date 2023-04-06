/* /* 
    ALGORITMOS DE BUSQUEDAS
    * LINEAL 
    * BINARIA
*/

let listaDesordenada = [10, 3, 2, 4, 5, 6, 8, 9, 7];

listaDesordenada.sort((a, b) => a - b)

let listaOrdenada = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const buscarLineal = (array, elem) => {
    let cont = 0

    for (let i = 0; i < array.length; i++) {
        cont++
        console.log(cont);

        const element = array[i];
        if (element === elem) {
            return i
        }
    }


    return null
}

/* console.log(buscarLineal(listaOrdenada, 6));
console.log(buscarLineal(listaOrdenada, 20));
 */


const buscarBinaria = (array, elem) => {
    let indiceInicial = 0
    let indiceFinal = array.length - 1
    let cont = 0

    while (indiceInicial <= indiceFinal) { // true
        cont++
        console.log(cont);

        let indiceMedio = Math.floor((indiceInicial + indiceFinal) / 2)

        let elemenEncontrado = array[indiceMedio]

        if (elemenEncontrado === elem) {
            return indiceMedio
        }

        if (elem > elemenEncontrado) {
            indiceInicial = indiceMedio + 1
        }

        if (elem < elemenEncontrado) {
            indiceFinal = indiceMedio - 1
        }
    }

    return null
}

// console.log(buscarBinaria(listaOrdenada, 6));
// console.log(buscarBinaria(listaOrdenada, 20));
// console.log(buscarBinaria(listaDesordenada, 5));

let personas = [
    {
        id: 1,
        nombre: "Ale",
        edad: 15
    },
    {
        id: 2,
        nombre: "Javi",
        edad: 83
    },
    {
        id: 3,
        nombre: "Luis",
        edad: 26
    },
    {
        id: 4,
        nombre: "Dan",
        edad: 16
    },
    {
        id: 5,
        nombre: "Tito",
        edad: 22
    },
    {
        id: 6,
        nombre: "Marina",
        edad: 76
    },
    {
        id: 7,
        nombre: "Susy",
        edad: 35
    },
    {
        id: 8,
        nombre: "John Wick",
        edad: 25
    },
];  


const ordenarPersonasPorEdad = (edades) =>{
    let temp;
    for (let i = 0; i < edades.length; i++) {
        for (let j = 0; j < edades.length - 1; j++) {
            if(edades[j].edad > edades[j+1].edad){
                temp = edades[j];
                edades[j] = edades[j+1];
                edades[j+1] = temp;
            }
        }   
    }
}
// console.table(ordenarPersonasPorEdad(personas));
// ordenarPersonasPorEdad(personas); 

personas.sort((a,b) => a.edad - b.edad)

/** BUSQUEDA BINARIA */
const buscarPorEdadBinaria = (personas, edad) =>{
    let low = 0;
    let high = personas.length - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        console.log('indice calculado: ' + mid);
        if (personas[mid].edad === edad) {
            // console.log(personas[mid].nombre);
            return personas[mid];
        } else if (personas[mid].edad < edad) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    console.log(`No se encontró ninguna persona con edad ${edad}.`);
    return null
}

console.log(buscarPorEdadBinaria(personas, 16))
console.log(buscarPorEdadBinaria(personas, 25))
