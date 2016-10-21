var elementoLista = document.getElementById('agrega');


function activa(){ //detonada por onchange dentro del area de texto.
	var boton= document.getElementById('boton');
	if (elementoLista.value != "" || elementoLista.value != null) {
		boton.removeAttribute("disabled")	
	}
	}

function agregaLista(){ //agrega un elemento a la lista de tareas
	if (elementoLista.value.length>0) {
		var nuevoItem = document.createElement('li');
		var nuevoCheck= document.createElement('input');
		nuevoCheck.setAttribute('type', 'checkbox')
		nuevoCheck.setAttribute('onClick', 'tachar(this)')
		/*nuevoCheck.onClick = function(checado){
		checado.target.parentNode.classList.toggle("checked")
		}*/
		nuevoItem.appendChild(nuevoCheck)
		nuevoItem.innerHTML += '  ' + elementoLista.value + '    <span class="glyphicon glyphicon-trash pull-right" onclick="borrar(this)"></span>'
		var lista = document.getElementById('lista');
		lista.appendChild(nuevoItem);
		elementoLista.value = "";
		document.getElementById("boton").setAttribute("disabled", "disabled")
	}
}

function borrar(esto){
	var papa = esto.parentNode
	papa.parentNode.removeChild(papa)
}

function tachar(esto){
	var papa = esto.parentNode;
	if (esto.checked==true){
	papa.style.textDecoration = "line-through"
	}
	else if(esto.checked==false){
	papa.style.textDecoration = "none"
	}
}


/*else {}
		boton.setAttribute( "disabled", "disabled")
		 onchange="activa()"
		  
createTextNode

box.onclick = function(ev)


		  */
		
/*function checado(){ //CAMBIAR NOMBRE A FNC
	var checkInputs = document.getElementsByTagName("input");
	for(var i=0; i<checkInputs.length; i++){
		if (checkInputs[i].getAttribute('type') == "checkbox" && checkInputs[i].checked=true){	
			checkInputs[i].parentNode.style.textDecoration ='line-through';
			}	
		else if (checkInputs[i].checked=false) {
			checkInputs[i].parentNode.style.textDecoration = 'none'
		}
	}
}
*/


