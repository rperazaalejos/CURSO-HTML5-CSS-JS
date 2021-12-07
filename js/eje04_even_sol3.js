//eje04_even_sol3.js

window.onload = function() {
    var enlaces = document.getElementsByTagName('a');
    for (let i in enlaces) {
        enlaces[i].onclick = muestraOculta;
    }
};

function muestraOculta() { 
    var idEnlace = this.id;
    var arrayEnlace = idEnlace.split('_');
    //arrayEnlace[enlace, 1]
    var numParrafo = arrayEnlace[1]; 
    var parrafo = document.getElementById('parrafo_' + numParrafo);
    
    switch(parrafo.style.display) {
    case 'none':
        parrafo.style.display = 'block';
        this.innerHTML = 'Ocultar Párrafo';
        break;
    case 'block':
    case '':
        parrafo.style.display = 'none';
        this.innerHTML = 'Mostrar Párrafo';
        break;
    }
}

