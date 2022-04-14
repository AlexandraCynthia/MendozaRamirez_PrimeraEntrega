let sexo = prompt ("Indica tu sexo - M o F");
let altura =prompt ("Introduce tu altura en metros");
let peso = prompt("Introduce tu peso en Kg");


function imc(sexo, altura, peso){
	let indice= (peso / (altura*altura));
	let resultado ="";

	switch (sexo)
	{
		case "F":
		if (indice <19)
		{
		resultado = "Desnutrición";
		}
		else if (indice>=19 && indice <25)
		{
		resultado = "Normal";
		}
		else if (indice>=25 && indice <30)
		{
		resultado = "Sobrepeso";
		}
		else
		{
		resultado ="Obesidad";
		}
		break

		case "M":
		if (indice <18)
		{
		resultado = "Delgadez";
		}
		else if (indice>=18 && indice <25)
		{
		resultado = "Normal";
		}
		else if (indice>=25 && indice <30)
		{
		resultado = "Sobrepeso";
		}
		else
		{
		resultado ="Obesidad";
		}
		break
		default:
		resultado = "No se pudo calcular, verifica si ingresaste correctamente F o M";
	}
return ": " + indice  + " y estás clasificado como :" + resultado;
}


function mostraresultado (sexo, altura, peso, indice)
{
	let mensaje = "Ingresaste sexo: "+ sexo + ", altura :"+ altura + ", peso :" + peso + ", lo que da un indice de: "+indice; 
	alert (mensaje); 
}


let resultado = imc(sexo, altura, peso);
mostraresultado(sexo, altura, peso, resultado);