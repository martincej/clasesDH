/* 

Crear una función que genere una matriz de 3x3. 
Cada fila debe tener solo 10 números. 
La matriz debe verse así:
*/


const generarMatriz = (n,m) => {
    let matriz = []
    let elem = 1
    for (let i = 0; i < n; i++) {
        matriz.push([])
        for (let j = 0; j < m; j++) {
            matriz[i].push(elem)
            elem++
        }
    }
    return matriz;
}


let matrizGenerada = generarMatriz(3,3) 

console.table(matrizGenerada)

/* 
console.log(matrizGenerada[0][0])
console.log(matrizGenerada[1][1])
console.log(matrizGenerada[2][2])
console.log(matrizGenerada[3][3])
console.log(matrizGenerada[4][4])
console.log(matrizGenerada[5][5])
console.log(matrizGenerada[6][6])
console.log(matrizGenerada[7][7])
*/


const sumarDiagonal = (matriz) => { 
    let acc = 0
    for (let i = 0; i < matriz.length; i++) {
        acc = acc + matriz[i][i]
    }
    return acc
}

// console.log(sumarDiagonal(matrizGenerada))


























// PMV --> lo minimo

/* [
    [1,1,1],
    [1,1,1],
    [1,1,1]
] */


const generarMatriz2 = (fila, col) => {
    const mat = []
    let cont = 5
    for (let i = 0; i < fila; i++) {
        mat.push([])
        
        for (let j = 0; j < col; j++) {
            mat[i].push(cont)
            cont++
        }
    }
    return mat;
}
/* 
console.table(generarMatriz2(5, 4))

console.table(generarMatriz2(2, 2)) 
*/