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

