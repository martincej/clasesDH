/**  
 * En un concurso de fotografía, donde los usuarios publican una fotografía y obtienen likes, se registra la cantidad de likes obtenidos por cada usuario en un array. Ordenar
 los valores para poder indicar cuál fue la mayor cantidad de likes obtenidos, cuánto obtuvo el segundo, cuánto el tercero y cuánto el que menos likes obtuvo —suponer
 que participaron 15 usuarios y suponer para cada uno, una cantidad de likes—.  
 
 */
 const likes = [12, 50, 10, 30, 15, 4, 5, 25, 35, 45, 60, 70, 55, 80, 90];

 const likesOrdenados = (num) =>{
     let temp = 0; 
     for (let i = 0; i < num.length; i++) {
         for (let j = 0; j < num.length; j++) {
                 
             if(num[j] < num[j+1]){
                 temp = num[j];
                 num[j] = num[j+1];
                 num[j+1] = temp;
             }
         }
     }
     return num; 
 }
 
 console.log(likesOrdenados(likes));
 console.log(likes[0]);
 console.log(likes[2]);
 console.log(likes[likes.length-1])