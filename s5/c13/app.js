/* 
 CLASE 13 - INTEGRACION DE CONTENIDOS
*/

const misMascotas = [
    {
        nombre: "Tom",
        raza: "Dogo Argentino",
        edad: 12,
        sonido: "Roof Roof Roof"
    },
    {
        nombre: "Kai",
        raza: "Boxer",
        edad: 10,
        sonido: "es como una Tetera"
    },
    {
        nombre: "chiquita",
        raza: "Pincher",
        edad: 5,
        sonido: "rrr rrr rrr"
    },
    {
        nombre: "chocolo",
        raza: "kiltro",
        edad: 9,
        sonido: "wuau"
    },
    {
        nombre: "Molly",
        raza: "Quiltro",
        edad: 2,
        sonido: "Guau"
    },
    {
        nombre: 'Rugui',
        raza: 'Shar Pei',
        edad: 5,
        sonido: 'woof'
    },
    { nombre: "Ahsoka", raza: "gato", edad: 2, sonido: "Miau" }
]


// console.table(misMascotas);

/* 
Deberemos crear una función que se llame aumentarEdad que aumente la edad de cada animal en 1.
*/

function aumentarEdad(misMascotas) {
    for (let i = 0; i < misMascotas.length; i++) {
        misMascotas[i].edad = misMascotas[i].edad + 1;
    }
}
console.log('modificando edades...');
// aumentarEdad(misMascotas2)
// console.table(misMascotas2);

/* 
Ahora debemos crear otra función, que se llame  aumentarEdad2, que va a hacer un trabajo más fino:
? Si la mascota tiene menos de 6 años, debe aumentar su edad en 1
? Si la mascota tiene entre 6 y 10 años, debe aumentar su edad en 2

?Si la mascota tiene más de 10 años, deberá sumarle la mitad de su edad
*/


function aumentarEdad2(arrayMascotas) {
    for (let i = 0; i < arrayMascotas.length; i++) {
       
        if (arrayMascotas[i].edad < 6) {
            arrayMascotas[i].edad = arrayMascotas[i].edad + 1
        }else if (arrayMascotas[i].edad <= 10) {
            arrayMascotas[i].edad = arrayMascotas[i].edad + 2;
        }else{
            arrayMascotas[i].edad = arrayMascotas[i].edad + (arrayMascotas[i].edad / 2);
        }
    }
}

/* aumentarEdad2(misMascotas)
console.log(misMascotas);
 */

/* 
{
    let nombre = 'Tom'
    
    {
        let nombre = 'Luna'

        {
            let nombre = 'Negrito'
            console.log(nombre);
        }
    }
}


 */








/* 
Ahora crearemos una función que va a generar un identificador (ID) en cada objeto, que será secuencial y que empezará en 1.
*/














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