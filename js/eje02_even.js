//eje01_even.js

function mostrarMensaje() {
    let element = document.getElementById("contenido");
    alert(element.innerHTML);
    //tambien con la propiedad innerText
    alert(element.innerText);
}

window.onload = function () {
    document.getElementById("contenido").onclick = mostrarMensaje;

    //se usa una funcion flecha para mostrar el valor del boton
    document.getElementById("btnMensaje").onclick = () => {
        alert("Mensaje al lanzar el botón");
    };

};

