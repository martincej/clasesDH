/* 

Más tarde, de producción dieron el aviso de que las películas deberían estar todas
en mayúsculas. Para esto solicitan que crees una función que reciba por
parámetro un array y convierta el contenido de cada elemento a mayúsculas.
Pista: revisá qué hace el método de strings .toUpperCase().
*/

let pelis = ["star wars",
    "totoro",
    "rocky",
    "pulp fiction",
    "la vida es bella"]
let pelis2 = ['Avatar']

// let res = pelis.join

function mayusPelis(pelis) {
    for (let i = 0; i < pelis.length; i++) {
        // const peli = pelis[i];
        pelis[i] = pelis[i].toUpperCase()
    }
}

const mayusPelisF = (pelis) => {
    for (let i = 0; i < pelis.length; i++) {
        // const peli = pelis[i];
        pelis[i] = pelis[i].toUpperCase()
    }
}

console.log(pelis);
mayusPelisF(pelis)
console.log(pelis);
