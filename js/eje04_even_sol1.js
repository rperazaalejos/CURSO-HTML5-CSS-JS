//eje04_even_sol2.js
window.onload =  muestraOculta(0);


function muestraOculta(id) {
        var parrafo = document.getElementById('parrafo_' + id);
        var enlace = document.getElementById('enlace_' + id);
        switch(parrafo.style.display){
            case 'none':
                parrafo.style.display= 'block';
                enlace.innerHTML = 'Ocultar Párrafo';
                break;
            case 'block':
            case '':
                parrafo.style.display = 'none';
                enlace.innerHTML = 'Mostrar Párrafo';
                break;                		
        }
    

};


