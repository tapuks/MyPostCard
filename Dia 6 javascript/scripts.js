let contain= document.getElementById('contain');

let quien = ['Mi novia', 'Mi perro', 'Mi gato', 'Mi hermano', 'Mi madre'];
let accion= [' esta enfermo', ' ha roto mis deberes', ' cumple años', ' le duele el ojo', ' le ha picado una araña']
let cuando= [' hoy',' ayer', ' por la noche',' antes de comer',' ahora mismo']

function excusa() {
   
    var quienAleatorio  = Math.floor( Math.random() * (5-0) ) +0;
    var accionAleatorio = Math.floor( Math.random() * (5-0) ) +0;
    var cuandoAleatorio = Math.floor( Math.random() * (5-0) ) +0;

    var excusa= quien[quienAleatorio] + accion[accionAleatorio] + cuando[cuandoAleatorio];
    
    let fragment= document.createDocumentFragment();
    let nuevaExcusa=document.createElement('p');
    nuevaExcusa.textContent=excusa;
    fragment.appendChild(nuevaExcusa);
    contain.appendChild(fragment);
    
    
    
}

// function excusa() {
   
//     var quienAleatorio  = Math.floor( Math.random() * (5-0) ) +0;
//     var accionAleatorio = Math.floor( Math.random() * (5-0) ) +0;
//     var cuandoAleatorio = Math.floor( Math.random() * (5-0) ) +0;

//     var excusa= quien[quienAleatorio] + accion[accionAleatorio] + cuando[cuandoAleatorio];
//     contain.innerHTML=excusa;
    
// }






    

