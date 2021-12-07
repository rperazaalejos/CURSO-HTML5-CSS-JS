//eje01_even.js

window.onload = function(){

    const divElement = document.getElementById("contenido");

    //Se ejecuta el evento onmouseover mediante una funcion anonima
    //se le asignael valor "silver" a la propiedad borderColor
    //con el elemento this se indica que el objet
    /*divElement.onmouseover = function() {
        this.style.borderColor = "silver";
    } */   
    
    //Se ejecuta el evento onmouseout mediante una funcion anonima
    //se le asignael valor "red" a la propiedad borderColor
    /*divElement.onmouseout = function() {
        this.style.borderColor = "red";
    }*/

    //Lo anterior se puede hacer mediante el metodo addEventListener
    //El metodo addEventListener recibe el evento (click, change, mouseover, mouseout);
    // y una función, puede ser una funcion anonima o con nombre

    //Comenta las líneas anteriores y descomenta las siguientes para 
    //observar el comportamiento de los eventos.
    //prueba con otras propiedades del css (ejemplo, tamaño y color de fonts, background, etc) 
    // y con otros eventos 

    // eventlisterin no lleva on solo los eventos generales llevan onmouseover por ejemplo
    
        divElement.addEventListener("mouseover", function(){
            this.style.borderColor = "silver";
        });

        divElement.addEventListener("mouseout", function(){
            this.style.borderColor = "red";
            this.style.color = "black";
        });
}

