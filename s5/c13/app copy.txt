/* 
 CLASE 13 - INTEGRACION DE CONTENIDOS
*/

const misMascotas = [
    {
        nombre: "Cachupin",
        raza: "Akita",
        edad: 4,
        sonido: "Guau",
    },
    {
        nombre: "Bobby",
        raza: "Pichichu",
        edad: 6,
        sonido: "Guauguau"
    },
    {
        nombre: "Deasy",
        raza: "cocker spaniel",
        edad: 2,
        sonido: "Grrrr"
    },
    {
        nombre: "Negrito",
        raza: "peque",
        edad: 10,
        sonido: "guaf guaf"
    },
    {
        nombre: "Jhon",
        raza: "Doberman",
        edad: 4,
        sonido: "Roof"
    },
    {
        nombre: "Tom",
        raza: "Dogo Argentino",
        edad: 12,
        sonido: "Roof Roof Roof"
    }
]


console.table(misMascotas);

/* 
Deberemos crear una función que se llame aumentarEdad que aumente la edad de cada animal en 1.
*/

function aumentarEdad(arrayMascotas){
    for (let i = 0; i < arrayMascotas.length; i++) {
        // arrayMascotas[i].edad++
        arrayMascotas[i].edad = arrayMascotas[i].edad + 1
    }
}

/* 
aumentarEdad(misMascotas)

console.log('incrementando edad...');

console.table(misMascotas); */

/* 
Ahora debemos crear otra función, que se llame  aumentarEdad2, que va a hacer un trabajo más fino:
? Si la mascota tiene menos de 6 años, debe aumentar su edad en 1
? Si la mascota tiene entre 6 y 10 años, debe aumentar su edad en 2
? Si la mascota tiene más de 10 años, deberá sumarle la mitad de su edad

*/

function aumentarEdad2(arrayMascotas){
    for (let i = 0; i < arrayMascotas.length; i++) {
        if (arrayMascotas[i].edad < 6) {
            arrayMascotas[i].edad = arrayMascotas[i].edad + 1
        }else if (arrayMascotas[i].edad <= 10) {
            arrayMascotas[i].edad = arrayMascotas[i].edad + 2
        }else{
            arrayMascotas[i].edad = arrayMascotas[i].edad * 1.5
        }
    }
}


/* aumentarEdad2(misMascotas)

console.log('incrementando edad...');

console.table(misMascotas); */


/* 
Ahora crearemos una función que va a generar un identificador (ID) en cada objeto, que será secuencial y que empezará en 1.
*/

function generarID(arrayMascotas){
    for (let i = 1; i <= arrayMascotas.length; i++) {
        arrayMascotas[i - 1].id = i
    }
}


console.log('generando identificadores....');
generarID(misMascotas)
console.table(misMascotas);












/* let auto = {
    color : 'rojo'
}

auto.marca = 'HP'
auto.id = 83748

console.log(auto); */

























/* let edad = 8

edad < 6 ? edad++ :
    edad <= 10 ? edad +=2 :
    edad = edad + (edad / 2);

    console.log(edad); */