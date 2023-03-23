/* 
CLASE CONSULTA #2 MARTIN
*RESOLVEREMOS SUS DUDAS, 
*ENVÍE EL ENUNCIADO AL CANAL DE DUDAS

DESMUTEAR PARA CONSULTAR UNICAMENTE POR FAVOR
*/

/* 
CREAR UNA FUNCION QUE RECIBA UN ARRAY de nros enteros positivos POR PARAMETRO
RETORNE TRUE SI EL ARRAY ESTA ORDENADO ASC, FALSE CASO CONTRARIO :)
*/

const edades = [11, 12, 15, 18, 25, 22, 10, 33, 10, 5];
const edades1 = [11, 12,80];


function filtroMenores(arrayEdades) {
    let menores = []
    for (let i = 0; i < arrayEdades.length; i++) {
        //console.log(arrayEdades[i]);    
        if (arrayEdades[i] < 18) {
            menores.push(arrayEdades[i])
        }    
    }

    return menores
}

console.log(filtroMenores(edades))
console.log(filtroMenores(edades1))
 
/* {
    {
        let nombre = 'martin4'

        {
            let nombre = 'martin3'

            {
                let nombre = 'martin2'

                {
                    let apellido = 'martin1'
                    console.log(nombre);//
                }
            }
        }
    }

} */


// console.log(filtroMenores(edades))

