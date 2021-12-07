//eje02_dom_js.js

function agregarElemento() 
		 {
			
			var navegador = prompt('Introduce navegador','');
			var lista = document.getElementById('lista');
	        var smensajes = ""	
			smensajes = '<li>' + navegador + '</li>';
			lista.innerHTML = lista.innerHTML + smensajes;
		};

function agregarElementonodo() 
		 {
			var navegador = prompt('Introduce navegador =>','');
			var nuevaliga = document.createTextNode(navegador),
      		p1 = document.getElementById("lista");
			p1.appendChild(nuevaliga);
		};
function eliminar(xnodo) 
		{
		  
		 p1 = document.getElementById("lista");
		  p2 =  document.getElementsByTagName('li');
		  var throwawayNod =  p1.removeChild(p2[xnodo]);
		  console.log(p2);
		  alert('eliminado');
	   };
	