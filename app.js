let numeroSecreto = 0;
let intentos = 0;
console.log(numeroSecreto);


/* 
let title = document.querySelector('h1');
title.innerHTML = 'juego del número secreto';

let parrafo = document.querySelector('p');
parrafo.innerHTML = 'introduce un número del 1 al 10';
*/

function asignarTextoElemento(etiqueta, texto){
   let elementoHtml = document.querySelector(etiqueta);
   elementoHtml.innerHTML = texto;
   return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroDeUsuario === numeroSecreto){
            asignarTextoElemento('p',`Acertastes el número en ${intentos} ${(intentos === 1 ) ? 'intento' : 'intentos'}`);
            document.getElementById('reiniciar').removeAttribute('disabled');
            document.querySelector('#intentar').setAttribute('disabled','true');
            limpiarCaja();
    }else{  
        // El usuario no acertó.
          if (numeroDeUsuario > numeroSecreto){
                asignarTextoElemento('p','El número secreto es menor');
          }else{ 
                asignarTextoElemento('p','El número secreto es mayor'); 
               }  
          
          intentos++;
          limpiarCaja();
        }
        return;
    }



function limpiarCaja(){
    let valorCaja = document.querySelector('#valorUsuario').value = '';
}




function generarNumeroSecreto(){
    return Math.floor(Math.random()*10)+1;
}



function condicionesInciales(){
    asignarTextoElemento('h1','juego del número secreto!');
    asignarTextoElemento('p','Indica un número del 1 al 10');
    numeroSecreto = generarNumeroSecreto(); 
    intentos = 1;

}


function reiniciarJuego(){
     //limpiar Caja
     limpiarCaja();
     //Indicar mensaje de intervalo de números
     //Generar al número aleatorio
     //Inicializar en número intentos 
     condicionesInciales();
     //Desahabilitar el botón de nuevo juego
     document.querySelector('#reiniciar').setAttribute('disabled','true');
     document.querySelector('#intentar').removeAttribute('disabled');  
}

condicionesInciales();