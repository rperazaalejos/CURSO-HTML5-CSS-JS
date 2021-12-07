//eje03_js.js
let miVar = 30;
function alerta(){
    var contador;
    let ncontador;
    
    miVar = 100;
    texto = 'Este es un texto comillas simples.';
    texto2 = "Este es un texto con comilla dobles.";
    texto3 = 'Es un \'texto comillas simples\' dentro del mismo.';
    contador = null;
    console.log(contador);
    console.log(typeof contador);

    if (contador == undefined){
        console.log('el null es igual a undefined');
    }
    else{
        console.log('el no no es undefined');
    }
    //alert(texto + ' ' + texto2 + ' ' +  texto3);
    //alert(texto + ' ' + texto2 + ' ' +  texto3);
}
function hacerClick(){
    document.getElementsByTagName('p')[1].onclick = alerta;
    document.getElementById('uno').onclick = alerta;
}
window.onload = hacerClick;