//eje06_js.js


		window.onload = function () {
			// Numero de enlaces de la pagina
			var info = document.getElementById('info');
			var smensajes  = "";
            var urls= document.getElementsByTagName('a');
			var turls = urls.length;
			smensajes = 'El numero de enlaces en la pagina es :' + turls;
			
			// Direccion del penultimo enlace
           var sdireccion = urls[urls.length - 2].getAttribute('href');
		   smensajes = smensajes + '<br> Dirección del penultimo enlace :' + sdireccion;

			// Numero de enlaces que apuntan a http://prueba
			let tprueba = 0;
			
			for (let i = 0; i < urls.length; i++) {
				if (urls[i].getAttribute('href') === 'http://prueba') {
					tprueba = tprueba + 1;
				}
				
			}
			smensajes = smensajes + '<br> Numero de enlaces que apuntan a http://prueba :' + tprueba;
			
			// Numero de enlaces del tercer parrafo
			var listaparrafos = document.getElementsByTagName('p');
			var listaanclas = listaparrafos[2].getElementsByTagName('a');
			tanlcas = listaanclas.length;
			
			smensajes = smensajes + '<br> Numero de enlaces del tercer parrafo :' + tanlcas;
			info.innerHTML = smensajes;
		};
	