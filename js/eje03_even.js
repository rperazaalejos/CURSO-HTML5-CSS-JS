//eje03_even.js

var lista;
window.onload = init;

function init() {
    lista = document.getElementById('lista');
    document.getElementById("add").onclick = agregarElemento;
}

function agregarElemento() {
    //Se crea el nodo Element
    var elemento = document.createElement("li");

    //Se pide el valor del elemento mediante un prompt
    let valor = prompt("Valor:", "");

    //se crea el nodo Text
    var texto = document.createTextNode(valor);

    //Se agrega el texto en el Element
    elemento.appendChild(texto);

    //se agrega el elemento en la lista UL
    lista.appendChild(elemento);
}

