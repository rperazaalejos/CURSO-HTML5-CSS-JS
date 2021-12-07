//eje06_js.js


var ingredientes = new Array();
ingredientes[0] = 'azucar';
ingredientes[1] = 'leche';
ingredientes[2] = 'cafe';

console.log(ingredientes);
console.log(ingredientes[2]);
console.log('longitud del arreglo',ingredientes.length);

var scores = new Array();
console.log(scores);

var score2 = Array();

var score3 = [];
var ingredientes2 = new Array('elemento1','elemento2',true,false,89.5);
var ingredientes3 = new Array('elemento3','elemento4',true,false,89.5);

console.log(ingredientes2[3]);
console.log(ingredientes2[4]);
console.log(ingredientes2[5]);
/*
for (let i = 0; i < ingredientes2.length; i++) {
    console.log(ingredientes2[i]);
    
}

for(let i=0; i < ingredientes2.length;i++)
     console.log(ingredientes2[i]);
*/
     for(let i of ingredientes2){
         console.log(i);
     }

var todos = ingredientes2.concat(ingredientes3);

console.log(todos);

index = ingredientes2.indexOf('cafe');
console.log(index);
index2 = ingredientes2.lastIndexOf(true);
console.log(index2);
// join regresa cadena de los elementos
var str = ingredientes2.join();


var lastElement = ingredientes2.pop();
console.log(lastElement);

var newSize = ingredientes2.push('new element');
console.log(ingredientes2);
console.log(newSize);
console.log(ingredientes2.length);

var primerElemento = ingredientes2.shift();
console.log(primerElemento);
console.log(ingredientes2);

var pedazos = ingredientes2.slice(1,3);
console.log(pedazos);

var numeros = [8,3,2,5,1,7];
console.log(numeros.sort());

var cadena = numeros.toString();
console.log(cadena);

elemento = numeros.unshift(10);
console.log(numeros);
console.log(elemento);