




const puntajesAlicia = [10, 55, 50];
const puntajesBob =    [90, 45, 50];


function encontrarGanador(puntajesAlicia, puntajesBob) {
    let puntosPrimerParticipante = 0;
    let puntosSegundoParticipante = 0;
   
    for (let i = 0; i < puntajesAlicia.length; i++) {
    //    console.log(puntajesAlicia[i] + ' - ' + puntajesBob[i]);
    //    console.log(`${puntajesAlicia[i]} < ${puntajesBob[i]}`);
        
        if (puntajesAlicia[i] > puntajesBob[i]) {
            puntosPrimerParticipante +=  1
        }else if (puntajesAlicia[i] < puntajesBob[i]) {
            puntosSegundoParticipante = puntosSegundoParticipante + 1
        }else{ // empate en etapas ??????

        }
    }



    if (puntosPrimerParticipante > puntosSegundoParticipante) {
        return 'Primer '
    }else if(puntosPrimerParticipante < puntosSegundoParticipante){
        return 'Segundo '
    }else{
        return 'Nadie '
    }

}

/* encontrarGanador(puntajesAlicia, puntajesBob)


console.log('El ganador es: ' + encontrarGanador(puntajesAlicia, puntajesBob) + 'participante'); */