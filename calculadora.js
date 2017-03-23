var numero1 = "";
var numero2 = "";
var operacion;

//cuando se apreta un numero, esta funcion lo recibe.
function asignarNumero(numero){
    if(document.getElementById("textoCalculadora").value == "0" || numero1 == 0){
        numero1 = numero;
    }else{
        numero1 += numero;
    }
        document.getElementById("textoCalculadora").value = numero1;
}



//Esta funcion se llama cada vez que se presiona un boton de operacion.
function operar(valor){
  var valorNumerico;
	if (numero1 == 0){
		resultado = parseInt(document.getElementById("textoCalculadora").value);
	}
	numero2 = parseFloat(numero1);
	numero1 = 0;
	operacion = valor;
}



/****************Funcion para boton igual*******************
*         suma = 1, resta = 2, multiplicacion = 3,         *
*         division = 4, exponente = 5                      *
************************************************************/
function igual(){
    numero1 = parseFloat(numero1);
	switch (operacion){
		case 1:
			numero1 = numero2 + numero1;
		break;
		case 2:
			numero1 = numero2 - numero1;
		break;
		case 3:
			numero1 *= numero2;
		break;
		case 4:
			numero1 = numero2 / numero1;
		break;
		case 5:
			numero1 = Math.pow(numero2, numero1);
		break;
    case 6:
    numero1 = Math.sqrt(numero2, numero1);
    break;
    case 7:
    numero1 = Math.log(numero2, numero1);
    break;
	}
	document.getElementById("textoCalculadora").value = numero1;
	numero2 = parseInt(numero1);
}
