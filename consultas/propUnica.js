let arrayPrueba = [{nombre: 'Lean', edad: 27}, {nombre: 'Eze', edad: 49}]

function propiedadUnica (arrayUnico, propUnica){
  let arrayReturn = [];
  for(let i = 0; i < arrayUnico.length; i++){
    arrayReturn.push({[propUnica] : arrayUnico[i][propUnica]});
  }

  return arrayReturn;
}


console.log(propiedadUnica(arrayPrueba, "edad"));
console.log(propiedadUnica(arrayPrueba, "nombre"));