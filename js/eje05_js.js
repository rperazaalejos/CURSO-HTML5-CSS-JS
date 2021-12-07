//eje04_js.js

// funcion anomina , es una expresion
/*
const sumar = function (x,y){
    return x + y;
}

var a = sumar(4,5);
console.log(a);
a = sumar(300,200);
console.log(a);
*/

var operacion = function (x,y){
    return x + y;
}

var a = operacion(5,8);
console.log(a);

operacion = function(x,y){
    return x - y;
}
var b = operacion(300,200);

console.log(b);



function init(){
    document.getElementsByTagName('button')[0].onclick = sumar;
}

function myFun(fun, arr){
    let result = [];
    
    for (let i = 0; i < arr.length; i++) {
        result[i] = fun(arr[i]);
    }
    return result;
}

const cubo = function(x){
    return x * x * x;
}

let array = [2,4,6,8,10];
let valores = myFun(cubo,array);
console.log('arreglo valores:', valores);

var num1 = 23, num2 = 24, name = 'ricardo';


function multiplicar(x,y){
    return x*y;
}
console.log(multiplicar(3,4));


function adicionar(){
    var num1 = 10, num2 = 20;
    function add(){
        return name + ' anoto' + (num1 + num2);
    }
    return add();
}

console.log(adicionar());

let f = () =>{ console.log('funcion sin parametros')};

let f1 = (x) => x*x;

let f2 = (x,y,z) => {return x + y + z;};

console.log(f());
console.log(f1(8));
console.log(f2(2,2,2));
/*
alert('esta es una alerta informativa');
let valor = prompt('deme la cantidad',''); // devuelve siempre cadena

let confirmar = confirm('seguro de eliminar');
console.log(confirmar);
if (confirmar)
    console.log('se elimino');
    else
    console.log('usuario cancelo');
*/
    //window.onload = getEdad;
    window.onload = getColor;

    function getEdad(){
        var edad = prompt('Introduce tu edad','');
        if (isNaN(edad)){
            alert('Introduce un numero valido');

        } else{
            if (Number(edad) > 0 && Number(edad) < 18){
                alert('menor de edad');
            } else{
                if (Number(edad) >=18 && Number(edad) < 60){
                    alert('perosna audlta');
                }else{
                    alert('Adulto Mayor');
                }
            }

        }


    }

    function getColor() {
        var color= prompt('¿Cuál es tu color favorito?', '');
        switch(color) {
            case'rojo': alert('El color rojo es una buena opción!');break;
            case'negro': alert('El color negro combina con todo!');break;
            case'blanco': alert('Es genial este color');break;
            default:alert('El color:' + color + ' no está en la lista');
            break;
        }
    }