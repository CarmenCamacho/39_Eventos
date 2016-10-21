

function agrega(){
	var creaNombre = document.createElement("input");
	creaNombre.setAttribute("placeholder", "Titulo");
	creaNombre.setAttribute("id", "titulo");
	var boton1 = document.createElement("button");
	boton1.setAttribute("class", "btn btn-primary boton1");
	boton1.setAttribute("onclick", "guarda()");
	boton1.innerHTML = "guardar"
	document.getElementById("div1").appendChild(creaNombre);
	document.getElementById("div1").appendChild(boton1);
	/*if(creaNombre.value= "" || creaNombre.value= null ){
		document.getElementById("addbutton").disabled = true;
	}
	else{
		document.getElementById("addbutton").disabled = false;
	}*/
}

var titulo = document.getElementById("titulo");
console.log(titulo.value)
/*
	if(titulo.value= "" || titulo.value= null ){
		document.getElementById("addbutton").disabled = true;
	}
	else{
		document.getElementById("addbutton").disabled = false;
	}
*/