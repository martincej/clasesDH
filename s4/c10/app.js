/* 
    c10
    *Array
    *String
*/


let pelisFavoritas = ['Star Wars', 'Kill Bill', 'Alien 2 ', 'Avatar 2'];
let pelisFavoritas2 = ['Kill Bill', 'Alien 2 ', 'Avatar 2'];
//?INDICES         0            1          2       3

// console.log(pelisFavoritas);
/* console.log(pelisFavoritas[2]);
console.log(pelisFavoritas[3]); */ // undefined



function mostrarPelis(pelis) {
    console.log('listando: ' +  pelis.length + ' Pelis');
    for (let i = 0; i < pelis.length ; i++) {
        console.log(pelis[i]);     
    }
}

/* console.log('Sala 1');
mostrarPelis(pelisFavoritas)
console.log();
console.log('Sala 2');
mostrarPelis(pelisFavoritas2) */


let peli = 'Avatar'
/* console.log(peli.length); // 6
console.log(peli[0]);  */// A


function deletrearPeli(peli) {
    console.log('Deletreando : ' +  peli.length + ' Caracteres');
    for (let i = 0; i < peli.length ; i++) {
        console.log(peli[i]);     
    }
}

deletrearPeli(peli)














