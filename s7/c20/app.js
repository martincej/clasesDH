/* 
C20
* Bubble Sort  🗯️
*/
let personas = [
    {
        nombre: "Dua",
        apellido: "Lipa",
        ocupacion: "cantante",
        estatura: 173
    },
    {
        nombre: "Ariana",
        apellido: "Grande",
        ocupacion: "cantante",
        estatura: 160
    },
    {
        nombre: "Taylor",
        apellido: "Swift",
        ocupacion: "cantante",
        estatura: 180
    }
];

console.table(personas);
/* 
Considerando la colección de personas que te presentamos en la demostración anterior, te proponemos el siguiente desafío:

*¿Cómo podrías ordenar la colección, de menor a mayor ASC, considerando solo la estatura? 

*¿Cómo podrías ordenar la colección, de mayor a menor DESC, considerando solo la estatura? 

Utiliza bubble sort.
*/


function ordenar(personas) {

    for (let i = 0; i < personas.length; i++) {
        for (let j = 0; j < personas.length - 1; j++) {

            if (personas[j].estatura > personas[j + 1].estatura) {
                let aux = personas[j]
                personas[j] = personas[j + 1]
                personas[j + 1] = aux
            }

        }
    }
}

ordenar(personas)

console.table(personas)

function bubbleSortEstaturaAsc(arr) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - 1; j++) {
            if (arr[j].estatura > arr[j + 1].estatura) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
}