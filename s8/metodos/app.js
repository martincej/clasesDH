/* 
    *METODOS DE ARRAY

*/
const numeros = [2,4,6,1,25,6]
/* FOREACH */

/* 
for (let i = 0; i < numeros.length; i++) {
    const numero = numeros[i]; 
    console.log(numero);   
}
*/


/* const cb = (numero,i) => {
    console.log(numero + ' posicion: '+ i);
}

numeros.forEach(cb) */

let nuevaLong = numeros.push(9)
// console.log(nuevaLong);
// numeros.forEach(e => console.log(e));

/* FILTER */

let pares = numeros.filter(e => !(e % 2))

let pares2 = numeros.filter(function(e) {
   return e => !(e % 2)
})
// console.log(pares);

/* FIND */

let arrayCuentas = [
    {
      nroCuenta: 5486273622,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 27771,
      titularCuenta: "Abigael Natte",
    },
    {
      nroCuenta: 1183971869,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 8675,
      titularCuenta: "Ramon Connell",
    },
    {
      nroCuenta: 9582019689,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 27363,
      titularCuenta: "Jarret Lafuente",
    },
    {
      nroCuenta: 1761924656,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 32415,
      titularCuenta: "Ansel Ardley",
    },
    {
      nroCuenta: 7401971607,
      tipoDeCuenta: "Cuenta Unica",
      saldoEnPesos: 18789,
      titularCuenta: "Jacki Chan",
    },
];

const encontrado = arrayCuentas.find(e => e.nroCuenta === 5486273622)
// console.log(encontrado);

/* REDUCE */

const total = numeros.reduce((acc,elem) => acc + elem, 1000)
const totalSaldos = arrayCuentas.reduce((acc,elem) => acc + elem.saldoEnPesos,0)
// console.log(totalSaldos);

/* SORT */
// console.table(arrayCuentas);
arrayCuentas.sort((a,b) => a.saldoEnPesos - b.saldoEnPesos)

// 10 - 5 = 5
// 10 - 50 = -40
// 10 - 10 = 0

// console.table(arrayCuentas);
arrayCuentas.sort((a,b) => b.saldoEnPesos - a.saldoEnPesos)
// console.table(arrayCuentas);