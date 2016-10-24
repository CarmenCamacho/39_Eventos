
var addButton = document.createElement("button");
addButton.setAttribute("id", "addbutton");
addButton.setAttribute("class", "text-center btn btn-default inline");
addButton.setAttribute("onclick", "agrega()");
addButton.innerHTML = "Añadir una lista..."
var div1 = document.getElementById("div1")
div1.appendChild(addButton);
var botonx = document.createElement("button");
botonx.setAttribute("class", "btn btn-default inline");
botonx.innerHTML = "X";


			
function agrega(){
	var creaNombre = document.createElement("input");
	creaNombre.setAttribute("placeholder", "Añadir una lista...");
	creaNombre.setAttribute("class", "inline");
	creaNombre.setAttribute("id", "titulo");
	var quitaBoton = document.getElementById("addbutton");
	var papa = document.getElementById("div1");
	papa.replaceChild(creaNombre, quitaBoton); //Reemplazo el boton con el input para añadir lista
	var boton1 = document.createElement("button");
	botonx.addEventListener("click", function(){papa.replaceChild(quitaBoton, creaNombre); //POR AQUI ANDA UN ERROR
												papa.removeChild(boton1);
												papa.removeChild(botonx);}) 
	boton1.setAttribute("class", "btn btn-primary boton1 inline");
	boton1.setAttribute("onclick", "guarda()");
	boton1.innerHTML = "guardar"
	document.getElementById("div1").appendChild(creaNombre);
	document.getElementById("div1").appendChild(boton1);
	document.getElementById("div1").appendChild(botonx);
}

function guarda(){
	if(document.getElementById("titulo").value != "" ){
		var titulo = document.createElement("h3");
		titulo.innerHTML = document.getElementById('titulo').value;
		var boton2 = document.createElement("button");
		boton2.setAttribute("class", "block btn btn-primary")
		boton2.setAttribute("id", "boton2")
		boton2.setAttribute("onclick", "contenidoTarjeta(this)")
		boton2.innerHTML = "Añadir tarjeta";
		var tarjeta = document.createElement("div");
		tarjeta.setAttribute("class" , "pull-left inline tarjeta")
		tarjeta.appendChild(titulo);
		tarjeta.appendChild(boton2);
		var final = div1.childNodes.length;
		div1.insertBefore(tarjeta, div1.childNodes[final]);
		document.getElementById("titulo").value = ""; //Borra el cont. previo del input de titulo
	}	

} 

function contenidoTarjeta(esta){
	var papa = esta.parentNode;
	var guardaTarjeta = document.createElement("button");
		guardaTarjeta.innerHTML = "Guardar";
		guardaTarjeta.setAttribute("class", "btn btn-primary inline");
	var fillmeup = document.createElement("textarea");
		fillmeup.setAttribute("class","block");
	var parrafo = document.createElement("p");
	var ultimoChild = papa.childNodes.length - 1;
	papa.replaceChild(guardaTarjeta, esta);
	papa.appendChild(botonx);
	botonx.addEventListener("click", function(){papa.replaceChild(esta, guardaTarjeta); //POR AQUI ANDA UN ERROR
												papa.removeChild(botonx);
												papa.removeChild(fillmeup);})
	
	papa.insertBefore(fillmeup, papa.childNodes[ultimoChild]);
	guardaTarjeta.addEventListener("click",function(){if(fillmeup.value != "" ){
		parrafo.innerHTML = fillmeup.value;
		papa.replaceChild(parrafo, fillmeup);
		papa.replaceChild(esta, guardaTarjeta)
		papa.removeChild(botonx)
		}
	})

}

