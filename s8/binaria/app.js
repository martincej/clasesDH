/* 
    ALGORITMOS DE BUSQUEDAS
    * LINEAL 
    * BINARIA
*/

let arrayD = [10, 3, 2, 4, 5, 6, 8, 9, 7];

let arrayO = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        //                   i     m      f  


        
// console.log(arrayD.indexOf(2));

const bLineal = (array, item) =>{
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        console.log('itera: ' + i);
        if (element === item) {
            return i
        }
    }
    return null
}

/* 
console.log(bLineal(arrayO,3));
console.log(bLineal(arrayO,10));
*/
// console.table(arrayO);


const bBinaria = (array,item) => {
    let indiceInicial = 0
    let indiceFinal = array.length - 1
    let cont = 0
    while(indiceInicial <= indiceFinal){ // true
       console.log('itera: ' + cont++);

        let indiceMedio = Math.floor((indiceInicial + indiceFinal) / 2)
        
        const elemPosible = array[indiceMedio]

        if (elemPosible === item) {
            return indiceMedio
        }

        if (elemPosible < item) {
            indiceInicial = indiceMedio + 1
        }

        if (elemPosible > item) {
            indiceFinal = indiceMedio - 1
        }

    } 

    return null
}
// console.log(bBinaria(arrayO,3))
// console.log(bBinaria(arrayO,10))


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
console.table(personas);


const bBinariaPers = (array,edad) => {
    let indiceInicial = 0
    let indiceFinal = array.length - 1
    let cont = 1
    while(indiceInicial <= indiceFinal){ // true
       console.log('itera: ' + cont++);

        let indiceMedio = Math.floor((indiceInicial + indiceFinal) / 2)
        
        const elemPosible = array[indiceMedio].edad

        if (elemPosible === edad) {
            return array[indiceMedio]
        }

        if (elemPosible < edad) {
            indiceInicial = indiceMedio + 1
        }

        if (elemPosible > edad) {
            indiceFinal = indiceMedio - 1
        }

    } 
    console.log('NO EXISTE PERSONA CON ESA EDAD');
    return null
}


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

console.log('ordenando...');

personas.sort((a,b) => a.edad - b.edad)

//        10 - 5 = 5
//        10 - 50 = -40
//        10 - 10 = 0

console.table(personas);

console.log(bBinariaPers(personas , 16))
console.log(bBinariaPers(personas , 25))