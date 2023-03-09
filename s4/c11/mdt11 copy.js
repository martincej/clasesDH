//la lista de clientes.
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

console.table(arrayCuentas);
console.log('**************************************');
console.log('**************************************');
// console.log(arrayCuentas[4].titularCuenta);

function buscarTitular(arrayCuentasP, titular) {
  
  for (let i = 0; i < arrayCuentasP.length; i++) {
    if (arrayCuentasP[i].titularCuenta === titular) {
      return arrayCuentasP[i]
    }
  }
  return false

}
/* 
console.log(buscarTitular(arrayCuentas, 'Jacki Chan'))
console.log(buscarTitular(arrayCuentas, 'Martin Cejas'))
 */


const banco = {
  cuentas: arrayCuentas,

  buscarTitular : function (titular) {
    for (let i = 0; i < this.cuentas.length; i++) {
      if (this.cuentas[i].titularCuenta === titular) {
        return this.cuentas[i]
      }
    }
    return false
  },
}

console.log(banco.buscarTitular('Jacki Chan'))
console.log(banco.buscarTitular('Martin Cejas'))