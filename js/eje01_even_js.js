//eje01_even_js.js

 window.onload = init;

            function resaltar(elemento) {
                switch(elemento.style.borderColor) {
                case 'silver':
                case 'silver silver silver silver':
                case '#c0c0c0':
                    elemento.style.borderColor = 'black';
                    break;
                case 'black':
                case 'black black black black':
                case '#000000':
                    elemento.style.borderColor = 'silver';
                    break;
                case 'red':
                case 'red red red red':
                case '#ff0000':
                    elemento.style.borderColor = 'silver';
                    break;
                }
            };

            function init(){
              
                document.getElementById('contenido').onmouseover = resaltar(this);
                document.getElementById('contenido').onmouseout = resaltar(this);
            };